class Exons < ApplicationRecord

	def self.get_gene_match(request,id_org_part)
		exons = Exons.connection.execute("SELECT genes.id_organisms,count(genes.id_organisms) FROM genes,exons WHERE ((#{request}) AND (#{id_org_part}) AND (exons.id_genes = genes.id) AND (exons.error_in_isoform = false) AND (exons.from_main_isoform = true) ) GROUP BY genes.id_organisms").to_a
		return exons
	end
end