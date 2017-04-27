class ApiController < ApplicationController
  
  def gene_names
    data = GenesOrgs.where("name ~ '^"+params[:query]+"'").limit(10).map{ |val| {"name"=>val[:name]} }
    render json: data.to_json
  end

  def gene_ncbis
    data = GenesNcbi.where("ncbi_id ~ '^"+params[:query]+"'").limit(10).map{ |val| {"name"=>val[:ncbi_id]} }
    render json: data.to_json
  end

  def apply_gene_query
    result_table = Hash.new { |hash, key| hash[key] = {} }
    request = params[:request]
    request = request.gsub("prot_but_not_rna = 0","protein_but_not_rna = false")
    request = request.gsub("prot_but_not_rna = 1","protein_but_not_rna = true")
    request = request.gsub("prot_but_not_rna != 0","protein_but_not_rna != false")
    request = request.gsub("prot_but_not_rna != 1","protein_but_not_rna != true")
    request = request.gsub("gene_name","name")
    request = request.gsub("\"","")

    organism_ids = JSON.parse(params[:org_ids])
    organism_names = JSON.parse(params[:org_names])
    organism_names.each_with_index do |name, index| 
      result_table[organism_ids[index]]["org_name"] = name
    end

    org_request = "SELECT id_organisms, count(id_organisms) FROM genes WHERE "
    id_org_part = ""
    organism_ids.each_with_index do |org_id, index|
      id_org_part += "id_organisms = #{org_id}"
      id_org_part += " OR " if index < organism_ids.length-1
    end
    org_request += id_org_part + " GROUP BY id_organisms"
 
    match_gene_request = "SELECT id_organisms, count(id_organisms) FROM genes WHERE ((" +request+") AND ("+id_org_part+")) GROUP BY id_organisms"

    Genes.connection.execute(match_gene_request).to_a.each { |rec| result_table[rec["id_organisms"]]["selected_genes"] = rec["count"]}
    Genes.connection.execute(org_request).to_a.each { |rec| result_table[rec["id_organisms"]]["genes_total"] = rec["count"] }

    result_table.each do |key, value|
      value["percent_selected_genes"] = (value["selected_genes"].to_f/value["genes_total"].to_f).round(6)
      value["selected_genes"] ||= 0
      value["isoforms"] = 0
      value["selected_isoforms"] = 0
      value["precent_selected_isoforms"] = 0
      value["total_exons"] = 0
      value["total_introns"] = 0
    end
    result = result_table.map { |k,v| v }
    render json: result.to_json
  end


# Genes.connection.execute("SELECT COUNT(DISTINCT id_organisms) from genes WHERE id_organisms = 14 OR id_organisms = 15 OR id_organisms = 16 OR id_organisms = 17 OR id_organisms = 18 OR id_organisms = 19 ").to_a

# Genes.connection.execute("SELECT id_organisms, count(id_organisms) FROM genes WHERE id_organisms = 14 OR id_organisms = 15 GROUP BY id_organisms ")


# SELECT COUNT(DISTINCT town) 
# FROM user
# Organism
# Genes Total
# Genes #Selected
# Genes %%Selected
# Isoforms Total
# Isoforms #Selected
# Isoforms %%Selected
# #Exons
# #Introns

  # def organism_names
  #   if params[:query].blank?
  #     render json: {}.to_json 
  #   else
  #     data = Organisms.where("name ~ '^"+params[:query]+"'").limit(10).map{ |val| {"name"=>val[:name], "id"=>val[:id]} }
  #     render json: data.to_json
  #   end
  # end

  # def filter_button
  #   puts "P : #{params[:column]}"
  #   respond_to do |format|
  #     format.html {render layout: "filter_button"}
  #   end
  # end

  # def sql_rules
  #   puts "#{params[:rules]}"
  #   #@xx = SqlMaker.make_request(params[:rules]).to_s
  #   @xx = "#{JSON.parse(SqlMaker.make_request(params[:rules]))['sql']}"
  #   puts @xx
  #   respond_to do |format|
  #     format.js
  #   end
  # end

end