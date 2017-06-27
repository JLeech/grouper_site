$(document).on("turbolinks:load", function() {
	
  $('#exon-filter').queryBuilder({
    default_filter: 'exons.lengthh',
    display_empty_filter: false,
    filters: [{
      id: 'exons.lengthh',
      label: 'Exon length',
      type: 'integer',
      operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal'],
      },{
        id: 'exons.start_phase',
        label: 'Exon start phase',
        type: 'integer',
        values: {0: '0', 1: '1', 2: '2',},
        operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal'],
        validation: {
          min: 0,
          max: 2,
          step: 1
        }
      },{
        id: 'exons.end_phase',
        label: 'Exon end phase',
        type: 'integer',
        values: {0: '0', 1: '1', 2: '2',},
        operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal'],
        validation: {
          min: 0,
          max: 2,
          step: 1
        }
      },{
        id: 'exons.length_phase',
        label: 'Exon length phase',
        type: 'integer',
        values: {0: '0', 1: '1', 2: '2',},
        operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal'],
        validation: {
          min: 0,
          max: 2,
          step: 1
        }
      },{
        id: 'exons.start_codon',
        label: 'Exon start codon',
        type: 'string',
        operators: ['equal', 'not_equal'],
        validation: {format: /^([A-Z]{3})$/}
      },{
        id: 'exons.end_codon',
        label: 'Exon end codon',
        type: 'string',
        operators: ['equal', 'not_equal'],
        validation: {format: /^([A-Z]{3})$/}     
      },{
        id: 'exons.warning_n_in_sequence',
        label: 'Exon sequence has N',
        type: 'integer',
        input: 'radio',
        values: {
          1: 'Yes',
          0: 'No'
        },
        operators: ['equal'],
      }]
  });

  $('#exon-btn-reset').on('click', function() {
    $('#exon-filter').queryBuilder('reset');
  });

  var exon_get_modal = document.getElementById('exon-query-get-modal');
  var exon_set_modal = document.getElementById('exon-query-set-modal');

  $('#exon-btn-set').on('click', function() {
    $('#btn-exon-query-set-from-file').value = null
    exon_set_modal.style.display = "block";
  });

  $('#btn-exon-query-set').on('click', function() {
    var rules = $("#exon-query-set-text").val();
    if(rules.length > 2){
      exon_set_modal.style.display = "none";
      $('#exon-filter').queryBuilder('setRules', JSON.parse(rules));
    }
  });

  $('#btn-exon-query-set-from-file').on('change', function(e) {
    var f = e.target.files[0];
    if (f){
      var reader = new FileReader();
      reader.onload = function(fi){
        var rules = fi.target.result;
        exon_set_modal.style.display = "none";
        $('#exon-filter').queryBuilder('setRules', JSON.parse(rules));
      };
      reader.readAsText(f);
    };
  });

  $('#exon-btn-get').on('click', function() {
    var rules = $('#exon-filter').queryBuilder('getRules');
    if (!$.isEmptyObject(rules)) {
      $("#exon-query-get-text").val(JSON.stringify(rules, null, 2));
      exon_get_modal.style.display = "block";
    }
  });

  $('#btn-exon-query-get-as-file').on('click', function() {
    var rules = $('#exon-filter').queryBuilder('getRules');
    if (!$.isEmptyObject(rules)) {
      var blob = new Blob([JSON.stringify(rules, null, 2)], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "exon_query.req");
    }
  });

  $('#exon-btn-apply').on('click', function(){
    var gene_rules = JSON.stringify($('#gene-filter').queryBuilder('getSQL')["sql"], null, 2);
    var rules = JSON.stringify($('#exon-filter').queryBuilder('getSQL')["sql"], null, 2);
    $.ajax({
      contentType: "application/json",
      url: '/apply_exon_query',
      data: {request: rules, gene_request: gene_rules, org_ids: JSON.stringify(selected_organisms_ids, null, 2), org_names: JSON.stringify(selected_organisms_names, null, 2) },
      async: true,
      beforeSend: function() {
        $("div#load-block").show();
      },
      error: function (err) {
        $("div#load-block").hide();
    }
    }).done(function(data) {
      $("#exon_table").tabulator("setData", data);
      $("div#load-block").hide();
    });;
  });

  $('#exon-load-table-button').on('click', function (e) {
    $("#gene_table").tabulator("download", "csv", "gene_table(small).csv");
  });

  $('#exon-load-full-table-button').on('click', function (e){
    var gene_rules = JSON.stringify($('#gene-filter').queryBuilder('getSQL')["sql"], null, 2);
    var rules = JSON.stringify($('#exon-filter').queryBuilder('getSQL')["sql"], null, 2);
    $.ajax({
      contentType: "application/json",
      url: '/make_exon_report',
      data: {request: rules, gene_request: gene_rules, org_ids: JSON.stringify(selected_organisms_ids, null, 2)},
      async: true,
      beforeSend: function() {
        $("div#load-block").show();
      },
      error: function (err) {
        $("div#load-block").hide();
    }
    }).done(function(answer) {
      $("h2#report_id").html(answer["report_id"]);
      $("h2#report_state").html(answer["report_state"]);
      $("h2#report_created_at").html(answer["report_created_at"]);
      $("h2#report_load_link").html(answer["report_load_link"]);
      $('input#report_search').val(answer["just_id"]);
      $("div#load-block").hide();
      $("a#reports_tab").click();
      if(answer["load_link"] != undefined){
        $("a#download_report_btn").removeClass("disabled");
        $("a#download_report_btn").attr('href',answer["load_link"])
      }
    });;
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