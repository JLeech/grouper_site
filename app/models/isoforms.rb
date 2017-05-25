class Isoforms < ApplicationRecord

	def self.get_gene_match(request,id_org_part)
		isoforms = Isoforms.connection.execute("SELECT genes.id_organisms,count(genes.id_organisms) FROM genes,isoforms WHERE ((#{request}) AND (#{id_org_part}) AND (isoforms.id_genes = genes.id) AND (isoforms.maximum_by_introns = true) AND (isoforms.error_main = false) ) GROUP BY genes.id_organisms").to_a
		return isoforms
	end

	def self.get_all_org(id_org_part)
		isoforms = Isoforms.connection.execute("SELECT genes.id_organisms,count(genes.id_organisms) FROM genes,isoforms WHERE ((#{id_org_part}) AND (isoforms.id_genes = genes.id) AND (isoforms.error_main = false)) GROUP BY genes.id_organisms").to_a
	end

end