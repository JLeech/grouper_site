class Introns < ApplicationRecord

    def self.get_gene_match(request,id_org_part)
        introns = Introns.connection.execute("SELECT genes.id_organisms,count(genes.id_organisms) FROM genes,introns WHERE ( #{request} (#{id_org_part}) AND (introns.id_genes = genes.id) AND (introns.error_in_isoform = false) AND (introns.from_main_isoform = true)) GROUP BY genes.id_organisms").to_a
        return introns
    end

    def self.count_detailed_statistics(params)
        gene_request = Genes.make_request_str(params["gene_request"])
        intron_request = Exons.make_request_str(params["request"])
        id_org_part = Genes.org_part(JSON.parse(params["org_ids"]))
        request = "SELECT #{fields_for_select} FROM genes #{Genes.inner_join_for_org_name} #{inner_join_introns} WHERE ( #{id_org_part} ) AND #{gene_request} ( #{Genes.additional_gene_params} AND #{intron_request} #{additional_intron_params} )"
        return Exons.connection.execute(request)
    end

    def self.make_request_str(params_request)
        request_str = ""
        if !params_request.gsub("\"","").empty?
            request = fix_true_false(params_request)
            request_str = "(" +request+") AND "
        end
        return request_str
    end

    def self.fix_true_false(request)
        request = request.gsub("warning_n_in_sequence = 0","warning_n_in_sequence = false")
        request = request.gsub("warning_n_in_sequence = 1","warning_n_in_sequence = true")
        request = request.gsub("warning_n_in_sequence != 0","warning_n_in_sequence != false")
        request = request.gsub("warning_n_in_sequence != 1","warning_n_in_sequence != true")
        request = request.gsub("\"","")
        return request        
    end

    def self.additional_intron_params
        return "(introns.id_genes = genes.id) AND (introns.error_in_isoform = false) AND (introns.from_main_isoform = true)"
    end

    def self.inner_join_introns
        return "INNER JOIN introns ON introns.id_genes = genes.id"
    end

    def self.fields_for_select
        pairs = detailed_fields.zip(human_fields_names)
        return pairs.map { |pair| "#{pair[0]} as #{pair[1]}" }.join(",")
    end

    def self.detailed_fields
        return ["organisms.name","genes.name","genes.id_orthologous_groups","genes.ncbi_gene_id",
            "introns.id_isoforms",
            "introns.id_intron_types","introns.start_dinucleotide","introns.end_dinucleotide","introns.startt",
            "introns.endd","introns.lengthh","introns.indexx","introns.length_phase",
            "introns.phase","introns.warning_start_dinucleotide",
            "introns.warning_end_dinucleotide","introns.prev_exon","introns.next_exon",]
    end

    def self.human_fields_names
        return ["organism_name","gene_name","gene_orthologous_groups","gene_ncbi_gene",
            "isoform_id",
            "intron_type","start_dinucleotide","end_dinucleotide","start",
            "end","length","indexx","length_phase",
            "phase","warning_start_dinucleotide",
            "warning_end_dinucleotide","prev_exon_id","next_exon_id"]
    end
end