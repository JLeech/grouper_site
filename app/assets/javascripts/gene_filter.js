$(document).on("turbolinks:load", function() {
	
  $('#gene-filter').queryBuilder({
    default_filter: 'gene_name',
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

  $('#gene-btn-reset').on('click', function() {
    $('#gene-filter').queryBuilder('reset');
  });

  var gene_get_modal = document.getElementById('gene-query-get-modal');
  var gene_set_modal = document.getElementById('gene-query-set-modal');


  $('#gene-btn-set').on('click', function() {
    $('#btn-gene-query-set-from-file').value = null
    gene_set_modal.style.display = "block";
  });

  $('#btn-gene-query-set').on('click', function() {
    var rules = $("#gene-query-set-text").val();
    if(rules.length > 2){
      gene_set_modal.style.display = "none";
      $('#gene-filter').queryBuilder('setRules', JSON.parse(rules));
    }
  });

  $('#btn-gene-query-set-from-file').on('change', function(e) {
    var f = e.target.files[0];
    if (f){
      var reader = new FileReader();
      reader.onload = function(fi){
        var rules = fi.target.result;
        gene_set_modal.style.display = "none";
        $('#gene-filter').queryBuilder('setRules', JSON.parse(rules));
      };
      reader.readAsText(f);
    };
  });

  $('#gene-btn-get').on('click', function() {
    var rules = $('#gene-filter').queryBuilder('getRules');
    if (!$.isEmptyObject(rules)) {
      $("#gene-query-get-text").val(JSON.stringify(rules, null, 2));
      gene_get_modal.style.display = "block";
    }
  });

  $('#btn-gene-query-get-as-file').on('click', function() {
    var rules = $('#gene-filter').queryBuilder('getRules');
    if (!$.isEmptyObject(rules)) {
      var blob = new Blob([JSON.stringify(rules, null, 2)], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "gene_query.req");
    }
  });

});

// FIX BUG WITH SAME NAME FILE

// gene-btn-apply
// gene-btn-set
// gene-btn-get
// gene-btn-reset
// gene-clear-filter