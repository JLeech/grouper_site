function all_valid_for_intron() {
    var no_gene_rules = $('#gene-filter li').length == 0
    var gene_valid = $('#gene-filter').queryBuilder('validate')
    var no_intron_rules = $('#intron-filter li').length == 0
    var intron_valid = $('#intron-filter').queryBuilder('validate')
    return (( gene_valid || no_gene_rules ) & ( exon_valid || no_exon_rules ))
}

$(document).on("turbolinks:load", function() {
	
  $('#intron-filter').queryBuilder({
    default_filter: 'introns.lengthh',
    display_empty_filter: false,
    filters: [{
      id: 'introns.lengthh',
      label: 'Length',
      type: 'integer',
      operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal'],
      },{
        id: 'introns.phase',
        label: 'Phase',
        type: 'integer',
        values: {0: '0', 1: '1', 2: '2',},
        operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal'],
        validation: {
          min: 0,
          max: 2,
          step: 1
        }
      },{
        id: 'introns.length_phase',
        label: 'Length phase',
        type: 'integer',
        values: {0: '0', 1: '1', 2: '2',},
        operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal'],
        validation: {
          min: 0,
          max: 2,
          step: 1
        }
      },{
        id: 'introns.start_dinucleotide',
        label: 'Start dinucleotide',
        type: 'string',
        operators: ['equal', 'not_equal'],
        validation: {format: /^([A-Z]{2})$/,
          messages: {format: 'Format is two capital letters'}
        }
      },{
        id: 'introns.end_dinucleotide',
        label: 'End dinucleotide',
        type: 'string',
        operators: ['equal', 'not_equal'],
        validation: {format: /^([A-Z]{2})$/,
          messages: {format: 'Format is two capital letters'}
      }
      },{
        id: 'introns.warning_n_in_sequence',
        label: 'Intron sequence has N',
        type: 'integer',
        input: 'radio',
        values: {
          1: 'Yes',
          0: 'No'
        },
        operators: ['equal'],
      }]
  });

  $('#intron-btn-reset').on('click', function() {
    $('#intron-filter').queryBuilder('reset');
  });

  var intron_get_modal = document.getElementById('intron-query-get-modal');
  var intron_set_modal = document.getElementById('intron-query-set-modal');

  $('#intron-btn-set').on('click', function() {
    $('#btn-intron-query-set-from-file').value = null
    intron_set_modal.style.display = "block";
  });

  $('#btn-intron-query-set').on('click', function() {
    var rules = $("#intron-query-set-text").val();
    if(rules.length > 2){
      intron_set_modal.style.display = "none";
      $('#intron-filter').queryBuilder('setRules', JSON.parse(rules));
    }
  });

  $('#btn-intron-query-set-from-file').on('change', function(e) {
    var f = e.target.files[0];
    if (f){
      var reader = new FileReader();
      reader.onload = function(fi){
        var rules = fi.target.result;
        intron_set_modal.style.display = "none";
        $('#intron-filter').queryBuilder('setRules', JSON.parse(rules));
      };
      reader.readAsText(f);
    };
  });

  $('#intron-btn-get').on('click', function() {
    var rules = $('#intron-filter').queryBuilder('getRules');
    if (!$.isEmptyObject(rules)) {
      $("#intron-query-get-text").val(JSON.stringify(rules, null, 2));
      intron_get_modal.style.display = "block";
    }
  });

  $('#btn-intron-query-get-as-file').on('click', function() {
    var rules = $('#intron-filter').queryBuilder('getRules');
    if (!$.isEmptyObject(rules)) {
      var blob = new Blob([JSON.stringify(rules, null, 2)], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "intron_query.req");
    }
  });

  $('#intron-btn-apply').on('click', function(){
    var gene_rules = JSON.stringify($('#gene-filter').queryBuilder('getSQL')["sql"], null, 2);
    var rules = JSON.stringify($('#intron-filter').queryBuilder('getSQL')["sql"], null, 2);
    if(all_valid_for_intron()){
      $.ajax({
        contentType: "application/json",
        url: '/apply_intron_query',
        data: {request: rules, gene_request: gene_rules, org_ids: JSON.stringify(selected_organisms_ids, null, 2), org_names: JSON.stringify(selected_organisms_names, null, 2) },
        triggerLength: 1,
        async: true,
        beforeSend: function() {
          $("div#load-block").show();
        },
        error: function (err) {
          $("div#load-block").hide();
      }
      }).done(function(answer) {
        $("#intron_table").tabulator("setData", answer);
        $("div#load-block").hide();
      });
    }
  });

  $('#intron-load-table-button').on('click', function (e) {
    $("#gene_table").tabulator("download", "csv", "gene_table(small).csv");
  });

  $('#intron-load-full-table-button').on('click', function (e){
    var gene_rules = JSON.stringify($('#gene-filter').queryBuilder('getSQL')["sql"], null, 2);
    var rules = JSON.stringify($('#intron-filter').queryBuilder('getSQL')["sql"], null, 2);
    if(all_valid_for_intron()){
      $.ajax({
        contentType: "application/json",
        url: '/make_intron_report',
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
      });
    }
  });

});
