
var str = ""

$(document).on("turbolinks:load", function() {
    $('#builder').queryBuilder({
    default_filter: 'name',
    display_empty_filter: false,
    filters: [{id: 'name',
    label: 'Name',
    type: 'string',
    input: 'select',
    values:{
      "Ailuropoda melanoleuca" : "Ailuropoda melanoleuca",
      "Ananas comosus" : "Ananas comosus",
      "Anolis carolinensis" : "Anolis carolinensis", 
      "Apis florea" : "Apis florea", 
      "Apis mellifera" : "Apis mellifera", 
      "Arachis duranensis" : "Arachis duranensis", 
      "Arachis ipaensis" : "Arachis ipaensis", 
      "Asparagus officinalis" : "Asparagus officinalis", 
      "Beta vulgaris subsp. vulgaris" : "Beta vulgaris subsp. vulgaris", 
      "Bombus terrestris" : "Bombus terrestris", 
      "Bos indicus" : "Bos indicus", 
      "Bos taurus" : "Bos taurus", 
      "Brachypodium distachyon" : "Brachypodium distachyon", 
      "Brassica napus" : "Brassica napus", 
      "Brassica oleracea" : "Brassica oleracea", 
      "Brassica rapa" : "Brassica rapa", 
      "Cajanus cajan" : "Cajanus cajan", 
      "Callithrix jacchus" : "Callithrix jacchus", 
      "Camelina sativa" : "Camelina sativa", 
      "Camelus bactrianus" : "Camelus bactrianus",
      "Canis lupus familiaris" : "Canis lupus familiaris", 
      "Capra hircus" : "Capra hircus", 
      "Capsicum annuum" : "Capsicum annuum", 
      "Cariama cristata" : "Cariama cristata",
      "Chaetura pelagica" : "Chaetura pelagica", 
      "Chlorocebus sabaeus" : "Chlorocebus sabaeus", 
      "Chrysemys picta" : "Chrysemys picta", 
      "Cicer arietinum" : "Cicer arietinum", 
      "Ciona intestinalis" : "Ciona intestinalis", 
      "Citrus sinensis" : "Citrus sinensis", 
      "Colius striatus" : "Colius striatus", 
      "Columba livia" : "Columba livia", 
      "Corvus cornix" : "Corvus cornix", 
      "Coturnix japonica" : "Coturnix japonica", 
      "Cucumis sativus" : "Cucumis sativus", 
      "Cynoglossus semilaevis" : "Cynoglossus semilaevis", 
      "Cyprinus carpio" : "Cyprinus carpio", 
      "Danio rerio" : "Danio rerio", 
      "Daucus carota subsp. sativus" : "Daucus carota subsp. sativus", 
      "Drosophila busckii" : "Drosophila busckii", 
      "Drosophila eugracilis" : "Drosophila eugracilis",
      "Drosophila melanogaster" : "Drosophila melanogaster", 
      "Drosophila miranda" : "Drosophila miranda", 
      "Egretta garzetta" : "Egretta garzetta", 
      "Elaeis guineensis" : "Elaeis guineensis", 
      "Equus caballus" : "Equus caballus", 
      "Equus przewalskii" : "Equus przewalskii", 
      "Esox lucius" : "Esox lucius", 
      "Falco cherrug" : "Falco cherrug", 
      "Falco peregrinus" : "Falco peregrinus", 
      "Felis catus" : "Felis catus", 
      "Ficedula albicollis" : "Ficedula albicollis", 
      "Fragaria vesca" : "Fragaria vesca", 
      "Gallus gallus" : "Gallus gallus", 
      "Glycine max" : "Glycine max", 
      "Gorilla gorilla" : "Gorilla gorilla", 
      "Gossypium arboreum" : "Gossypium arboreum", 
      "Gossypium hirsutum" : "Gossypium hirsutum", 
      "Gossypium raimondii" : "Gossypium raimondii", 
      "Homo sapiens" : "Homo sapiens", 
      "Ictalurus punctatus" : "Ictalurus punctatus", 
      "Latimeria chalumnae" : "Latimeria chalumnae", 
      "Lepisosteus oculatus" : "Lepisosteus oculatus", 
      "Lupinus angustifolius" : "Lupinus angustifolius", 
      "Macaca fascicularis" : "Macaca fascicularis", 
      "Macaca mulatta" : "Macaca mulatta", 
      "Malus domestica" : "Malus domestica", 
      "Maylandia zebra" : "Maylandia zebra", 
      "Meleagris gallopavo" : "Meleagris gallopavo", 
      "Melopsittacus undulatus" : "Melopsittacus undulatus", 
      "Microcebus murinus" : "Microcebus murinus", 
      "Microtus ochrogaster" : "Microtus ochrogaster", 
      "Monodelphis domestica" : "Monodelphis domestica", 
      "Mus musculus" : "Mus musculus", 
      "Musa acuminata" : "Musa acuminata", 
      "Nasonia vitripennis" : "Nasonia vitripennis", 
      "Nicotiana attenuata" : "Nicotiana attenuata", 
      "Nomascus leucogenys" : "Nomascus leucogenys", 
      "Nothobranchius furzeri" : "Nothobranchius furzeri", 
      "Oncorhynchus kisutch" : "Oncorhynchus kisutch", 
      "Oreochromis niloticus" : "Oreochromis niloticus", 
      "Ornithorhynchus anatinus" : "Ornithorhynchus anatinus", 
      "Oryctolagus cuniculus" : "Oryctolagus cuniculus", 
      "Oryza brachyantha" : "Oryza brachyantha", 
      "Oryza sativa Japonica Group" : "Oryza sativa Japonica Group", 
      "Oryzias latipes" : "Oryzias latipes", 
      "Otolemur garnettii" : "Otolemur garnettii", 
      "Ovis aries" : "Ovis aries", 
      "Pan paniscus" : "Pan paniscus", 
      "Pan troglodytes" : "Pan troglodytes", 
      "Papio anubis" : "Papio anubis", 
      "Parasteatoda tepidariorum" : "Parasteatoda tepidariorum", 
      "Parus major" : "Parus major", 
      "Pelodiscus sinensis" : "Pelodiscus sinensis", 
      "Picoides pubescens" : "Picoides pubescens", 
      "Poecilia reticulata" : "Poecilia reticulata", 
      "Pongo abelii" : "Pongo abelii", 
      "Prunus mume" : "Prunus mume", 
      "Prunus persica" : "Prunus persica", 
      "Rattus norvegicus" : "Rattus norvegicus", 
      "Salmo salar" : "Salmo salar", 
      "Sesamum indicum" : "Sesamum indicum", 
      "Setaria italica" : "Setaria italica", 
      "Solanum lycopersicum" : "Solanum lycopersicum", 
      "Solanum pennellii" : "Solanum pennellii", 
      "Solanum tuberosum" : "Solanum tuberosum", 
      "Sus scrofa" : "Sus scrofa", 
      "Taeniopygia guttata" : "Taeniopygia guttata", 
      "Takifugu rubripes" : "Takifugu rubripes", 
      "Theobroma cacao" : "Theobroma cacao", 
      "Tribolium castaneum" : "Tribolium castaneum", 
      "Tupaia chinensis" : "Tupaia chinensis", 
      "Tyto alba" : "Tyto alba", 
      "Vigna angularis" : "Vigna angularis", 
      "Vigna radiata" : "Vigna radiata", 
      "Vitis vinifera" : "Vitis vinifera", 
      "Xenopus laevis" : "Xenopus laevis", 
      "Xenopus tropicalis" : "Xenopus tropicalis", 
      "Zea mays" : "Zea mays", 
      "Ziziphus jujuba" : "Ziziphus jujuba",
    },
    operators: ['equal', 'not_equal']
    },
    {id: 'common_name',
    label: 'Common name',
    type: 'string',
    input: 'select',
    values:{
      "giant panda" : "giant panda", 
      "pineapple" : "pineapple", 
      "Green anole" : "Green anole", 
      "little honeybee" : "little honeybee", 
      "Honey bee" : "Honey bee", 
      "Arachis duranensis" : "Arachis duranensis", 
      "Arachis ipaensis" : "Arachis ipaensis", 
      "garden asparagus" : "garden asparagus", 
      "Beet" : "Beet", 
      "Buff-tailed bumblebee" : "Buff-tailed bumblebee", 
      "Zebu cattle" : "Zebu cattle", 
      "Cattle" : "Cattle", 
      "Stiff brome" : "Stiff brome", 
      "Rape" : "Rape", 
      "Wild cabbage" : "Wild cabbage", 
      "Field mustard" : "Field mustard", 
      "pigeon pea" : "pigeon pea", 
      "White-tufted-ear marmoset" : "White-tufted-ear marmoset", 
      "False flax" : "False flax", 
      "Bactrian camel" :"Bactrian camel", 
      "Dog" : "Dog", 
      "Goat" : "Goat", 
      "Pepper" : "Pepper", 
      "Red-legged seriema" :"Red-legged seriema", 
      "chimney swift" : "chimney swift", 
      "Green monkey" : "Green monkey", 
      "Painted turtle" : "Painted turtle", 
      "Chickpea" : "Chickpea", 
      "Vase tunicate" : "Vase tunicate", 
      "Sweet orange" : "Sweet orange", 
      "speckled mousebird" : "speckled mousebird", 
      "rock pigeon" : "rock pigeon", 
      "hooded crow" : "hooded crow", 
      "Japanese quail" : "Japanese quail", 
      "Cucumber" : "Cucumber", 
      "Tongue sole" : "Tongue sole", 
      "Common carp" : "Common carp", 
      "Zebrafish" : "Zebrafish", 
      "Carrot" : "Carrot", 
      "Flies" : "Flies", 
      "flies" :"flies", 
      "fruit fly" : "fruit fly", 
      "Flies" : "Flies", 
      "little egret" : "little egret", 
      "African oil palm" : "African oil palm", 
      "Horse" : "Horse", 
      "Przewalski's horse" : "Przewalski's horse", 
      "Northern pike" : "Northern pike", 
      "Saker falcon" : "Saker falcon", 
      "peregrine falcon" : "peregrine falcon", 
      "Domestic cat" : "Domestic cat", 
      "Collared flycatcher" : "Collared flycatcher", 
      "Wild strawberry" : "Wild strawberry", 
      "Chicken" : "Chicken", 
      "Soybean" : "Soybean", 
      "Western gorilla" : "Western gorilla", 
      "Tree cotton" : "Tree cotton", 
      "Upland cotton" : "Upland cotton", 
      "Eudicots" : "Eudicots", 
      "Human" : "Human", 
      "Channel catfish" : "Channel catfish", 
      "coelacanth" : "coelacanth", 
      "Spotted gar" : "Spotted gar", 
      "Narrow-leaved blue lupine" : "Narrow-leaved blue lupine", 
      "Crab-eating macaque" : "Crab-eating macaque", 
      "Rhesus monkey" : "Rhesus monkey", 
      "Apple" : "Apple", 
      "zebra mbuna" : "zebra mbuna", 
      "Turkey" : "Turkey", 
      "budgerigar" : "budgerigar", 
      "gray mouse lemur" : "gray mouse lemur", 
      "Prairie vole" : "Prairie vole", 
      "Gray short-tailed opossum" : "Gray short-tailed opossum", 
      "House mouse" : "House mouse", 
      "Dwarf banana" : "Dwarf banana", 
      "Jewel wasp" : "Jewel wasp", 
      "Coyote tobacco" : "Coyote tobacco", 
      "Northern white-cheeked gibbon" : "Northern white-cheeked gibbon", 
      "Turquoise killifish" : "Turquoise killifish", 
      "coho salmon" : "coho salmon", 
      "Nile tilapia" : "Nile tilapia", 
      "Platypus" : "Platypus", 
      "Rabbit" : "Rabbit", 
      "Malo sina" : "Malo sina", 
      "Japanese rice" : "Japanese rice", 
      "Japanese medaka" : "Japanese medaka", 
      "small-eared galago" : "small-eared galago", 
      "Sheep" : "Sheep", 
      "Pygmy chimpanzee" : "Pygmy chimpanzee", 
      "Chimpanzee" : "Chimpanzee", 
      "Olive baboon" : "Olive baboon", 
      "common house spider" : "common house spider", 
      "Great Tit" : "Great Tit", 
      "Chinese soft-shelled turtle" : "Chinese soft-shelled turtle", 
      "Downy woodpecker" : "Downy woodpecker", 
      "Guppy" : "Guppy", 
      "Sumatran orangutan" : "Sumatran orangutan", 
      "Japanese apricot" : "Japanese apricot", 
      "peach" : "peach", 
      "Norway rat" : "Norway rat", 
      "Atlantic salmon" : "Atlantic salmon", 
      "Sesame (wild*)" : "Sesame (wild*)", 
      "Foxtail millet" : "Foxtail millet", 
      "Tomato" : "Tomato", 
      "Wild tomato" : "Wild tomato", 
      "potato" : "potato", 
      "Pig" : "Pig", 
      "Zebra finch" : "Zebra finch", 
      "Torafugu" : "Torafugu", 
      "Cacao" : "Cacao", 
      "Red flour beetle" : "Red flour beetle", 
      "Chinese tree shrew" : "Chinese tree shrew", 
      "Barn owl" : "Barn owl", 
      "Adzuki bean" : "Adzuki bean", 
      "Mung bean" : "Mung bean", 
      "Wine grape" : "Wine grape", 
      "African clawed frog" : "African clawed frog", 
      "Tropical clawed frog" : "Tropical clawed frog", 
      "Maize" : "Maize", 
      "Fruit bearing tree" : "Fruit bearing tree",
    },
    operators: ['equal', 'not_equal']
    },
    {id: 'tax',
    label: 'Tax',
    type: 'string',
    input: 'select',
    values:{
      "Reptiles": "Reptiles",
      "Insects": "Insects",
      "Land Plants": "Land Plants",
      "Mammals": "Mammals",
      "Other_Animals": "Other_Animals",
      "Birds": "Birds",
      "Fishes": "Fishes",
      "Amphibians": "Amphibians"
    },
    operators: ['equal', 'not_equal']
    },
    {id: 'version',
    label: 'Annotation version',
    type: 'integer',
    operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal'],
    },
    {id: 'gene_count',
    label: '#Genes',
    type: 'integer',
    operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
    },
    {id: 'iso_count',
    label: '#Isoforms',
    type: 'integer',
    operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
    },
    {id: 'exon_count',
    label: '#Exons',
    type: 'integer',
    operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
    },
    {id: 'intron_count',
    label: '#Introns',
    type: 'integer',
    operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
    },
    {id: 'intron_with_error',
    label: '#Broken introns' ,
    type: 'integer',
    operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
    },
    {id: 'phase_0_count',
    label: '#Phase 0' ,
    type: 'integer',
    operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
    },
    {id: 'phase_1_count',
    label: '#Phase 1' ,
    type: 'integer',
    operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
    },
    {id: 'phase_2_count',
    label: '#Phase 2' ,
    type: 'integer',
    operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
    },
    {id: 'phase_0_persent',
    label: '%Phase 0' ,
    type: 'double',
    validation: {
      min: 0,
      max: 100,
      step: 0.1
    },
    operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
    },
    {id: 'phase_1_persent',
    label: '%Phase 1' ,
    type: 'double',
    validation: {
      min: 0,
      max: 100,
      step: 0.1
    },
    operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
    },
    {id: 'phase_2_persent',
    label: '%Phase 2' ,
    type: 'double',
    validation: {
      min: 0,
      max: 100,
      step: 0.1
    },
    operators: ['equal', 'not_equal','less','less_or_equal','greater','greater_or_equal']
    }]
    });

  $('#btn-reset').on('click', function() {
    $('#builder').queryBuilder('reset');
  });

  function replacer(str, p1,p2,p3,offset, s) { return "el."+p2 + " "+p3+" "};

  var getmodal = document.getElementById('getModal');
  var setmodal = document.getElementById('setModal');


  $('#btn-apply').on('click', function() {
    var rules = JSON.stringify($('#builder').queryBuilder('getSQL')["sql"], null, 2);
    if(rules.length != 2){
      fixed_rules = rules.replace(new RegExp("AND",'g'),"&&").replace(new RegExp("OR",'g'),"||").replace(/((\w*)\s(=|<|>|!=))/g,replacer);
      str = "tabledata.filter(function (el) { return " + fixed_rules + "});".replace(new RegExp("\"",'g'),"");
      str = str.replace(new RegExp("\"",'g'),"").replace(new RegExp(" = ",'g')," == ");
      new_data =  eval(str);
    }else{
      new_data = tabledata;
    }
    $("#organism_table").tabulator("setData", new_data);
    selectAfterTableRefresh();
  });

  $('#btn-set').on('click', function() {
    $('#btn_set_rules_from_file').value = null
    setmodal.style.display = "block";
  });

  $('#btn_set_rules').on('click', function() {
    var rules = $("#set_rules").val();
    if(rules.length > 2){
      setmodal.style.display = "none";
      $('#builder').queryBuilder('setRules', JSON.parse(rules));
    }
  });

  $('#btn_set_rules_from_file').on('change', function(e) {
    var f = e.target.files[0];
    if (f){
      var reader = new FileReader();
      reader.onload = function(fi){
        var rules = fi.target.result;
        setmodal.style.display = "none";
        $('#builder').queryBuilder('setRules', JSON.parse(rules));
      };
      reader.readAsText(f);
    };
  });

  $('#btn-get').on('click', function() {
    var rules = $('#builder').queryBuilder('getRules');
    if (!$.isEmptyObject(rules)) {
      $("#get_rules").val(JSON.stringify(rules, null, 2));
      getmodal.style.display = "block";
    }
  });
  
  $('#btn_get_as_file').on('click', function() {
    var rules = $('#builder').queryBuilder('getRules');
    if (!$.isEmptyObject(rules)) {
      var blob = new Blob([JSON.stringify(rules, null, 2)], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "organism_query.req");
    }
  });

});


function selectAfterTableRefresh(){
  if ($("#btn-select")[0].classList.contains("btn-primary")){
    $("#btn-select").click()
  }else{
    console.log("xx")
    $("#organism_table").tabulator("selectRow");
  }
}
// var span = document.getElementsByClassName("close")[0];

  // span.onclick = function() {
  //     getmodal.style.display = "none";
  //     setmodal.style.display = "none";
  // }

    // $.ajax({
    //   contentType: "application/json",
    //   url: '/sql_rules',
    //   data: {'status': JSON.stringify(rules, null, 2) },
    //   triggerLength: 1,
    // }).done(function(data) {
    //    console.log(data)
    // });;

    // console.log(fixed_rules);
    // $.ajax({
    //   url: '/sql_rules',
    //   dataType: "script",
    //   data: {'rules': JSON.stringify(rules, null, 2) },
    // }).done(function(resp) {
    //   eval(resp.replace(/&#39;/g,''));
    //   console.log(resp.replace(/&#39;/g,'\''));
    // });


    // var query_data = prompt("Enter query: ", "");
    // $('#builder').queryBuilder('setRules', JSON.parse(query_data));