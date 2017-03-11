var tabledata = [
{id: 1, name: "Danio rerio", common_name: "zebrafish", version: "Release 105", date: "2016-06-24", gene_count: "42298", iso_count: "46539", exon_count: "541123" , intron_count: "488908" , intron_with_error: "6535" , phase_0_count: "220869" , phase_1_count: "163135" , phase_2_count: "104904" , phase_0_persent: "45.0" , phase_1_persent: "33.0" , phase_2_persent: "21.0" },
{id: 2, name: "Chlorocebus sabaeus", common_name: "green monkey", version: "Release 100", date: "2014-05-14", gene_count: "34868", iso_count: "61347", exon_count: "751550" , intron_count: "683993" , intron_with_error: "8147" , phase_0_count: "311918" , phase_1_count: "224699" , phase_2_count: "147376" , phase_0_persent: "46.0" , phase_1_persent: "33.0" , phase_2_persent: "22.0" },
{id: 3, name: "Arachis duranensis", common_name: "Arachis duranensis", version: "Release 100", date: "2016-03-29", gene_count: "39981", iso_count: "42562", exon_count: "220725" , intron_count: "173193" , intron_with_error: "5131" , phase_0_count: "95742" , phase_1_count: "39105" , phase_2_count: "38346" , phase_0_persent: "55.0" , phase_1_persent: "23.0" , phase_2_persent: "22.0" },
{id: 4, name: "Brassica oleracea", common_name: "wild cabbage", version: "Release 100", date: "2015-08-25", gene_count: "54054", iso_count: "56610", exon_count: "303698" , intron_count: "241949" , intron_with_error: "5248" , phase_0_count: "135302" , phase_1_count: "53196" , phase_2_count: "53451" , phase_0_persent: "56.0" , phase_1_persent: "22.0" , phase_2_persent: "22.0" },
{id: 5, name: "Felis catus", common_name: "domestic cat", version: "Release 103", date: "2016-12-31", gene_count: "34505", iso_count: "52389", exon_count: "617490" , intron_count: "558884" , intron_with_error: "7528" , phase_0_count: "260243" , phase_1_count: "175465" , phase_2_count: "123176" , phase_0_persent: "47.0" , phase_1_persent: "31.0" , phase_2_persent: "22.0" },
{id: 6, name: "Bos taurus", common_name: "cattle", version: "Release 105", date: "2016-01-26", gene_count: "269", iso_count: "194", exon_count: "995" , intron_count: "789" , intron_with_error: "16" , phase_0_count: "206" , phase_1_count: "400" , phase_2_count: "183" , phase_0_persent: "26.0" , phase_1_persent: "51.0" , phase_2_persent: "23.0" },
{id: 7, name: "Brachypodium distachyon", common_name: "stiff brome", version: "Release 102", date: "2015-12-08", gene_count: "29057", iso_count: "33863", exon_count: "196007" , intron_count: "158873" , intron_with_error: "3408" , phase_0_count: "89602" , phase_1_count: "34822" , phase_2_count: "34449" , phase_0_persent: "56.0" , phase_1_persent: "22.0" , phase_2_persent: "22.0" },
{id: 8, name: "Drosophila busckii", common_name: "flies", version: "Release 100", date: "2016-08-29", gene_count: "14368", iso_count: "20692", exon_count: "110070" , intron_count: "88191" , intron_with_error: "1451" , phase_0_count: "37840" , phase_1_count: "28327" , phase_2_count: "22024" , phase_0_persent: "43.0" , phase_1_persent: "32.0" , phase_2_persent: "25.0" },
{id: 9, name: "Cucumis sativus", common_name: "cucumber", version: "Release 101", date: "2015-03-23", gene_count: "20405", iso_count: "25546", exon_count: "164076" , intron_count: "135732" , intron_with_error: "2877" , phase_0_count: "77368" , phase_1_count: "28530" , phase_2_count: "29834" , phase_0_persent: "57.0" , phase_1_persent: "21.0" , phase_2_persent: "22.0" },
{id: 10, name: "Apis mellifera", common_name: "honey bee", version: "Release 103", date: "2016-05-24", gene_count: "14074", iso_count: "22443", exon_count: "181076" , intron_count: "156480" , intron_with_error: "2583" , phase_0_count: "66898" , phase_1_count: "51639" , phase_2_count: "37943" , phase_0_persent: "43.0" , phase_1_persent: "33.0" , phase_2_persent: "24.0" },
{id: 11, name: "Drosophila miranda", common_name: "flies", version: "Release 101", date: "2016-06-17", gene_count: "14865", iso_count: "22644", exon_count: "123004" , intron_count: "99225" , intron_with_error: "1444" , phase_0_count: "41063" , phase_1_count: "33372" , phase_2_count: "24790" , phase_0_persent: "41.0" , phase_1_persent: "34.0" , phase_2_persent: "25.0" },
{id: 12, name: "Bos indicus", common_name: "zebu cattle", version: "Release 100", date: "2017-01-12", gene_count: "26205", iso_count: "35979", exon_count: "381102" , intron_count: "340742" , intron_with_error: "5075" , phase_0_count: "157898" , phase_1_count: "108006" , phase_2_count: "74838" , phase_0_persent: "46.0" , phase_1_persent: "32.0" , phase_2_persent: "22.0" },
{id: 13, name: "Elaeis guineensis", common_name: "African oil palm", version: "Release 101", date: "2017-01-11", gene_count: "30685", iso_count: "41801", exon_count: "262760" , intron_count: "216140" , intron_with_error: "5166" , phase_0_count: "121508" , phase_1_count: "47296" , phase_2_count: "47336" , phase_0_persent: "56.0" , phase_1_persent: "22.0" , phase_2_persent: "22.0" },
{id: 14, name: "Bombus terrestris", common_name: "buff-tailed bumblebee", version: "Release 101", date: "2015-04-17", gene_count: "11231", iso_count: "20322", exon_count: "159872" , intron_count: "138263" , intron_with_error: "1504" , phase_0_count: "60657" , phase_1_count: "44039" , phase_2_count: "33567" , phase_0_persent: "44.0" , phase_1_persent: "32.0" , phase_2_persent: "24.0" },
{id: 15, name: "Callithrix jacchus", common_name: "white-tufted-ear marmoset", version: "Release 104", date: "2016-08-31", gene_count: "35358", iso_count: "44542", exon_count: "477202" , intron_count: "426266" , intron_with_error: "7652" , phase_0_count: "194209" , phase_1_count: "135559" , phase_2_count: "96498" , phase_0_persent: "46.0" , phase_1_persent: "32.0" , phase_2_persent: "23.0" },
{id: 16, name: "Equus caballus", common_name: "horse", version: "Release 102", date: "2015-11-20", gene_count: "27163", iso_count: "36054", exon_count: "378693" , intron_count: "338185" , intron_with_error: "5031" , phase_0_count: "153486" , phase_1_count: "108729" , phase_2_count: "75970" , phase_0_persent: "45.0" , phase_1_persent: "32.0" , phase_2_persent: "22.0" },
{id: 17, name: "Coturnix japonica", common_name: "Japanese quail", version: "Release 100", date: "2016-03-09", gene_count: "20352", iso_count: "38865", exon_count: "506904" , intron_count: "463748" , intron_with_error: "5325" , phase_0_count: "214064" , phase_1_count: "146314" , phase_2_count: "103370" , phase_0_persent: "46.0" , phase_1_persent: "32.0" , phase_2_persent: "22.0" },
{id: 18, name: "Canis lupus familiaris", common_name: "dog", version: "Release 104", date: "2015-09-17", gene_count: "30286", iso_count: "47076", exon_count: "548394" , intron_count: "495923" , intron_with_error: "6418" , phase_0_count: "228876" , phase_1_count: "157674" , phase_2_count: "109373" , phase_0_persent: "46.0" , phase_1_persent: "32.0" , phase_2_persent: "22.0" },
{id: 19, name: "Brassica rapa", common_name: "field mustard", version: "Release 101", date: "2016-10-13", gene_count: "49113", iso_count: "52553", exon_count: "288476" , intron_count: "230868" , intron_with_error: "5125" , phase_0_count: "129490" , phase_1_count: "50262" , phase_2_count: "51116" , phase_0_persent: "56.0" , phase_1_persent: "22.0" , phase_2_persent: "22.0" },
{id: 20, name: "Camelina sativa", common_name: "false flax", version: "Release 101", date: "2016-11-29", gene_count: "98741", iso_count: "107481", exon_count: "599323" , intron_count: "477070" , intron_with_error: "14949" , phase_0_count: "268356" , phase_1_count: "104961" , phase_2_count: "103753" , phase_0_persent: "56.0" , phase_1_persent: "22.0" , phase_2_persent: "22.0" },
{id: 21, name: "Brassica napus", common_name: "rape", version: "Release 100", date: "2015-08-31", gene_count: "112275", iso_count: "112718", exon_count: "594572" , intron_count: "468938" , intron_with_error: "13091" , phase_0_count: "263177" , phase_1_count: "103259" , phase_2_count: "102502" , phase_0_persent: "56.0" , phase_1_persent: "22.0" , phase_2_persent: "22.0" },
{id: 22, name: "Cyprinus carpio", common_name: "common carp", version: "Release 100", date: "2016-11-10", gene_count: "69065", iso_count: "63915", exon_count: "496542" , intron_count: "415889" , intron_with_error: "17156" , phase_0_count: "177526" , phase_1_count: "143995" , phase_2_count: "94368" , phase_0_persent: "43.0" , phase_1_persent: "35.0" , phase_2_persent: "23.0" },
{id: 23, name: "Capra hircus", common_name: "goat", version: "Release 102", date: "2016-09-08", gene_count: "27949", iso_count: "41662", exon_count: "483589" , intron_count: "438305" , intron_with_error: "4606" , phase_0_count: "202548" , phase_1_count: "141013" , phase_2_count: "94744" , phase_0_persent: "46.0" , phase_1_persent: "32.0" , phase_2_persent: "22.0" },
{id: 24, name: "Anolis carolinensis", common_name: "green anole", version: "Release 102", date: "2016-05-31", gene_count: "21985", iso_count: "34354", exon_count: "374473" , intron_count: "335533" , intron_with_error: "5277" , phase_0_count: "151771" , phase_1_count: "108361" , phase_2_count: "75401" , phase_0_persent: "45.0" , phase_1_persent: "32.0" , phase_2_persent: "22.0" },
{id: 25, name: "Cicer arietinum", common_name: "chickpea", version: "Release 101", date: "2015-06-08", gene_count: "27889", iso_count: "33032", exon_count: "200803" , intron_count: "163179" , intron_with_error: "4690" , phase_0_count: "92797" , phase_1_count: "35391" , phase_2_count: "34991" , phase_0_persent: "57.0" , phase_1_persent: "22.0" , phase_2_persent: "21.0" },
{id: 26, name: "Daucus carota subsp. sativus", common_name: "carrot", version: "Release 100", date: "2016-06-27", gene_count: "36244", iso_count: "44480", exon_count: "258631" , intron_count: "209446" , intron_with_error: "4841" , phase_0_count: "116539" , phase_1_count: "47214" , phase_2_count: "45693" , phase_0_persent: "56.0" , phase_1_persent: "23.0" , phase_2_persent: "22.0" },
{id: 27, name: "Cynoglossus semilaevis", common_name: "tongue sole", version: "Release 101", date: "2016-06-07", gene_count: "24475", iso_count: "36979", exon_count: "448891" , intron_count: "405827" , intron_with_error: "6509" , phase_0_count: "189448" , phase_1_count: "128228" , phase_2_count: "88151" , phase_0_persent: "47.0" , phase_1_persent: "32.0" , phase_2_persent: "22.0" },
{id: 28, name: "Beta vulgaris subsp. vulgaris", common_name: "beet", version: "Release 101", date: "2016-11-30", gene_count: "23857", iso_count: "27729", exon_count: "154729" , intron_count: "125027" , intron_with_error: "2084" , phase_0_count: "69902" , phase_1_count: "28190" , phase_2_count: "26935" , phase_0_persent: "56.0" , phase_1_persent: "23.0" , phase_2_persent: "22.0" },
{id: 29, name: "Ciona intestinalis", common_name: "vase tunicate", version: "Release 103", date: "2016-10-21", gene_count: "15301", iso_count: "18948", exon_count: "199615" , intron_count: "178715" , intron_with_error: "2106" , phase_0_count: "77859" , phase_1_count: "58614" , phase_2_count: "42242" , phase_0_persent: "44.0" , phase_1_persent: "33.0" , phase_2_persent: "24.0" },
{id: 30, name: "Arachis ipaensis", common_name: "Arachis ipaensis", version: "Release 100", date: "2016-04-22", gene_count: "44220", iso_count: "46410", exon_count: "233267" , intron_count: "180891" , intron_with_error: "6100" , phase_0_count: "99417" , phase_1_count: "41664" , phase_2_count: "39810" , phase_0_persent: "55.0" , phase_1_persent: "23.0" , phase_2_persent: "22.0" },
{id: 31, name: "Citrus sinensis", common_name: "sweet orange", version: "Release 101", date: "2016-02-02", gene_count: "28561", iso_count: "35561", exon_count: "211347" , intron_count: "171439" , intron_with_error: "4523" , phase_0_count: "96797" , phase_1_count: "37656" , phase_2_count: "36986" , phase_0_persent: "56.0" , phase_1_persent: "22.0" , phase_2_persent: "22.0" },
{id: 32, name: "Capsicum annuum", common_name: "pepper", version: "Release 100", date: "2016-05-06", gene_count: "41729", iso_count: "45131", exon_count: "248698" , intron_count: "199327" , intron_with_error: "4546" , phase_0_count: "110050" , phase_1_count: "45239" , phase_2_count: "44038" , phase_0_persent: "55.0" , phase_1_persent: "23.0" , phase_2_persent: "22.0" },
{id: 33, name: "Chrysemys picta", common_name: "painted turtle", version: "Release 101", date: "2014-06-04", gene_count: "24740", iso_count: "42545", exon_count: "508992" , intron_count: "460846" , intron_with_error: "6465" , phase_0_count: "206065" , phase_1_count: "156084" , phase_2_count: "98697" , phase_0_persent: "45.0" , phase_1_persent: "34.0" , phase_2_persent: "21.0" }
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
    movableCols: true,
    fitColumns: true
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
        $("#example-table").tabulator("redraw");
    }
  });

});

