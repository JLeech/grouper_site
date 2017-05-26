class Exons < ApplicationRecord

    def self.get_gene_match(request,id_org_part)
        exons = Exons.connection.execute("SELECT genes.id_organisms,count(genes.id_organisms) FROM genes,exons WHERE ((#{request}) AND (#{id_org_part}) AND #{additional_exon_params} ) GROUP BY genes.id_organisms").to_a
        return exons
    end


    def self.count_detailed_statistics(params)
        gene_request = Genes.fix_true_false(params["gene_request"])
        exon_request = Exons.fix_true_false(params["request"])
        id_org_part = Genes.org_part(JSON.parse(params["org_ids"]))
        request = "SELECT #{fields_for_select} FROM genes #{Genes.inner_join_for_org_name} #{inner_join_exons} WHERE #{id_org_part} AND #{gene_request} AND #{Genes.additional_gene_params} AND #{exon_request} AND #{additional_exon_params}"
        return Exons.connection.execute(request)
    end

    def self.detailed_fields
        return ["organisms.name","genes.name","genes.id_orthologous_groups","genes.ncbi_gene_id","exons.id_isoforms", "exons.startt",
                "exons.endd","exons.lengthh","exons.typee","exons.start_phase","exons.end_phase","exons.length_phase",
                "exons.indexx","exons.start_codon","exons.end_codon", "exons.prev_intron","exons.next_intron"]
    end

    def self.human_fields_names
        return ["organism_name","gene_name","gene_orthologous_groups","gene_ncbi_gene", "isoform_id", "start",
                "end","length","type","start_phase","end_phase","length_phase",
                "index","start_codon","end_codon","prev_intron", "next_intron"]
    end

    def self.fix_true_false(request)
        request = request.gsub("warning_n_in_sequence = 0","warning_n_in_sequence = false")
        request = request.gsub("warning_n_in_sequence = 1","warning_n_in_sequence = true")
        request = request.gsub("warning_n_in_sequence != 0","warning_n_in_sequence != false")
        request = request.gsub("warning_n_in_sequence != 1","warning_n_in_sequence != true")
        request = request.gsub("\"","")
        return request        
    end

    def self.additional_exon_params
        return "(exons.id_genes = genes.id) AND (exons.error_in_isoform = false) AND (exons.from_main_isoform = true)"
    end

    def self.inner_join_exons
        return "INNER JOIN exons ON exons.id_genes = genes.id"
    end

    def self.fields_for_select
        pairs = detailed_fields.zip(human_fields_names)
        return pairs.map { |pair| "#{pair[0]} as #{pair[1]}" }.join(",")
    end
end