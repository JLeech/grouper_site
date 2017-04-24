$(document).on("turbolinks:load", function() {
  
  $("#gene_table").tabulator({
    fitColumns:true,
    columns:[ //Define Table Colum
        { title: "Name", field: "name", sorter: "string", align: "left"},
        { title: "Tax", field: "tax", sorter: "string", align: "left"},
        { title: "Common name", field: "common_name", sorter: "string", align: "left"},
        { title: "Annotation version", field: "version", sorter: "number", align: "center"},
        { title: "Annotation date", field: "date", sorter: "string", align: "center"},
        { title: "#Genes", field: "gene_count", sorter: "number", align: "right"},
        { title: "#Isoforms", field: "iso_count", sorter: "number", align: "right"},
        { title: "#Exons", field: "exon_count", sorter: "number", align: "right"},
        { title: "#Introns", field: "intron_count", sorter: "number", align: "right"},
        { title: "#Broken introns", field: "intron_with_error", sorter: "number", align: "right"},
        { title: "#Phase 0", field: "phase_0_count", sorter: "number", align: "right"},
        { title: "#Phase 1", field: "phase_1_count", sorter: "number", align: "right"},
        { title: "#Phase 2", field: "phase_2_count", sorter: "number", align: "right"},
        { title: "%Phase 0", field: "phase_0_persent", sorter: "number", align: "right"},
        { title: "%Phase 1", field: "phase_1_persent", sorter: "number", align: "right"},
        { title: "%Phase 2", field: "phase_2_persent", sorter: "number", align: "right"},
    ],
    data: new_data,
    // movableRows: true,
    // movableCols: true,
    height:"700px",
    selectable:true,
  });
});