$(document).on("turbolinks:load", function() {
	
  $('#gene-filter').queryBuilder({
    filters: [{
      id: 'gene_name',
      label: 'Gene name',
      type: 'string',
      operators: ['equal', 'not_equal'],
      input: function(rule, name) {
        return '<input class="form-control gene_name" name ='+name+' type="text"> </input>';
      }},{
        id: 'id_orthologous_groups',
        label: 'Ortho group',
        type: 'string',
        operators: ['equal', 'not_equal'],
        input: function(rule, name) {
          return '<input class="form-control ortho_group" name ='+name+' type="text"> </input>';
      }},{
        id: 'gene_ncbi_id',
        label: 'Gene NCBI id',
        type: 'string',
        operators: ['equal', 'not_equal'],
        input: function(rule, name) {
          return '<input class="form-control gene_ncbi_id" name ='+name+' type="text"> </input>';
      }},{
        id: 'prot_but_not_rna',
        label: 'Protein but not RNA',
        type: 'integer',
        input: 'radio',
        values: {
          1: 'Yes',
          0: 'No'
        },
        operators: ['equal'],
      },{
        id: 'isoform_count',
        label: '#Isoforms' ,
        type: 'integer',
        operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
      },{
        id: 'max_isoform_count',
        label: 'Max #isoforms' ,
        type: 'integer',
        operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
			}]
  });
});