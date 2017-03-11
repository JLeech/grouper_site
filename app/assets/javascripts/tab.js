var tabledata = [
  {id: 1, name: "Apis mellifera", common_name: "honey bee", version: "Release 103", date: "2016-05-24", gene_count: "1557", iso_count: "1648", exon_count: "8847", intron_count: "7016", intron_with_error: "188", phase_0_count: "3008", phase_1_count: "2112", phase_2_count: "1896", phase_0_persent: "43.0", phase_1_persent: "30.0", phase_2_persent: "27.0"},
  {id: 2,name: "Anolis carolinensis",common_name: "green anole",version: "Release 102",date: "2016-05-31",gene_count: "11533",iso_count: "15893",exon_count: "152814",intron_count: "134744",intron_with_error: "2413",phase_0_count: "59776",phase_1_count: "43718",phase_2_count: "31250",phase_0_persent: "44.0",phase_1_persent: "32.0",phase_2_persent: "23.0"},
  {id: 3,name: "Homo sapiens",common_name: "human",version: "Release 107",date: "2015-03-12",gene_count: "56210",iso_count: "102470",exon_count: "1175313",intron_count: "1065791",intron_with_error: "11010",phase_0_count: "491478",phase_1_count: "345437",phase_2_count: "228876",phase_0_persent: "46.0",phase_1_persent: "32.0",phase_2_persent: "21.0"},
  {id: 4,name: "Mus musculus",common_name: "house mouse",version: "Release 105",date: "2015-02-09",gene_count: "47344",iso_count: "75363",exon_count: "865587",intron_count: "783769",intron_with_error: "8624",phase_0_count: "364054",phase_1_count: "250038",phase_2_count: "169677",phase_0_persent: "46.0",phase_1_persent: "32.0",phase_2_persent: "22.0"}
];

$(document).on("turbolinks:load", function() {
  $("#example-table").tabulator({
    fitColumns:true, //fit columns to width of table (optional)
    columns:[ //Define Table Columns
        { title: "Name", field: "name", sorter: "string", align: "left"},
        { title: "CommonName", field: "common_name", sorter: "string", align: "center"},
        { title: "AnnoVer", field: "version", sorter: "string", align: "center"},
        { title: "AnnoDate", field: "date", sorter: "date", align: "center"},
        { title: "Genes", field: "gene_count", sorter: "number", align: "right"},
        { title: "Isoforms", field: "iso_count", sorter: "number", align: "right"},
        { title: "Exons", field: "exon_count", sorter: "number", align: "right"},
        { title: "Introns", field: "intron_count", sorter: "number", align: "right"},
        { title: "ErrInIntron", field: "intron_with_error", sorter: "number", align: "right"},
        { title: "phase0", field: "phase_0_count", sorter: "number", align: "right"},
        { title: "phase1", field: "phase_1_count", sorter: "number", align: "right"},
        { title: "phase2", field: "phase_2_count", sorter: "number", align: "right"},
        { title: "phase0%", field: "phase_0_persent", sorter: "number", align: "right"},
        { title: "phase1%", field: "phase_1_persent", sorter: "number", align: "right"},
        { title: "phase2%", field: "phase_2_persent", sorter: "number", align: "right"},
    ],
    data: tabledata,
    movableRows: true,
    movableCols: true
  });
  $('#orgfields').multiselect({
    buttonWidth: '200px',
    maxHeight: 200,
    includeSelectAllOption: true,
    allSelected: true,
    allSelectedText: 'Show all fields',
    onChange: function(option, checked, select) {
        if (checked){
          $("#example-table").tabulator("showCol",$(option).val());  
        }else{
          $("#example-table").tabulator("hideCol",$(option).val());  
        }
    }
  });

});

