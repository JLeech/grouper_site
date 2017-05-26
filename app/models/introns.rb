class Introns < ApplicationRecord

    def self.get_gene_match(request,id_org_part)
        introns = Introns.connection.execute("SELECT genes.id_organisms,count(genes.id_organisms) FROM genes,introns WHERE ((#{request}) AND (#{id_org_part}) AND (introns.id_genes = genes.id) AND (introns.error_in_isoform = false) AND (introns.from_main_isoform = true)) GROUP BY genes.id_organisms").to_a
        return introns
    end

    def self.detailed_fields
        return ["organisms.name","genes.name","genes.id_orthologous_groups","genes.ncbi_gene_id",
            "introns.id_intron_types","introns.start_dinucleotide","introns.end_dinucleotide","introns.startt",
            "introns.endd","introns.lengthh","introns.indexx","introns.length_phase",
            "introns.phase","introns.warning_start_dinucleotide",
            "introns.warning_end_dinucleotide","introns.prev_exon","introns.next_exon",]
    end

    def self.human_fields_names
        return ["organism_name","gene_name","gene_orthologous_groups","gene_ncbi_gene",
            "intron_type","start_dinucleotide","end_dinucleotide","start",
            "end","length","indexx","length_phase",
            "phase","warning_start_dinucleotide",
            "warning_end_dinucleotide","prev_exon_id","next_exon_id"]
    end
end