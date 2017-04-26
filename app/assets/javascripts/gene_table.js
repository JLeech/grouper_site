$(document).on("turbolinks:load", function() {
  
  $("#gene_table").tabulator({
    fitColumns:true,
    columns:[ //Define Table Colum
        {title: "Organism", field: "org_name",sorter: "string", align: "left"},
        {title: "Genes total", field: "genes_total" ,sorter: "number", align: "left"},
        {title: "Genes #selected", field: "selected_genes" ,sorter: "number", align: "left"},
        {title: "Genes %selected", field: "percent_selected_genes",sorter: "number", align: "left"},
        {title: "Isoforms total", field: "isoforms",sorter: "number", align: "left"},
        {title: "Isoforms #selected", field: "selected_isoforms", sorter: "number", align: "left"},
        {title: "Isoforms %selected", field: "precent_selected_isoforms", sorter: "number", align: "left"},
        {title: "#Exons", field: "total_exons", sorter: "number", align: "left"},
        {title: "#Introns", field: "total_exons", sorter: "number", align: "left"},
    ],
    // movableRows: true,
    // movableCols: true,
    height:"700px",
    selectable:true,
  });

});