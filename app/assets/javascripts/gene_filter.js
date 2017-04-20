var rules_widgets = {
  condition: 'OR',
  rules: [{
    id: 'coord',
    operator: 'equal',
    value: 'B.3'
  }]
};

var default_gene_rules = {
  condition: 'OR',
  rules: [{
    id: 'gene_name',
    operator: 'equal',
    value: 'DSCAM'
  }]
};

$(document).on("turbolinks:load", function() { 

  function fix_filter_name(val) { 
    var data = val.split("_");
    return "filter_rule_"+data[2]+"_operator_0"
  };

  var num_introns_html_start = '<div class="rule-value-container"><input class="form-control" name="'
  var num_introns_html_mid = '" step="0.1" min="0" max="100" type="number"></input> which'
  var num_introns_html_end = '<select class="form-control" name="len_phase" ><option value="phase">Phase</option><option value="length">Length</option></select>'
  var num_introns_html_comp = '<select class="form-control" name="comp"><option value="equal">equal</option><option value="not_equal">not equal</option><option value="less">less</option><option value="less_or_equal">less or equal</option><option value="greater">greater</option><option value="greater_or_equal">greater or equal</option></select>'
  var num_introns_html_sec_val = '<input class="form-control" name="sec_val" type="number"></input></div>'
  $('#gene-filter').queryBuilder({
    filters: [{
      id: 'gene_name',
      label: 'Gene name',
      type: 'string',
      operators: ['equal', 'not_equal'],
      input: function(rule, name) {
        return '<input class="form-control gene_name" name ='+name+' type="text"> </input>';
      }},{
        id: 'ortho_group',
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
      },{
        id: 'num_introns',
        label: '#Introns',
        type: 'integer',
        operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal'],
        input: function(rule, name) {
          return num_introns_html_start+name+num_introns_html_mid+num_introns_html_end+num_introns_html_comp+num_introns_html_sec_val;
        }   
      },{
        id: 'num_exons',
        label: '#Exons',
        type: 'integer',
        operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal'],
        input: function(rule, name) {
          return num_introns_html_start+name+num_introns_html_mid+num_introns_html_end+num_introns_html_comp+num_introns_html_sec_val;
        }   
      }
      ],
    rules: default_gene_rules
  });


  $('#btn-reset').on('click', function() {
    $('#gene-filter').queryBuilder('reset');
  }); 

  $('#btn-set').on('click', function() {
    $('#gene-filter').queryBuilder('setRules', rules_widgets);
  }); 

  $('#btn-get').on('click', function() {
    var result = $('#gene-filter').queryBuilder('getRules');  

    if (!$.isEmptyObject(result)) {
      alert(JSON.stringify(result, null, 2));
    }
  });

  var options = {
    source: [
      "aaa",
      "bbb"
    ],
    minLength: 1
  };
  $(document).on('keydown.autocomplete', 'input.gene_name', function() {
    $(this).typeahead(options);
  });
  $(document).on('keydown.autocomplete', 'input.ortho_group', function() {
    $(this).typeahead(options);
  });
  $(document).on('keydown.autocomplete', 'input.gene_ncbi_id', function() {
    $(this).typeahead(options);
  });
})

