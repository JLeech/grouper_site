class Genes < ApplicationRecord


	def self.count_statistics_table(params)
	    result_table = Hash.new { |hash, key| hash[key] = {} }
	    request = fix_true_false(params[:request])
	
	    organism_ids = JSON.parse(params[:org_ids])
	    organism_names = JSON.parse(params[:org_names])
	    organism_names.each_with_index do |name, index| 
	      result_table[organism_ids[index]]["org_name"] = name
	    end	

	    
	    id_org_part = org_part(organism_ids)

	    org_request = "SELECT id_organisms, count(id_organisms) FROM genes WHERE "
	    org_request += id_org_part + " GROUP BY id_organisms"
	 	Genes.connection.execute(org_request).to_a.each { |rec| result_table[rec["id_organisms"]]["genes_total"] = rec["count"] }

	    match_genes_org_ids_request = "SELECT id_organisms, count(id_organisms) FROM genes WHERE ((" +request+") AND ("+id_org_part+") AND (genes.pseudo_gene = false) ) GROUP BY id_organisms"
	    Genes.connection.execute(match_genes_org_ids_request).to_a.each { |rec| result_table[rec["id_organisms"]]["selected_genes"] = rec["count"]}
	    
		Exons.get_gene_match(request,id_org_part).each { |rec| result_table[rec["id_organisms"]]["total_exons"] = rec["count"]}
		Introns.get_gene_match(request,id_org_part).each { |rec| result_table[rec["id_organisms"]]["total_introns"] = rec["count"]}
		Isoforms.get_gene_match(request,id_org_part).each { |rec| result_table[rec["id_organisms"]]["selected_isoforms"] = rec["count"]}
		Isoforms.get_all_org(id_org_part).each { |rec| result_table[rec["id_organisms"]]["isoforms"] = rec["count"]}

	    result_table.each do |key, value|
	      value["percent_selected_genes"] = ((value["selected_genes"].to_f/value["genes_total"].to_f)*100).round(2)
	      value["selected_genes"] ||= 0
	      value["isoforms"] ||= 0
	      value["selected_isoforms"] ||= 0
	      value["precent_selected_isoforms"] = ((value["selected_isoforms"].to_f/value["isoforms"].to_f)*100).round(2)
	      value["total_exons"] ||= 0
	      value["total_introns"] ||= 0
	    end
	    result_table.delete_if { |key, value| value["selected_genes"] == 0 } 

	    result = result_table.map { |k,v| v }
	end

	def self.org_part(org_ids)
	    id_org_part = ""
	    org_ids.each_with_index do |org_id, index|
	      id_org_part += "id_organisms = #{org_id}"
	      id_org_part += " OR " if index < org_ids.length-1
	    end
	    return id_org_part
	end

	def self.count_full_table(params, report)

	end

	def self.fix_true_false(request)
	    request = request.gsub("prot_but_not_rna = 0","protein_but_not_rna = false")
	    request = request.gsub("prot_but_not_rna = 1","protein_but_not_rna = true")
	    request = request.gsub("prot_but_not_rna != 0","protein_but_not_rna != false")
	    request = request.gsub("prot_but_not_rna != 1","protein_but_not_rna != true")
	    request = request.gsub("gene_name","name")
	    request = request.gsub("\"","")
	    return request		
	end

	def self.count_detailed_statistics(params)
		request = fix_true_false(params["request"])
		organism_ids = JSON.parse(params["org_ids"])
	    organism_names = JSON.parse(params["org_names"])
	    id_org_part = org_part(organism_ids)
	    match_genes_org_ids_request = "SELECT #{detailed_fields.join(",")} FROM genes WHERE ((" +request+") AND ("+id_org_part+") AND (genes.pseudo_gene = false) )"
	    return Genes.connection.execute(match_genes_org_ids_request)
	end

	def self.detailed_fields
		return ["organisms.name","genes.id_orthologous_groups","genes.name","genes.ncbi_gene_id","genes.backward_chain","genes.protein_but_not_rna","genes.startt","genes.endd","genes.start_code","genes.end_code","genes.max_introns_count"]
	end

end



# SELECT genes.id_organisms FROM genes WHERE genes.id_organisms = 1 OR genes.id_organisms = 2 GROUP BY genes.id_organisms;

# exons = Genes.connection.execute("SELECT genes.id_organisms,count(genes.id_organisms) FROM genes,exons WHERE ((genes.id_organisms = 1 OR genes.id_organisms = 2) AND (exons.id_genes = genes.id)) GROUP BY genes.id_organisms").to_a

# introns = Genes.connection.execute("SELECT genes.id_organisms,count(genes.id_organisms) FROM genes,introns WHERE ((genes.id_organisms = 1 OR genes.id_organisms = 2) AND (introns.id_genes = genes.id)) GROUP BY genes.id_organisms").to_a

# all_isoforms = Genes.connection.execute("SELECT genes.id_organisms,count(genes.id_organisms) FROM genes,isoforms WHERE ((genes.id_organisms = 1 OR genes.id_organisms = 2) AND (isoforms.id_genes = genes.id)) GROUP BY genes.id_organisms").to_a

# selected_isoforms = Genes.connection.execute("SELECT genes.id_organisms,count(genes.id_organisms) FROM genes,isoforms WHERE ((genes.id_organisms = 1 OR genes.id_organisms = 2) AND (isoforms.id_genes = genes.id)) GROUP BY genes.id_organisms").to_a


# [{"id_organisms"=>1, "count"=>220725}, {"id_organisms"=>2, "count"=>544578}]
