$(document).on("turbolinks:load", function() {

  var getmodal = document.getElementById('getModal');
  var setmodal = document.getElementById('setModal');
  var gene_get_modal = document.getElementById('gene-query-get-modal');
  var gene_set_modal = document.getElementById('gene-query-set-modal');

  window.onclick = function(event) {
    if (event.target == gene_get_modal) {
        gene_get_modal.style.display = "none";
    };
    if (event.target == gene_set_modal) {
        gene_set_modal.style.display = "none";
    };
    if (event.target == getmodal) {
        getmodal.style.display = "none";
    };
    if (event.target == setmodal) {
        setmodal.style.display = "none";
    };
  };

  $("a.nav-link").on('click',function(e){
    var tab_name = this.href.split("#")[1];
    if( tab_name == "organism_settings"){
      $("div#organism_table")[0].style.display = "block";
      var cols = $("div.tabulator-col");
      for(var i = 0; i < cols.length; i++){
        cols[i].style.height = "24.25px";
      }
      $("div#gene_table")[0].style.display = "none";
      return
    };
    if( tab_name == "gene_settings"){
      $("div#gene_table")[0].style.display = "block";
      var cols = $("div.tabulator-col");
      for(var i = 0; i < cols.length; i++){
        cols[i].style.height = "24.25px";
      }
      $("div#organism_table")[0].style.display = "none";
      return
    };

    $("div#gene_table")[0].style.display = "none";
    $("div#organism_table")[0].style.display = "none";
    
  });

});