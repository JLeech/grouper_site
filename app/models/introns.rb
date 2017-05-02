class Introns < ApplicationRecord

	def self.get_gene_match(request,id_org_part)
		introns = Introns.connection.execute("SELECT genes.id_organisms,count(genes.id_organisms) FROM genes,introns WHERE ((#{request}) AND (#{id_org_part}) AND (introns.id_genes = genes.id)) GROUP BY genes.id_organisms").to_a
		return introns
	end
end