
var str = ""

$(document).on("turbolinks:load", function() {

  $('#builder').queryBuilder({
    
  filters: [{id: 'name',
  label: 'Name',
  type: 'string',
  input: 'select',
  values:{
    "Anolis carolinensis": "Anolis carolinensis",
    "Apis mellifera": "Apis mellifera",
    "Arachis duranensis": "Arachis duranensis",
    "Arachis ipaensis": "Arachis ipaensis",
    "Beta vulgaris subsp. vulgaris": "Beta vulgaris subsp. vulgaris",
    "Bombus terrestris": "Bombus terrestris",
    "Bos indicus": "Bos indicus",
    "Bos taurus": "Bos taurus",
    "Brachypodium distachyon": "Brachypodium distachyon",
    "Brassica napus": "Brassica napus",
    "Brassica oleracea": "Brassica oleracea",
    "Brassica rapa": "Brassica rapa",
    "Callithrix jacchus": "Callithrix jacchus",
    "Camelina sativa": "Camelina sativa",
    "Canis lupus familiaris": "Canis lupus familiaris",
    "Capra hircus": "Capra hircus",
    "Capsicum annuum": "Capsicum annuum",
    "Chlorocebus sabaeus": "Chlorocebus sabaeus",
    "Chrysemys picta": "Chrysemys picta",
    "Cicer arietinum": "Cicer arietinum",
    "Ciona intestinalis": "Ciona intestinalis",
    "Citrus sinensis": "Citrus sinensis",
    "Coturnix japonica": "Coturnix japonica",
    "Cucumis sativus": "Cucumis sativus",
    "Cynoglossus semilaevis": "Cynoglossus semilaevis",
    "Cyprinus carpio": "Cyprinus carpio",
    "Danio rerio": "Danio rerio",
    "Daucus carota subsp. sativus": "Daucus carota subsp. sativus",
    "Drosophila busckii": "Drosophila busckii",
    "Drosophila miranda": "Drosophila miranda",
    "Elaeis guineensis": "Elaeis guineensis",
    "Equus caballus": "Equus caballus",
    "Esox lucius": "Esox lucius",
    "Felis catus": "Felis catus",
    "Ficedula albicollis": "Ficedula albicollis",
    "Fragaria vesca": "Fragaria vesca",
    "Gallus gallus": "Gallus gallus",
    "Glycine max": "Glycine max",
    "Gorilla gorilla": "Gorilla gorilla",
    "Gossypium arboreum": "Gossypium arboreum",
    "Gossypium hirsutum": "Gossypium hirsutum",
    "Gossypium raimondii": "Gossypium raimondii",
    "Homo sapiens": "Homo sapiens",
    "Ictalurus punctatus": "Ictalurus punctatus",
    "Lepisosteus oculatus": "Lepisosteus oculatus",
    "Lupinus angustifolius": "Lupinus angustifolius",
    "Macaca fascicularis": "Macaca fascicularis",
    "Macaca mulatta": "Macaca mulatta",
    "Malus domestica": "Malus domestica",
    "Meleagris gallopavo": "Meleagris gallopavo",
    "Microtus ochrogaster": "Microtus ochrogaster",
    "Monodelphis domestica": "Monodelphis domestica",
    "Mus musculus": "Mus musculus",
    "Musa acuminata": "Musa acuminata",
    "Nasonia vitripennis": "Nasonia vitripennis",
    "Nicotiana attenuata": "Nicotiana attenuata",
    "Nomascus leucogenys": "Nomascus leucogenys",
    "Nothobranchius furzeri": "Nothobranchius furzeri",
    "Oreochromis niloticus": "Oreochromis niloticus",
    "Ornithorhynchus anatinus": "Ornithorhynchus anatinus",
    "Oryctolagus cuniculus": "Oryctolagus cuniculus",
    "Oryza brachyantha": "Oryza brachyantha",
    "Oryza sativa Japonica Group": "Oryza sativa Japonica Group",
    "Oryzias latipes": "Oryzias latipes",
    "Ovis aries": "Ovis aries",
    "Pan paniscus": "Pan paniscus",
    "Pan troglodytes": "Pan troglodytes",
    "Papio anubis": "Papio anubis",
    "Parus major": "Parus major",
    "Poecilia reticulata": "Poecilia reticulata",
    "Pongo abelii": "Pongo abelii",
    "Prunus mume": "Prunus mume",
    "Rattus norvegicus": "Rattus norvegicus",
    "Salmo salar": "Salmo salar",
    "Sesamum indicum": "Sesamum indicum",
    "Setaria italica": "Setaria italica",
    "Solanum lycopersicum": "Solanum lycopersicum",
    "Solanum pennellii": "Solanum pennellii",
    "Sus scrofa": "Sus scrofa",
    "Taeniopygia guttata": "Taeniopygia guttata",
    "Takifugu rubripes": "Takifugu rubripes",
    "Theobroma cacao": "Theobroma cacao",
    "Tribolium castaneum": "Tribolium castaneum",
    "Vigna angularis": "Vigna angularis",
    "Vigna radiata": "Vigna radiata",
    "Vitis vinifera": "Vitis vinifera",
     "Xenopus laevis":  "Xenopus laevis",
     "Xenopus tropicalis":  "Xenopus tropicalis",
     "Zea mays":  "Zea mays",
     "Ziziphus jujuba":  "Ziziphus jujuba"
  },
  operators: ['equal', 'not_equal']
  },
  {id: 'common_name',
  label: 'Common name',
  type: 'string',
  input: 'select',
  values:{
    "green anole": "green anole",
    "honey bee": "honey bee",
    "Arachis duranensis": "Arachis duranensis",
    "Arachis ipaensis": "Arachis ipaensis",
    "beet": "beet",
    "buff-tailed bumblebee": "buff-tailed bumblebee",
    "zebu cattle": "zebu cattle",
    "cattle": "cattle",
    "stiff brome": "stiff brome",
    "rape": "rape",
    "wild cabbage": "wild cabbage",
    "field mustard": "field mustard",
    "white-tufted-ear marmoset": "white-tufted-ear marmoset",
    "false flax": "false flax",
    "dog": "dog",
    "goat": "goat",
    "pepper": "pepper",
    "green monkey": "green monkey",
    "painted turtle": "painted turtle",
    "chickpea": "chickpea",
    "vase tunicate": "vase tunicate",
    "sweet orange": "sweet orange",
    "Japanese quail": "Japanese quail",
    "cucumber": "cucumber",
    "tongue sole": "tongue sole",
    "common carp": "common carp",
    "zebrafish": "zebrafish",
    "carrot": "carrot",
    "flies": "flies",
    "flies": "flies",
    "African oil palm": "African oil palm",
    "horse": "horse",
    "northern pike": "northern pike",
    "domestic cat": "domestic cat",
    "collared flycatcher": "collared flycatcher",
    "wild strawberry": "wild strawberry",
    "chicken": "chicken",
    "soybean": "soybean",
    "western gorilla": "western gorilla",
    "tree cotton": "tree cotton",
    "upland cotton": "upland cotton",
    "eudicots": "eudicots",
    "human": "human",
    "channel catfish": "channel catfish",
    "spotted gar": "spotted gar",
    "narrow-leaved blue lupine": "narrow-leaved blue lupine",
    "crab-eating macaque": "crab-eating macaque",
    "Rhesus monkey": "Rhesus monkey",
    "apple": "apple",
    "turkey": "turkey",
    "prairie vole": "prairie vole",
    "gray short-tailed opossum": "gray short-tailed opossum",
    "house mouse": "house mouse",
    "dwarf banana": "dwarf banana",
    "jewel wasp": "jewel wasp",
    "coyote tobacco": "coyote tobacco",
    "northern white-cheeked gibbon": "northern white-cheeked gibbon",
    "turquoise killifish": "turquoise killifish",
    "Nile tilapia": "Nile tilapia",
    "platypus": "platypus",
    "rabbit": "rabbit",
    "malo sina": "malo sina",
    "Japanese rice": "Japanese rice",
    "Japanese medaka": "Japanese medaka",
    "sheep": "sheep",
    "pygmy chimpanzee": "pygmy chimpanzee",
    "chimpanzee": "chimpanzee",
    "olive baboon": "olive baboon",
    "Great Tit": "Great Tit",
    "guppy": "guppy",
    "Sumatran orangutan": "Sumatran orangutan",
    "Japanese apricot": "Japanese apricot",
    "Norway rat": "Norway rat",
    "Atlantic salmon": "Atlantic salmon",
    "sesame (wild*)": "sesame (wild*)",
    "foxtail millet": "foxtail millet",
    "tomato": "tomato",
    "wild tomato": "wild tomato",
    "pig": "pig",
    "zebra finch": "zebra finch",
    "torafugu": "torafugu",
    "cacao": "cacao",
    "red flour beetle": "red flour beetle",
    "adzuki bean": "adzuki bean",
    "mung bean": "mung bean",
    "wine grape": "wine grape",
     "African clawed frog":  "African clawed frog",
     "tropical clawed frog":  "tropical clawed frog",
     "maize":  "maize",
     "fruit bearing tree": "fruit bearing tree"
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

  function replacer(str, p1,p2,p3,offset, s) { return "el."+p2 + " "+p3+" "}

  $('#btn-apply').on('click', function() {
    var rules = JSON.stringify($('#builder').queryBuilder('getSQL')["sql"], null, 2);
    fixed_rules = rules.replace(new RegExp("AND",'g'),"&&").replace(new RegExp("OR",'g'),"||").replace(/((\w*)\s(=|<|>))/g,replacer);
    str = "tabledata.filter(function (el) { return " + fixed_rules + "});".replace(new RegExp("\"",'g'),"");
    str = str.replace(new RegExp("\"",'g'),"").replace(new RegExp(" = ",'g')," == ");
    new_data =  eval(str);
    $("#example-table").tabulator("setData", new_data);
    // console.log(fixed_rules);
    // $.ajax({
    //   url: '/sql_rules',
    //   dataType: "script",
    //   data: {'rules': JSON.stringify(rules, null, 2) },
    // }).done(function(resp) {
    //   eval(resp.replace(/&#39;/g,''));
    //   console.log(resp.replace(/&#39;/g,'\''));
    // });
  });

  $('#btn-set').on('click', function() {
    var query_data = prompt("Enter query: ", "");
    $('#builder').queryBuilder('setRules', JSON.parse(query_data));
  }); 

  $('#btn-get').on('click', function() {
    var rules = $('#builder').queryBuilder('getRules');
    if (!$.isEmptyObject(rules)) {
      alert(JSON.stringify(rules, null, 2));
    }
    // $.ajax({
    //   contentType: "application/json",
    //   url: '/sql_rules',
    //   data: {'status': JSON.stringify(rules, null, 2) },
    //   triggerLength: 1,
    // }).done(function(data) {
    //    console.log(data)
    // });;

  });

});
