$(document).on("turbolinks:load", function() {
	
  $('#gene-filter').queryBuilder({
    default_filter: 'gene_name',
    filters: [{
      id: 'gene_name',
      label: 'Gene name',
      type: 'string',
      operators: ['equal', 'not_equal'],
      input: function(rule, name) {
        return '<input class="form-control gene_name" name ="'+name+'" placeholder="Search" autocomplete="off" type="search"> </input>';
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
          return '<input class="form-control gene_ncbi_id" name ='+name+' placeholder="Search" autocomplete="off" type="search"> </input>';
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
      },
      // },{
      //   id: 'isoform_count',
      //   label: '#Isoforms' ,
      //   type: 'integer',
      //   operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
      // },
      {
        id: 'max_introns_count',
        label: 'Max #introns' ,
        type: 'integer',
        operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
			}]
  });
  $('#gene-filter').on('afterUpdateRuleFilter.queryBuilder', function(e, level){
    
    $('input.gene_name').typeahead({
      ajax:{
        url: "/gene_names",
        triggerLength: 1,
        method: "get",
      }
    }); 

    $('input.gene_ncbi_id').typeahead({
      ajax:{
        url: "/gene_ncbis",
        triggerLength: 1,
        method: "get",
      }
    });
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

  $('#gene-btn-apply').on('click', function(){
    var rules = JSON.stringify($('#gene-filter').queryBuilder('getSQL')["sql"], null, 2);
    $.ajax({
      contentType: "application/json",
      url: '/apply_gene_query',
      data: {request: rules, org_ids: JSON.stringify(selected_organisms_ids, null, 2), org_names: JSON.stringify(selected_organisms_names, null, 2) },
      triggerLength: 1,
    }).done(function(data) {
      $("#gene_table").tabulator("setData", data);
    });;
  });

  $('input.gene_name').typeahead({
    ajax:{
      url: "/gene_names",
      triggerLength: 1,
      method: "get",
    }
  }); 

  $('#gene-load-table-button').on('click', function (e) {
    $("#gene_table").tabulator("download", "csv", "gene_table(small).csv");
  });

  // $.typeahead({
  //   input: 'input.gene_name',
  //   minLength: 1,
  //   dynamic: true,
  //   source:{
  //     ajax: function(query){
  //       return {
  //         type: "GET",
  //         contentType: "application/json",
  //         triggerLength: 1,
  //         url: '/gene_names',
  //         data: {query: "{{query}}"},
  //         path: "data",
  //       }
  //     },
  //     template: '<span >{{name}}</span>'
  //   },
  // });

  // $.typeahead({
  //   input: '.gene_name',
  //   minLength: 1,
  //   maxItem: 20,
  //   source:{
  //     ajax:{
  //       type: "get",
  //       url: "/gene_names",
  //       data:{query: "d" }
  //     }
  //   }
  // });
  // $('input.gene_name').typeahead({
  //     source: function(query, process) {
  //         return $.ajax({
  //             url: '/gene_names',
  //             type: 'get',
  //             data: {query: query},
  //             contentType: "application/json",
  //             dataType: 'json',
  //             triggerLength: 1,
  //             success: function(json) {
  //                 return typeof json.options == 'undefined' ? false : process(json.options);
  //             }
  //         });
  //     }
  // });

  // $('input.gene_name').typeahead({
  //   minLength: 1,
  //   source{
  //     ajax: {
  //       type: "GET",
  //       contentType: "application/json",
  //       url: '/gene_names',
  //       triggerLength: 1,
  //     },     
  //   },
  // });
});


// FIX BUG WITH SAME NAME FILE

// gene-btn-apply
// gene-btn-set
// gene-btn-get
// gene-btn-reset
// gene-clear-filter

    // ajax: {
    //   contentType: "application/json",
    //   url: '/gene_names',
    //   data: {'org_ids': 10},
    //   triggerLength: 1,
    // },