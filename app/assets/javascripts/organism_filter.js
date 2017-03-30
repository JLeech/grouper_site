
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
    "Green anole" : "Green anole",
    "Honey bee" : "Honey bee",
    "Arachis duranensis" : "Arachis duranensis",
    "Arachis ipaensis" : "Arachis ipaensis",
    "Beet" : "Beet",
    "Buff-tailed bumblebee" : "Buff-tailed bumblebee",
    "Zebu cattle" : "Zebu cattle",
    "Cattle" : "Cattle",
    "Stiff brome" : "Stiff brome",
    "Rape" : "Rape",
    "Wild cabbage" : "Wild cabbage",
    "Field mustard" : "Field mustard",
    "White-tufted-ear marmoset" : "White-tufted-ear marmoset",
    "False flax" : "False flax",
    "Dog" : "Dog",
    "Goat" : "Goat",
    "Pepper" : "Pepper",
    "Green monkey" : "Green monkey",
    "Painted turtle" : "Painted turtle",
    "Chickpea" : "Chickpea",
    "Vase tunicate" : "Vase tunicate",
    "Sweet orange" : "Sweet orange",
    "Japanese quail" : "Japanese quail",
    "Cucumber" : "Cucumber",
    "Tongue sole" : "Tongue sole",
    "Common carp" : "Common carp",
    "Zebrafish" : "Zebrafish",
    "Carrot" : "Carrot",
    "Flies" : "Flies",
    "Flies" : "Flies",
    "African oil palm" : "African oil palm",
    "Horse" : "Horse",
    "Northern pike" : "Northern pike",
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
    "Spotted gar" : "Spotted gar",
    "Narrow-leaved blue lupine" : "Narrow-leaved blue lupine",
    "Crab-eating macaque" : "Crab-eating macaque",
    "Rhesus monkey" : "Rhesus monkey",
    "Apple" : "Apple",
    "Turkey" : "Turkey",
    "Prairie vole" : "Prairie vole",
    "Gray short-tailed opossum" : "Gray short-tailed opossum",
    "House mouse" : "House mouse",
    "Dwarf banana" : "Dwarf banana",
    "Jewel wasp" : "Jewel wasp",
    "Coyote tobacco" : "Coyote tobacco",
    "Northern white-cheeked gibbon" : "Northern white-cheeked gibbon",
    "Turquoise killifish" : "Turquoise killifish",
    "Nile tilapia" : "Nile tilapia",
    "Platypus" : "Platypus",
    "Rabbit" : "Rabbit",
    "Malo sina" : "Malo sina",
    "Japanese rice" : "Japanese rice",
    "Japanese medaka" : "Japanese medaka",
    "Sheep" : "Sheep",
    "Pygmy chimpanzee" : "Pygmy chimpanzee",
    "Chimpanzee" : "Chimpanzee",
    "Olive baboon" : "Olive baboon",
    "Great Tit" : "Great Tit",
    "Guppy" : "Guppy",
    "Sumatran orangutan" : "Sumatran orangutan",
    "Japanese apricot" : "Japanese apricot",
    "Norway rat" : "Norway rat",
    "Atlantic salmon" : "Atlantic salmon",
    "Sesame (wild*)" : "Sesame (wild*)",
    "Foxtail millet" : "Foxtail millet",
    "Tomato" : "Tomato",
    "Wild tomato" : "Wild tomato",
    "Pig" : "Pig",
    "Zebra finch" : "Zebra finch",
    "Torafugu" : "Torafugu",
    "Cacao" : "Cacao",
    "Red flour beetle" : "Red flour beetle",
    "Adzuki bean" : "Adzuki bean",
    "Mung bean" : "Mung bean",
    "Wine grape" : "Wine grape",
    "African clawed frog" : "African clawed frog",
    "Tropical clawed frog" : "Tropical clawed frog",
    "Maize" : "Maize",
    "Fruit bearing tree" : "Fruit bearing tree"
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
    if(rules.length != 2){
      fixed_rules = rules.replace(new RegExp("AND",'g'),"&&").replace(new RegExp("OR",'g'),"||").replace(/((\w*)\s(=|<|>))/g,replacer);
      str = "tabledata.filter(function (el) { return " + fixed_rules + "});".replace(new RegExp("\"",'g'),"");
      str = str.replace(new RegExp("\"",'g'),"").replace(new RegExp(" = ",'g')," == ");
      new_data =  eval(str);
      $("#example-table").tabulator("setData", new_data);      
    }else{
      $("#example-table").tabulator("setData", tabledata); 
    }

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
      confirm(JSON.stringify(rules, null, 2));
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
