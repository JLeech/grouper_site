var tabledata = [
  {id: 101,name: "Ailuropoda melanoleuca",common_name: "giant panda",tax:"Mammals",version:"102",date:"2016-12-22 ",gene_count:"25384",iso_count:"36493",exon_count:"401256",intron_count:"365305",intron_with_error:"29009",phase_0_count:"168139",phase_1_count:"115337",phase_2_count:"81829",phase_0_persent:"46.0",phase_1_persent:"31.5",phase_2_persent:"22.4"},
  {id: 102,name: "Ananas comosus",common_name: "pineapple",tax:"Land Plants",version:"100",date:" 2017-02-13",gene_count:"2591",iso_count:"2396",exon_count:"10959",intron_count:"8582",intron_with_error:"636",phase_0_count:"4890",phase_1_count:"1893",phase_2_count:"1799",phase_0_persent:"56.9",phase_1_persent:"22.0",phase_2_persent:"20.9"},
  {id: 1, name: "Anolis carolinensis", common_name: "Green anole", tax:"Reptiles", version:"102", date:"2016-05-31", gene_count:"21985", iso_count:"34354", exon_count:"374473", intron_count:"335533", intron_with_error:"5277", phase_0_count:"151771", phase_1_count:"108361", phase_2_count:"75401", phase_0_persent:"45.2", phase_1_persent:"32.3", phase_2_persent:"22.5"},
  {id: 103, name: "Apis florea", common_name: "little honeybee", tax:"Insects", version:"101", date:"2015-05-03", gene_count:"12222", iso_count:"17663", exon_count:"130267", intron_count:"112832", intron_with_error:"19045", phase_0_count:"47892", phase_1_count:"36549", phase_2_count:"28391", phase_0_persent:"42.4", phase_1_persent:"32.2", phase_2_persent:"25.1"},
  {id: 2, name: "Apis mellifera", common_name: "Honey bee", tax:"Insects", version:"103", date:"2016-05-24", gene_count:"14074", iso_count:"22443", exon_count:"181076", intron_count:"156480", intron_with_error:"2583", phase_0_count:"66898", phase_1_count:"51639", phase_2_count:"37943", phase_0_persent:"42.8", phase_1_persent:"33.0", phase_2_persent:"24.2"},
  {id: 3, name: "Arachis duranensis", common_name: "Arachis duranensis", tax:"Land Plants", version:"100", date:"2016-03-29", gene_count:"39981", iso_count:"42562", exon_count:"220725", intron_count:"173193", intron_with_error:"5131", phase_0_count:"95742", phase_1_count:"39105", phase_2_count:"38346", phase_0_persent:"55.3", phase_1_persent:"22.6", phase_2_persent:"22.1"},
  {id: 4, name: "Arachis ipaensis", common_name: "Arachis ipaensis", tax:"Land Plants", version:"100", date:"2016-04-22", gene_count:"44220", iso_count:"46410", exon_count:"233267", intron_count:"180891", intron_with_error:"6100", phase_0_count:"99417", phase_1_count:"41664", phase_2_count:"39810", phase_0_persent:"55.0", phase_1_persent:"23.0", phase_2_persent:"22.0"},
  {id: 104, name: "Asparagus officinalis", common_name: "garden asparagus", tax:"Land Plants", version:"100", date:"2017-02-24", gene_count:"1562", iso_count:"1475", exon_count:"7337", intron_count:"5866", intron_with_error:"634", phase_0_count:"3022", phase_1_count:"1516", phase_2_count:"1328", phase_0_persent:"51.5", phase_1_persent:"25.8", phase_2_persent:"22.6"},
  {id: 5, name: "Beta vulgaris subsp. vulgaris", common_name: "Beet", tax:"Land Plants", version:"101", date:"2016-11-30", gene_count:"23857", iso_count:"27729", exon_count:"154729", intron_count:"125027", intron_with_error:"2084", phase_0_count:"69902", phase_1_count:"28190", phase_2_count:"26935", phase_0_persent:"55.9", phase_1_persent:"22.5", phase_2_persent:"21.5"},
  {id: 6, name: "Bombus terrestris", common_name: "Buff-tailed bumblebee", tax:"Insects", version:"101", date:"2015-04-17", gene_count:"11231", iso_count:"20322", exon_count:"159872", intron_count:"138263", intron_with_error:"1504", phase_0_count:"60657", phase_1_count:"44039", phase_2_count:"33567", phase_0_persent:"43.9", phase_1_persent:"31.9", phase_2_persent:"24.3"},
  {id: 7, name: "Bos indicus", common_name: "Zebu cattle", tax:"Mammals", version:"100", date:"2017-01-12", gene_count:"26205", iso_count:"35979", exon_count:"381102", intron_count:"340742", intron_with_error:"5075", phase_0_count:"157898", phase_1_count:"108006", phase_2_count:"74838", phase_0_persent:"46.3", phase_1_persent:"31.7", phase_2_persent:"22.0"},
  {id: 8, name: "Bos taurus", common_name: "Cattle", tax:"Mammals", version:"105", date:"2016-01-26", gene_count:"32467", iso_count:"49108", exon_count:"544578", intron_count:"489898", intron_with_error:"6876", phase_0_count:"223104", phase_1_count:"159002", phase_2_count:"107792", phase_0_persent:"45.5", phase_1_persent:"32.5", phase_2_persent:"22.0"},
  {id: 9, name: "Brachypodium distachyon", common_name: "Stiff brome", tax:"Land Plants", version:"102", date:"2015-12-08", gene_count:"29057", iso_count:"33863", exon_count:"196007", intron_count:"158873", intron_with_error:"3408", phase_0_count:"89602", phase_1_count:"34822", phase_2_count:"34449", phase_0_persent:"56.4", phase_1_persent:"21.9", phase_2_persent:"21.7"},
  {id: 10, name: "Brassica napus", common_name: "Rape", tax:"Land Plants", version:"100", date:"2015-08-31", gene_count:"112275", iso_count:"112718", exon_count:"594572", intron_count:"468938", intron_with_error:"13091", phase_0_count:"263177", phase_1_count:"103259", phase_2_count:"102502", phase_0_persent:"56.1", phase_1_persent:"22.0", phase_2_persent:"21.9"},
  {id: 11, name: "Brassica oleracea", common_name: "Wild cabbage", tax:"Land Plants", version:"100", date:"2015-08-25", gene_count:"54054", iso_count:"56610", exon_count:"303698", intron_count:"241949", intron_with_error:"5248", phase_0_count:"135302", phase_1_count:"53196", phase_2_count:"53451", phase_0_persent:"55.9", phase_1_persent:"22.0", phase_2_persent:"22.1"},
  {id: 12, name: "Brassica rapa", common_name: "Field mustard", tax:"Land Plants", version:"101", date:"2016-10-13", gene_count:"49113", iso_count:"52553", exon_count:"288476", intron_count:"230868", intron_with_error:"5125", phase_0_count:"129490", phase_1_count:"50262", phase_2_count:"51116", phase_0_persent:"56.1", phase_1_persent:"21.8", phase_2_persent:"22.1"},
  {id: 105, name: "Cajanus cajan", common_name: "pigeon pea", tax:"Land Plants", version:"100", date:"2017-02-24", gene_count:"15152", iso_count:"17673", exon_count:"97425", intron_count:"79794", intron_with_error:"3436", phase_0_count:"44543", phase_1_count:"17932", phase_2_count:"17319", phase_0_persent:"55.8", phase_1_persent:"22.4", phase_2_persent:"21.7"},
  {id: 13, name: "Callithrix jacchus", common_name: "White-tufted-ear marmoset", tax:"Mammals", version:"104", date:"2016-08-31", gene_count:"35358", iso_count:"44542", exon_count:"477202", intron_count:"426266", intron_with_error:"7652", phase_0_count:"194209", phase_1_count:"135559", phase_2_count:"96498", phase_0_persent:"45.6", phase_1_persent:"31.8", phase_2_persent:"22.6"},
  {id: 14, name: "Camelina sativa", common_name: "False flax", tax:"Land Plants", version:"101", date:"2016-11-29", gene_count:"98741", iso_count:"107481", exon_count:"599323", intron_count:"477070", intron_with_error:"14949", phase_0_count:"268356", phase_1_count:"104961", phase_2_count:"103753", phase_0_persent:"56.3", phase_1_persent:"22.0", phase_2_persent:"21.7"},
  {id: 106,name: "Camelus bactrianus",common_name: "Bactrian camel",tax:"Mammals",version:"100",date:"2015-01-02",gene_count:"24443",iso_count:"28588",exon_count:"301196",intron_count:"273025",intron_with_error:"39022",phase_0_count:"123585",phase_1_count:"86425",phase_2_count:"63015",phase_0_persent:"45.2",phase_1_persent:"31.6",phase_2_persent:"23.0"},
  {id: 15, name: "Canis lupus familiaris", common_name: "Dog", tax:"Mammals", version:"104", date:"2015-09-17", gene_count:"30286", iso_count:"47076", exon_count:"548394", intron_count:"495923", intron_with_error:"6418", phase_0_count:"228876", phase_1_count:"157674", phase_2_count:"109373", phase_0_persent:"46.2", phase_1_persent:"31.8", phase_2_persent:"22.1"},
  {id: 16, name: "Capra hircus", common_name: "Goat", tax:"Mammals", version:"102", date:"2016-09-08", gene_count:"27949", iso_count:"41662", exon_count:"483589", intron_count:"438305", intron_with_error:"4606", phase_0_count:"202548", phase_1_count:"141013", phase_2_count:"94744", phase_0_persent:"46.2", phase_1_persent:"32.2", phase_2_persent:"21.6"},
  {id: 17, name: "Capsicum annuum", common_name: "Pepper", tax:"Land Plants", version:"100", date:"2016-05-06", gene_count:"41729", iso_count:"45131", exon_count:"248698", intron_count:"199327", intron_with_error:"4546", phase_0_count:"110050", phase_1_count:"45239", phase_2_count:"44038", phase_0_persent:"55.2", phase_1_persent:"22.7", phase_2_persent:"22.1"},
  {id: 107,name: "Cariama cristata",common_name: "Red-legged seriema",tax:"Birds",version:"100",date:"2014-10-16",gene_count:"15358",iso_count:"16125",exon_count:"144874",intron_count:"128821",intron_with_error:"43563",phase_0_count:"56307",phase_1_count:"40455",phase_2_count:"32059",phase_0_persent:"43.7",phase_1_persent:"31.4",phase_2_persent:"24.8"},
  {id: 108, name: "Chaetura pelagica", common_name: "chimney swift", tax:"Birds", version:"100", date:"2014-10-29", gene_count:"14365", iso_count:"15942", exon_count:"176144", intron_count:"160310", intron_with_error:"20385", phase_0_count:"72882", phase_1_count:"50460", phase_2_count:"36968", phase_0_persent:"45.4", phase_1_persent:"31.4", phase_2_persent:"23.0"},
  {id: 18, name: "Chlorocebus sabaeus", common_name: "Green monkey", tax:"Mammals", version:"100", date:"2014-05-14", gene_count:"34868", iso_count:"61347", exon_count:"751550", intron_count:"683993", intron_with_error:"8147", phase_0_count:"311918", phase_1_count:"224699", phase_2_count:"147376", phase_0_persent:"45.6", phase_1_persent:"32.9", phase_2_persent:"21.5"},
  {id: 19, name: "Chrysemys picta", common_name: "Painted turtle", tax:"Reptiles", version:"101", date:"2014-06-04", gene_count:"24740", iso_count:"42545", exon_count:"508992", intron_count:"460846", intron_with_error:"6465", phase_0_count:"206065", phase_1_count:"156084", phase_2_count:"98697", phase_0_persent:"44.7", phase_1_persent:"33.9", phase_2_persent:"21.4"},
  {id: 20, name: "Cicer arietinum", common_name: "Chickpea", tax:"Land Plants", version:"101", date:"2015-06-08", gene_count:"27889", iso_count:"33032", exon_count:"200803", intron_count:"163179", intron_with_error:"4690", phase_0_count:"92797", phase_1_count:"35391", phase_2_count:"34991", phase_0_persent:"56.9", phase_1_persent:"21.7", phase_2_persent:"21.4"},
  {id: 21, name: "Ciona intestinalis", common_name: "Vase tunicate", tax:"Other_Animals", version:"103", date:"2016-10-21", gene_count:"15301", iso_count:"18948", exon_count:"199615", intron_count:"178715", intron_with_error:"2106", phase_0_count:"77859", phase_1_count:"58614", phase_2_count:"42242", phase_0_persent:"43.6", phase_1_persent:"32.8", phase_2_persent:"23.6"},
  {id: 22, name: "Citrus sinensis", common_name: "Sweet orange", tax:"Land Plants", version:"101", date:"2016-02-02", gene_count:"28561", iso_count:"35561", exon_count:"211347", intron_count:"171439", intron_with_error:"4523", phase_0_count:"96797", phase_1_count:"37656", phase_2_count:"36986", phase_0_persent:"56.5", phase_1_persent:"22.0", phase_2_persent:"21.6"},
  {id: 109, name: "Colius striatus", common_name: "speckled mousebird", tax:"Birds", version:"100", date:"2014-11-06", gene_count:"15256", iso_count:"15797", exon_count:"133170", intron_count:"117430", intron_with_error:"45000", phase_0_count:"51180", phase_1_count:"36762", phase_2_count:"29488", phase_0_persent:"43.5", phase_1_persent:"31.3", phase_2_persent:"25.1"},
  {id: 110, name: "Columba livia", common_name: "rock pigeon", tax:"Birds", version:"102", date:"2017-05-22", gene_count:"26679", iso_count:"32495", exon_count:"377490", intron_count:"345606", intron_with_error:"32443", phase_0_count:"157257", phase_1_count:"109741", phase_2_count:"78608", phase_0_persent:"45.5", phase_1_persent:"31.7", phase_2_persent:"22.7"},
  {id: 111, name: "Corvus cornix", common_name: "hooded crow", tax:"Birds", version:"102", date:"2017-03-14", gene_count:"17228", iso_count:"29588", exon_count:"399240", intron_count:"370330", intron_with_error:"9427", phase_0_count:"174299", phase_1_count:"114141", phase_2_count:"81890", phase_0_persent:"47.0", phase_1_persent:"30.8", phase_2_persent:"22.1"},
  {id: 23, name: "Coturnix japonica", common_name: "Japanese quail", tax:"Birds", version:"100", date:"2016-03-09", gene_count:"20352", iso_count:"38865", exon_count:"506904", intron_count:"463748", intron_with_error:"5325", phase_0_count:"214064", phase_1_count:"146314", phase_2_count:"103370", phase_0_persent:"46.2", phase_1_persent:"31.6", phase_2_persent:"22.3"},
  {id: 24, name: "Cucumis sativus", common_name: "Cucumber", tax:"Land Plants", version:"101", date:"2015-03-23", gene_count:"20405", iso_count:"25546", exon_count:"164076", intron_count:"135732", intron_with_error:"2877", phase_0_count:"77368", phase_1_count:"28530", phase_2_count:"29834", phase_0_persent:"57.0", phase_1_persent:"21.0", phase_2_persent:"22.0"},
  {id: 25, name: "Cynoglossus semilaevis", common_name: "Tongue sole", tax:"Fishes", version:"101", date:"2016-06-07", gene_count:"24475", iso_count:"36979", exon_count:"448891", intron_count:"405827", intron_with_error:"6509", phase_0_count:"189448", phase_1_count:"128228", phase_2_count:"88151", phase_0_persent:"46.7", phase_1_persent:"31.6", phase_2_persent:"21.7"},
  {id: 26, name: "Cyprinus carpio", common_name: "Common carp", tax:"Fishes", version:"100", date:"2016-11-10", gene_count:"69065", iso_count:"63915", exon_count:"496542", intron_count:"415889", intron_with_error:"17156", phase_0_count:"177526", phase_1_count:"143995", phase_2_count:"94368", phase_0_persent:"42.7", phase_1_persent:"34.6", phase_2_persent:"22.7"},
  {id: 27, name: "Danio rerio", common_name: "Zebrafish", tax:"Fishes", version:"105", date:"2016-06-24", gene_count:"42298", iso_count:"46539", exon_count:"541123", intron_count:"488908", intron_with_error:"6535", phase_0_count:"220869", phase_1_count:"163135", phase_2_count:"104904", phase_0_persent:"45.2", phase_1_persent:"33.4", phase_2_persent:"21.5"},
  {id: 28, name: "Daucus carota subsp. sativus", common_name: "Carrot", tax:"Land Plants", version:"100", date:"2016-06-27", gene_count:"36244", iso_count:"44480", exon_count:"258631", intron_count:"209446", intron_with_error:"4841", phase_0_count:"116539", phase_1_count:"47214", phase_2_count:"45693", phase_0_persent:"55.6", phase_1_persent:"22.5", phase_2_persent:"21.8"},
  {id: 29, name: "Drosophila busckii", common_name: "Flies", tax:"Insects", version:"100", date:"2016-08-29", gene_count:"14368", iso_count:"20692", exon_count:"110070", intron_count:"88191", intron_with_error:"1451", phase_0_count:"37840", phase_1_count:"28327", phase_2_count:"22024", phase_0_persent:"42.9", phase_1_persent:"32.1", phase_2_persent:"25.0"},
  {id: 100,name: "Drosophila eugracilis",common_name: "flies",tax: "Insects",version: "101",date: "2016-06-13",gene_count: "16251",iso_count: "24243",exon_count: "130708",intron_count: "106831",intron_with_error: "2518",phase_0_count: "44789",phase_1_count: "35883",phase_2_count: "26159",phase_0_persent: "41.9",phase_1_persent: "33.5",phase_2_persent: "24.4"},
  {id: 113, name: "Drosophila melanogaster", common_name: "fruit fly", tax:"Insects", version:"?", date:"2014-08-01", gene_count:"17746", iso_count:"30460", exon_count:"155996", intron_count:"126112", intron_with_error:"3668", phase_0_count:"52821", phase_1_count:"42220", phase_2_count:"31071", phase_0_persent:"41.8", phase_1_persent:"33.4", phase_2_persent:"24.6"},
  {id: 30, name: "Drosophila miranda", common_name: "Flies", tax:"Insects", version:"101", date:"2016-06-17", gene_count:"14865", iso_count:"22644", exon_count:"123004", intron_count:"99225", intron_with_error:"1444", phase_0_count:"41063", phase_1_count:"33372", phase_2_count:"24790", phase_0_persent:"41.4", phase_1_persent:"33.6", phase_2_persent:"25.0"},
  {id: 114, name: "Egretta garzetta", common_name: "little egret", tax:"Insects", version:"100", date:"2014-10-10", gene_count:"14460", iso_count:"15921", exon_count:"174945", intron_count:"159117", intron_with_error:"23896", phase_0_count:"72220", phase_1_count:"49917", phase_2_count:"36980", phase_0_persent:"45.3", phase_1_persent:"31.3", phase_2_persent:"23.2"},
  {id: 31, name: "Elaeis guineensis", common_name: "African oil palm", tax:"Land Plants", version:"101", date:"2017-01-11", gene_count:"30685", iso_count:"41801", exon_count:"262760", intron_count:"216140", intron_with_error:"5166", phase_0_count:"121508", phase_1_count:"47296", phase_2_count:"47336", phase_0_persent:"56.2", phase_1_persent:"21.9", phase_2_persent:"21.9"},
  {id: 32, name: "Equus caballus", common_name: "Horse", tax:"Mammals", version:"102", date:"2015-11-20", gene_count:"27163", iso_count:"36054", exon_count:"378693", intron_count:"338185", intron_with_error:"5031", phase_0_count:"153486", phase_1_count:"108729", phase_2_count:"75970", phase_0_persent:"45.4", phase_1_persent:"32.2", phase_2_persent:"22.5"},
  {id: 115, name: "Equus przewalskii", common_name: "Przewalski's horse", tax:"Mammals", version:"100", date:"2014-07-10", gene_count:"28543", iso_count:"38403", exon_count:"388545", intron_count:"350692", intron_with_error:"27795", phase_0_count:"159664", phase_1_count:"113564", phase_2_count:"77464", phase_0_persent:"45.5", phase_1_persent:"32.3", phase_2_persent:"22.0"},
  {id: 33, name: "Esox lucius", common_name: "Northern pike", tax:"Fishes", version:"101", date:"2015-07-14", gene_count:"26112", iso_count:"43420", exon_count:"501444", intron_count:"452552", intron_with_error:"6022", phase_0_count:"210024", phase_1_count:"143766", phase_2_count:"98762", phase_0_persent:"46.4", phase_1_persent:"31.8", phase_2_persent:"21.8"},
  {id: 116, name: "Falco cherrug", common_name: "Saker falcon", tax:"Birds", version:"101", date:"2015-09-18", gene_count:"18738", iso_count:"30267", exon_count:"372379", intron_count:"342791", intron_with_error:"20519", phase_0_count:"157631", phase_1_count:"107553", phase_2_count:"77607", phase_0_persent:"45.9", phase_1_persent:"31.3", phase_2_persent:"22.6"},
  {id: 117, name: "Falco peregrinus", common_name: "peregrine falcon", tax:"Birds", version:"101", date:"2015-07-30", gene_count:"18971", iso_count:"31127", exon_count:"385227", intron_count:"354819", intron_with_error:"22147", phase_0_count:"164621", phase_1_count:"109777", phase_2_count:"80421", phase_0_persent:"46.3", phase_1_persent:"30.9", phase_2_persent:"22.6"},
  {id: 34, name: "Felis catus", common_name: "Domestic cat", tax:"Mammals", version:"103", date:"2016-12-31", gene_count:"34505", iso_count:"52389", exon_count:"617490", intron_count:"558884", intron_with_error:"7528", phase_0_count:"260243", phase_1_count:"175465", phase_2_count:"123176", phase_0_persent:"46.6", phase_1_persent:"31.4", phase_2_persent:"22.0"},
  {id: 35, name: "Ficedula albicollis", common_name: "Collared flycatcher", tax:"Birds", version:"101", date:"2016-04-20", gene_count:"16559", iso_count:"26014", exon_count:"309625", intron_count:"276440", intron_with_error:"7486", phase_0_count:"129479", phase_1_count:"85758", phase_2_count:"61203", phase_0_persent:"46.8", phase_1_persent:"31.0", phase_2_persent:"22.1"},
  {id: 36, name: "Fragaria vesca", common_name: "Wild strawberry", tax:"Land Plants", version:"101", date:"2015-03-04", gene_count:"27843", iso_count:"31302", exon_count:"174561", intron_count:"140608", intron_with_error:"2752", phase_0_count:"78981", phase_1_count:"31098", phase_2_count:"30529", phase_0_persent:"56.2", phase_1_persent:"22.1", phase_2_persent:"21.7"},
  {id: 37, name: "Gallus gallus", common_name: "Chicken", tax:"Birds", version:"103", date:"2016-01-04", gene_count:"23769", iso_count:"43833", exon_count:"554483", intron_count:"506701", intron_with_error:"5276", phase_0_count:"235257", phase_1_count:"161721", phase_2_count:"109723", phase_0_persent:"46.4", phase_1_persent:"31.9", phase_2_persent:"21.7"},
  {id: 38, name: "Glycine max", common_name: "Soybean", tax:"Land Plants", version:"102", date:"2015-11-25", gene_count:"58882", iso_count:"71355", exon_count:"429376", intron_count:"351438", intron_with_error:"7035", phase_0_count:"200639", phase_1_count:"75183", phase_2_count:"75616", phase_0_persent:"57.1", phase_1_persent:"21.4", phase_2_persent:"21.5"},
  {id: 39, name: "Gorilla gorilla", common_name: "Western gorilla", tax:"Mammals", version:"101", date:"2016-11-04", gene_count:"32157", iso_count:"46501", exon_count:"471012", intron_count:"420261", intron_with_error:"5286", phase_0_count:"194870", phase_1_count:"133585", phase_2_count:"91806", phase_0_persent:"46.4", phase_1_persent:"31.8", phase_2_persent:"21.8"},
  {id: 40, name: "Gossypium arboreum", common_name: "Tree cotton", tax:"Land Plants", version:"100", date:"2016-08-11", gene_count:"40208", iso_count:"47485", exon_count:"281024", intron_count:"229229", intron_with_error:"4468", phase_0_count:"129990", phase_1_count:"49358", phase_2_count:"49881", phase_0_persent:"56.7", phase_1_persent:"21.5", phase_2_persent:"21.8"},
  {id: 41, name: "Gossypium hirsutum", common_name: "Upland cotton", tax:"Land Plants", version:"100", date:"2016-05-18", gene_count:"78218", iso_count:"90810", exon_count:"530613", intron_count:"429521", intron_with_error:"10879", phase_0_count:"242795", phase_1_count:"93273", phase_2_count:"93453", phase_0_persent:"56.5", phase_1_persent:"21.7", phase_2_persent:"21.8"},
  {id: 42, name: "Gossypium raimondii", common_name: "Eudicots", tax:"Land Plants", version:"100", date:"2015-05-22", gene_count:"44724", iso_count:"58974", exon_count:"361340", intron_count:"293417", intron_with_error:"9416", phase_0_count:"166656", phase_1_count:"63489", phase_2_count:"63272", phase_0_persent:"56.8", phase_1_persent:"21.6", phase_2_persent:"21.6"},
  {id: 43, name: "Homo sapiens", common_name: "Human", tax:"Mammals", version:"108", date:"2016-06-06", gene_count:"53924", iso_count:"108618", exon_count:"1283233", intron_count:"1168397", intron_with_error:"11424", phase_0_count:"543438", phase_1_count:"371050", phase_2_count:"253909", phase_0_persent:"46.5", phase_1_persent:"31.8", phase_2_persent:"21.7"},
  {id: 44, name: "Ictalurus punctatus", common_name: "Channel catfish", tax:"Fishes", version:"100", date:"2016-07-06", gene_count:"27805", iso_count:"47965", exon_count:"587134", intron_count:"532298", intron_with_error:"7823", phase_0_count:"242066", phase_1_count:"178138", phase_2_count:"112094", phase_0_persent:"45.5", phase_1_persent:"33.5", phase_2_persent:"21.1"},
  {id: 118, name: "Latimeria chalumnae", common_name: "coelacanth", tax:"Fishes", version:"101", date:"2015-10-21", gene_count:"26932", iso_count:"34238", exon_count:"342615", intron_count:"308891", intron_with_error:"27907", phase_0_count:"139592", phase_1_count:"101039", phase_2_count:"68260", phase_0_persent:"45.1", phase_1_persent:"32.7", phase_2_persent:"22.0"},
  {id: 45, name: "Lepisosteus oculatus", common_name: "Spotted gar", tax:"Fishes", version:"101", date:"2016-01-08", gene_count:"21895", iso_count:"41634", exon_count:"514630", intron_count:"465371", intron_with_error:"8629", phase_0_count:"215882", phase_1_count:"148266", phase_2_count:"101223", phase_0_persent:"46.4", phase_1_persent:"31.9", phase_2_persent:"21.8"},
  {id: 46, name: "Lupinus angustifolius", common_name: "Narrow-leaved blue lupine", tax:"Land Plants", version:"100", date:"2016-12-16", gene_count:"38688", iso_count:"52821", exon_count:"341108", intron_count:"279008", intron_with_error:"9440", phase_0_count:"160637", phase_1_count:"58173", phase_2_count:"60198", phase_0_persent:"57.6", phase_1_persent:"20.8", phase_2_persent:"21.6"},
  {id: 47, name: "Macaca fascicularis", common_name: "Crab-eating macaque", tax:"Mammals", version:"101", date:"2016-01-25", gene_count:"33052", iso_count:"62444", exon_count:"764222", intron_count:"696337", intron_with_error:"7517", phase_0_count:"324813", phase_1_count:"223075", phase_2_count:"148449", phase_0_persent:"46.6", phase_1_persent:"32.0", phase_2_persent:"21.3"},
  {id: 48, name: "Macaca mulatta", common_name: "Rhesus monkey", tax:"Mammals", version:"102", date:"2015-12-22", gene_count:"34214", iso_count:"55360", exon_count:"647674", intron_count:"588043", intron_with_error:"5912", phase_0_count:"273538", phase_1_count:"187647", phase_2_count:"126858", phase_0_persent:"46.5", phase_1_persent:"31.9", phase_2_persent:"21.6"},
  {id: 49, name: "Malus domestica", common_name: "Apple", tax:"Land Plants", version:"101", date:"2016-06-22", gene_count:"33578", iso_count:"36716", exon_count:"204571", intron_count:"164053", intron_with_error:"3913", phase_0_count:"91563", phase_1_count:"36386", phase_2_count:"36104", phase_0_persent:"55.8", phase_1_persent:"22.2", phase_2_persent:"22.0"},
  {id: 119, name: "Maylandia zebra", common_name: "zebra mbuna", tax:"Fishes", version:"104", date:"2018-04-19", gene_count:"7407", iso_count:"6596", exon_count:"66909", intron_count:"60359", intron_with_error:"4222", phase_0_count:"26815", phase_1_count:"19852", phase_2_count:"13692", phase_0_persent:"44.4", phase_1_persent:"32.8", phase_2_persent:"22.6"},
  {id: 50, name: "Meleagris gallopavo", common_name: "Turkey", tax:"Birds", version:"102", date:"2016-12-23", gene_count:"26983", iso_count:"33036", exon_count:"341925", intron_count:"304932", intron_with_error:"4444", phase_0_count:"138678", phase_1_count:"98779", phase_2_count:"67475", phase_0_persent:"45.5", phase_1_persent:"32.4", phase_2_persent:"22.1"},
  {id: 120, name: "Melopsittacus undulatus", common_name: "budgerigar", tax:"Birds", version:"102", date:"2015-07-10", gene_count:"14606", iso_count:"17066", exon_count:"185656", intron_count:"168753", intron_with_error:"20225", phase_0_count:"76820", phase_1_count:"53130", phase_2_count:"38803", phase_0_persent:"45.5", phase_1_persent:"31.4", phase_2_persent:"22.9"},
  {id: 121, name: "Microcebus murinus", common_name: "gray mouse lemur", tax:"Mammals", version:"101", date:"2017-02-15", gene_count:"539", iso_count:"559", exon_count:"4966", intron_count:"4418", intron_with_error:"483", phase_0_count:"1959", phase_1_count:"1334", phase_2_count:"1125", phase_0_persent:"44.3", phase_1_persent:"30.1", phase_2_persent:"25.4"},
  {id: 51, name: "Microtus ochrogaster", common_name: "Prairie vole", tax:"Mammals", version:"101", date:"2015-08-07", gene_count:"19542", iso_count:"24607", exon_count:"263718", intron_count:"236469", intron_with_error:"3046", phase_0_count:"109667", phase_1_count:"75033", phase_2_count:"51769", phase_0_persent:"46.4", phase_1_persent:"31.7", phase_2_persent:"21.9"},
  {id: 52, name: "Monodelphis domestica", common_name: "Gray short-tailed opossum", tax:"Mammals", version:"103", date:"2016-04-27", gene_count:"37347", iso_count:"49100", exon_count:"531154", intron_count:"476650", intron_with_error:"6580", phase_0_count:"215763", phase_1_count:"156021", phase_2_count:"104866", phase_0_persent:"45.3", phase_1_persent:"32.7", phase_2_persent:"22.0"},
  {id: 53, name: "Mus musculus", common_name: "House mouse", tax:"Mammals", version:"106", date:"2016-06-22", gene_count:"45819", iso_count:"75959", exon_count:"898251", intron_count:"816201", intron_with_error:"8612", phase_0_count:"380024", phase_1_count:"258794", phase_2_count:"177383", phase_0_persent:"46.6", phase_1_persent:"31.7", phase_2_persent:"21.7"},
  {id: 54, name: "Musa acuminata", common_name: "Dwarf banana", tax:"Land Plants", version:"101", date:"2016-10-25", gene_count:"34206", iso_count:"47707", exon_count:"285459", intron_count:"232221", intron_with_error:"5752", phase_0_count:"130833", phase_1_count:"50625", phase_2_count:"50763", phase_0_persent:"56.3", phase_1_persent:"21.8", phase_2_persent:"21.9"},
  {id: 55, name: "Nasonia vitripennis", common_name: "Jewel wasp", tax:"Insects", version:"102", date:"2016-05-26", gene_count:"10048", iso_count:"17193", exon_count:"129007", intron_count:"110264", intron_with_error:"1742", phase_0_count:"48357", phase_1_count:"35551", phase_2_count:"26356", phase_0_persent:"43.9", phase_1_persent:"32.2", phase_2_persent:"23.9"},
  {id: 56, name: "Nicotiana attenuata", common_name: "Coyote tobacco", tax:"Land Plants", version:"100", date:"2016-12-06", gene_count:"39977", iso_count:"44491", exon_count:"238041", intron_count:"190181", intron_with_error:"3509", phase_0_count:"107027", phase_1_count:"42216", phase_2_count:"40938", phase_0_persent:"56.3", phase_1_persent:"22.2", phase_2_persent:"21.5"},
  {id: 57, name: "Nomascus leucogenys", common_name: "Northern white-cheeked gibbon", tax:"Mammals", version:"102", date:"2015-05-13", gene_count:"27900", iso_count:"37893", exon_count:"329270", intron_count:"285040", intron_with_error:"7173", phase_0_count:"127328", phase_1_count:"92513", phase_2_count:"65199", phase_0_persent:"44.7", phase_1_persent:"32.5", phase_2_persent:"22.9"},
  {id: 58, name: "Nothobranchius furzeri", common_name: "Turquoise killifish", tax:"Fishes", version:"100", date:"2016-03-18", gene_count:"25387", iso_count:"36860", exon_count:"457322", intron_count:"416343", intron_with_error:"4768", phase_0_count:"194144", phase_1_count:"133024", phase_2_count:"89175", phase_0_persent:"46.6", phase_1_persent:"32.0", phase_2_persent:"21.4"},
  {id: 122, name: "Oncorhynchus kisutch", common_name: "coho salmon", tax:"Fishes", version:"100", date:"2017-03-09", gene_count:"11983", iso_count:"10141", exon_count:"69443", intron_count:"59333", intron_with_error:"17527", phase_0_count:"25625", phase_1_count:"19340", phase_2_count:"14368", phase_0_persent:"43.1", phase_1_persent:"32.5", phase_2_persent:"24.2"},
  {id: 59, name: "Oreochromis niloticus", common_name: "Nile tilapia", tax:"Fishes", version:"103", date:"2016-12-05", gene_count:"38426", iso_count:"58075", exon_count:"673528", intron_count:"609514", intron_with_error:"7138", phase_0_count:"277296", phase_1_count:"201941", phase_2_count:"130277", phase_0_persent:"45.5", phase_1_persent:"33.1", phase_2_persent:"21.4"},
  {id: 60, name: "Ornithorhynchus anatinus", common_name: "Platypus", tax:"Mammals", version:"103", date:"2016-04-16", gene_count:"24813", iso_count:"24773", exon_count:"212529", intron_count:"182684", intron_with_error:"5240", phase_0_count:"82714", phase_1_count:"57620", phase_2_count:"42350", phase_0_persent:"45.3", phase_1_persent:"31.5", phase_2_persent:"23.2"},
  {id: 61, name: "Oryctolagus cuniculus", common_name: "Rabbit", tax:"Mammals", version:"102", date:"2016-06-23", gene_count:"29480", iso_count:"38456", exon_count:"408082", intron_count:"364884", intron_with_error:"5546", phase_0_count:"164965", phase_1_count:"117484", phase_2_count:"82435", phase_0_persent:"45.2", phase_1_persent:"32.2", phase_2_persent:"22.6"},
  {id: 62, name: "Oryza brachyantha", common_name: "Malo sina", tax:"Land Plants", version:"101", date:"2016-03-04", gene_count:"24828", iso_count:"26803", exon_count:"166693", intron_count:"133643", intron_with_error:"6310", phase_0_count:"74651", phase_1_count:"29338", phase_2_count:"29654", phase_0_persent:"55.9", phase_1_persent:"22.0", phase_2_persent:"22.2"},
  {id: 63, name: "Oryza sativa Japonica Group", common_name: "Japanese rice", tax:"Land Plants", version:"101", date:"2016-03-01", gene_count:"33189", iso_count:"40907", exon_count:"230203", intron_count:"185639", intron_with_error:"3890", phase_0_count:"103071", phase_1_count:"41256", phase_2_count:"41312", phase_0_persent:"55.5", phase_1_persent:"22.2", phase_2_persent:"22.3"},
  {id: 64, name: "Oryzias latipes", common_name: "Japanese medaka", tax:"Fishes", version:"101", date:"2015-03-05", gene_count:"26741", iso_count:"34478", exon_count:"386804", intron_count:"346173", intron_with_error:"6554", phase_0_count:"159302", phase_1_count:"111731", phase_2_count:"75140", phase_0_persent:"46.0", phase_1_persent:"32.3", phase_2_persent:"21.7"},
  {id: 123, name: "Otolemur garnettii", common_name: "small-eared galago", tax:"Mammals", version:"102", date:"2018-01-09", gene_count:"31917", iso_count:"32556", exon_count:"350278", intron_count:"318178", intron_with_error:"11641", phase_0_count:"148342", phase_1_count:"99597", phase_2_count:"70239", phase_0_persent:"46.6", phase_1_persent:"31.3", phase_2_persent:"22.0"},
  {id: 65, name: "Ovis aries", common_name: "Sheep", tax:"Mammals", version:"102", date:"2015-12-17", gene_count:"29300", iso_count:"43037", exon_count:"495917", intron_count:"444761", intron_with_error:"9107", phase_0_count:"203907", phase_1_count:"141250", phase_2_count:"99604", phase_0_persent:"45.8", phase_1_persent:"31.8", phase_2_persent:"22.4"},
  {id: 66, name: "Pan paniscus", common_name: "Pygmy chimpanzee", tax:"Mammals", version:"102", date:"2015-09-30", gene_count:"30167", iso_count:"47436", exon_count:"495717", intron_count:"444057", intron_with_error:"5560", phase_0_count:"204225", phase_1_count:"140174", phase_2_count:"99658", phase_0_persent:"46.0", phase_1_persent:"31.6", phase_2_persent:"22.4"},
  {id: 67, name: "Pan troglodytes", common_name: "Chimpanzee", tax:"Mammals", version:"104", date:"2016-06-02", gene_count:"37179", iso_count:"76234", exon_count:"922369", intron_count:"840454", intron_with_error:"8665", phase_0_count:"389891", phase_1_count:"267489", phase_2_count:"183074", phase_0_persent:"46.4", phase_1_persent:"31.8", phase_2_persent:"21.8"},
  {id: 68, name: "Papio anubis", common_name: "Olive baboon", tax:"Mammals", version:"102", date:"2016-08-30", gene_count:"34319", iso_count:"51588", exon_count:"566072", intron_count:"508475", intron_with_error:"7403", phase_0_count:"233665", phase_1_count:"161263", phase_2_count:"113547", phase_0_persent:"46.0", phase_1_persent:"31.7", phase_2_persent:"22.3"},
  {id: 124, name: "Parasteatoda tepidariorum", common_name: "common house spider", tax:"Insects", version:"101", date:"2017-05-09", gene_count:"21429", iso_count:"27516", exon_count:"225537", intron_count:"198234", intron_with_error:"25736", phase_0_count:"86130", phase_1_count:"68278", phase_2_count:"43826", phase_0_persent:"43.4", phase_1_persent:"34.4", phase_2_persent:"22.1"},
  {id: 69, name: "Parus major", common_name: "Great Tit", tax:"Birds", version:"101", date:"2016-11-14", gene_count:"18757", iso_count:"39653", exon_count:"518378", intron_count:"473911", intron_with_error:"5804", phase_0_count:"218917", phase_1_count:"150668", phase_2_count:"104326", phase_0_persent:"46.2", phase_1_persent:"31.8", phase_2_persent:"22.0"},
  {id: 125, name: "Pelodiscus sinensis", common_name: "Chinese soft-shelled turtle", tax:"Reptiles", version:"102", date:"2018-05-25", gene_count:"24856", iso_count:"38574", exon_count:"417106", intron_count:"379333", intron_with_error:"24927", phase_0_count:"171434", phase_1_count:"123470", phase_2_count:"84429", phase_0_persent:"45.1", phase_1_persent:"32.5", phase_2_persent:"22.2"},
  {id: 126, name: "Picoides pubescens", common_name: "Downy woodpecker", tax:"Birds", version:"100", date:"2014-10-21", gene_count:"14476", iso_count:"15826", exon_count:"172834", intron_count:"157095", intron_with_error:"25049", phase_0_count:"71187", phase_1_count:"49236", phase_2_count:"36672", phase_0_persent:"45.3", phase_1_persent:"31.3", phase_2_persent:"23.3"},
  {id: 70, name: "Poecilia reticulata", common_name: "Guppy", tax:"Fishes", version:"101", date:"2016-06-21", gene_count:"26512", iso_count:"43702", exon_count:"561895", intron_count:"511398", intron_with_error:"7678", phase_0_count:"238160", phase_1_count:"162502", phase_2_count:"110736", phase_0_persent:"46.6", phase_1_persent:"31.8", phase_2_persent:"21.7"},
  {id: 71, name: "Pongo abelii", common_name: "Sumatran orangutan", tax:"Mammals", version:"102", date:"2014-09-23", gene_count:"30391", iso_count:"35247", exon_count:"311243", intron_count:"270103", intron_with_error:"6465", phase_0_count:"118883", phase_1_count:"88528", phase_2_count:"62692", phase_0_persent:"44.0", phase_1_persent:"32.8", phase_2_persent:"23.2"},
  {id: 72, name: "Prunus mume", common_name: "Japanese apricot", tax:"Land Plants", version:"101", date:"2016-05-11", gene_count:"26522", iso_count:"29621", exon_count:"170135", intron_count:"136957", intron_with_error:"3647", phase_0_count:"76718", phase_1_count:"30162", phase_2_count:"30077", phase_0_persent:"56.0", phase_1_persent:"22.0", phase_2_persent:"22.0"},
  {id: 127, name: "Prunus persica", common_name: "peach", tax:"Land Plants", version:"100", date:"2017-03-07", gene_count:"216", iso_count:"71", exon_count:"239", intron_count:"168", intron_with_error:"23", phase_0_count:"92", phase_1_count:"36", phase_2_count:"40", phase_0_persent:"54.7", phase_1_persent:"21.4", phase_2_persent:"23.8"},
  {id: 73, name: "Rattus norvegicus", common_name: "Norway rat", tax:"Mammals", version:"106", date:"2016-07-27", gene_count:"39180", iso_count:"55994", exon_count:"596063", intron_count:"534150", intron_with_error:"7270", phase_0_count:"245507", phase_1_count:"170195", phase_2_count:"118448", phase_0_persent:"46.0", phase_1_persent:"31.9", phase_2_persent:"22.2"},
  {id: 74, name: "Salmo salar", common_name: "Atlantic salmon", tax:"Fishes", version:"100", date:"2015-09-22", gene_count:"81586", iso_count:"97746", exon_count:"1116497", intron_count:"1007133", intron_with_error:"13553", phase_0_count:"465398", phase_1_count:"328985", phase_2_count:"212750", phase_0_persent:"46.2", phase_1_persent:"32.7", phase_2_persent:"21.1"},
  {id: 75, name: "Sesamum indicum", common_name: "Sesame (wild*)", tax:"Land Plants", version:"100", date:"2015-01-14", gene_count:"26123", iso_count:"33006", exon_count:"203412", intron_count:"166606", intron_with_error:"3885", phase_0_count:"94345", phase_1_count:"35696", phase_2_count:"36565", phase_0_persent:"56.6", phase_1_persent:"21.4", phase_2_persent:"21.9"},
  {id: 76, name: "Setaria italica", common_name: "Foxtail millet", tax:"Land Plants", version:"102", date:"2015-11-30", gene_count:"31102", iso_count:"32881", exon_count:"183292", intron_count:"147138", intron_with_error:"3321", phase_0_count:"82636", phase_1_count:"32387", phase_2_count:"32115", phase_0_persent:"56.2", phase_1_persent:"22.0", phase_2_persent:"21.8"},
  {id: 77, name: "Solanum lycopersicum", common_name: "Tomato", tax:"Land Plants", version:"102", date:"2016-11-23", gene_count:"30389", iso_count:"35923", exon_count:"219209", intron_count:"180623", intron_with_error:"2836", phase_0_count:"102626", phase_1_count:"38842", phase_2_count:"39155", phase_0_persent:"56.8", phase_1_persent:"21.5", phase_2_persent:"21.7"},
  {id: 78, name: "Solanum pennellii", common_name: "Wild tomato", tax:"Land Plants", version:"100", date:"2015-12-23", gene_count:"32519", iso_count:"35068", exon_count:"205000", intron_count:"167039", intron_with_error:"2986", phase_0_count:"94375", phase_1_count:"36557", phase_2_count:"36107", phase_0_persent:"56.5", phase_1_persent:"21.9", phase_2_persent:"21.6"},
  {id: 128, name: "Solanum tuberosum", common_name: "potato", tax:"Land Plants", version:"101", date:"2015-12-11", gene_count:"33606", iso_count:"37885", exon_count:"217840", intron_count:"180080", intron_with_error:"5175", phase_0_count:"101472", phase_1_count:"39421", phase_2_count:"39187", phase_0_persent:"56.3", phase_1_persent:"21.8", phase_2_persent:"21.7"},
  {id: 79, name: "Sus scrofa", common_name: "Pig", tax:"Mammals", version:"105", date:"2015-09-11", gene_count:"39488", iso_count:"47404", exon_count:"441082", intron_count:"386006", intron_with_error:"8594", phase_0_count:"173087", phase_1_count:"126471", phase_2_count:"86448", phase_0_persent:"44.8", phase_1_persent:"32.8", phase_2_persent:"22.4"},
  {id: 80, name: "Taeniopygia guttata", common_name: "Zebra finch", tax:"Birds", version:"103", date:"2015-05-26", gene_count:"17013", iso_count:"18613", exon_count:"193815", intron_count:"171425", intron_with_error:"3902", phase_0_count:"77492", phase_1_count:"53925", phase_2_count:"40008", phase_0_persent:"45.2", phase_1_persent:"31.5", phase_2_persent:"23.3"},
  {id: 81, name: "Takifugu rubripes", common_name: "Torafugu", tax:"Fishes", version:"101", date:"2015-03-16", gene_count:"23632", iso_count:"31040", exon_count:"348530", intron_count:"312657", intron_with_error:"5001", phase_0_count:"146010", phase_1_count:"97895", phase_2_count:"68752", phase_0_persent:"46.7", phase_1_persent:"31.3", phase_2_persent:"22.0"},
  {id: 82, name: "Theobroma cacao", common_name: "Cacao", tax:"Land Plants", version:"100", date:"2016-09-12", gene_count:"24957", iso_count:"30773", exon_count:"192155", intron_count:"158527", intron_with_error:"3018", phase_0_count:"89602", phase_1_count:"34467", phase_2_count:"34458", phase_0_persent:"56.5", phase_1_persent:"21.7", phase_2_persent:"21.7"},
  {id: 83, name: "Tribolium castaneum", common_name: "Red flour beetle", tax:"Insects", version:"103", date:"2016-03-21", gene_count:"14470", iso_count:"22582", exon_count:"148853", intron_count:"125053", intron_with_error:"1562", phase_0_count:"53159", phase_1_count:"43129", phase_2_count:"28765", phase_0_persent:"42.5", phase_1_persent:"34.5", phase_2_persent:"23.0"},
  {id: 129, name: "Tupaia chinensis", common_name: "Chinese tree shrew", tax:"Mammals", version:"101", date:"2015-10-29", gene_count:"40519", iso_count:"38492", exon_count:"396569", intron_count:"358686", intron_with_error:"49899", phase_0_count:"161949", phase_1_count:"114782", phase_2_count:"81955", phase_0_persent:"45.1", phase_1_persent:"32.0", phase_2_persent:"22.8"},
  {id: 130, name: "Tyto alba", common_name: "Barn owl", tax:"Birds", version:"100", date:"2014-10-30", gene_count:"14213", iso_count:"14896", exon_count:"134323", intron_count:"119490", intron_with_error:"45806", phase_0_count:"52065", phase_1_count:"37267", phase_2_count:"30158", phase_0_persent:"43.5", phase_1_persent:"31.1", phase_2_persent:"25.2"},
  {id: 84, name: "Vigna angularis", common_name: "Adzuki bean", tax:"Land Plants", version:"100", date:"2016-07-20", gene_count:"29523", iso_count:"37662", exon_count:"227720", intron_count:"185969", intron_with_error:"4200", phase_0_count:"105759", phase_1_count:"39960", phase_2_count:"40250", phase_0_persent:"56.9", phase_1_persent:"21.5", phase_2_persent:"21.6"},
  {id: 85, name: "Vigna radiata", common_name: "Mung bean", tax:"Land Plants", version:"100", date:"2015-11-10", gene_count:"29146", iso_count:"35029", exon_count:"208201", intron_count:"170071", intron_with_error:"3149", phase_0_count:"96566", phase_1_count:"37078", phase_2_count:"36427", phase_0_persent:"56.8", phase_1_persent:"21.8", phase_2_persent:"21.4"},
  {id: 86, name: "Vitis vinifera", common_name: "Wine grape", tax:"Land Plants", version:"102", date:"2016-11-25", gene_count:"29286", iso_count:"40064", exon_count:"239487", intron_count:"194949", intron_with_error:"4756", phase_0_count:"109202", phase_1_count:"43154", phase_2_count:"42593", phase_0_persent:"56.0", phase_1_persent:"22.1", phase_2_persent:"21.8"},
  {id: 87, name: "Xenopus laevis", common_name: "African clawed frog", tax:"Amphibians", version:"100", date:"2016-09-21", gene_count:"37283", iso_count:"56919", exon_count:"660532", intron_count:"597852", intron_with_error:"7087", phase_0_count:"274953", phase_1_count:"196813", phase_2_count:"126086", phase_0_persent:"46.0", phase_1_persent:"32.9", phase_2_persent:"21.1"},
  {id: 88, name: "Xenopus tropicalis", common_name: "Tropical clawed frog", tax:"Amphibians", version:"103", date:"2016-09-13", gene_count:"26974", iso_count:"39752", exon_count:"439710", intron_count:"396202", intron_with_error:"4722", phase_0_count:"182609", phase_1_count:"129564", phase_2_count:"84029", phase_0_persent:"46.1", phase_1_persent:"32.7", phase_2_persent:"21.2"},
  {id: 89, name: "Zea mays", common_name: "Maize", tax:"Land Plants", version:"100", date:"2014-08-02", gene_count:"52500", iso_count:"58044", exon_count:"300456", intron_count:"235743", intron_with_error:"7028", phase_0_count:"131019", phase_1_count:"53153", phase_2_count:"51571", phase_0_persent:"55.6", phase_1_persent:"22.5", phase_2_persent:"21.9"},
  {id: 90, name: "Ziziphus jujuba", common_name: "Fruit bearing tree", tax:"Land Plants", version:"100", date:"2016-03-24", gene_count:"33324", iso_count:"37526", exon_count:"205354", intron_count:"163407", intron_with_error:"4517", phase_0_count:"91219", phase_1_count:"36363", phase_2_count:"35825", phase_0_persent:"55.8", phase_1_persent:"22.3", phase_2_persent:"21.9"}
];

var new_data = tabledata;
var selected_organisms_ids = [];
var selected_organisms_names = [];

var loaded = 0;

$(document).on("turbolinks:load", function() {
  loaded += 1;
  if (loaded < 1){}
    $("#organism_table").tabulator({
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
    height:"600px",
    selectable:true,
    tableBuilt:function(){
      $("#organism_table").tabulator("selectRow");
    },
  });
  var org_table_headers = $(".tabulator-col-title");

  for (var i = 0; i < org_table_headers.length; ++i) {
    org_table_headers[i].setAttribute("data-toggle","tooltip");
    org_table_headers[i].setAttribute("data-placement","top");
    org_table_headers[i].setAttribute("title",org_table_headers[i].innerHTML);
  }

  $('#load_button').on('click', function (e) {
    $("#organism_table").tabulator("download", "csv", "organisms_table.csv");
  });

  $('#clear_filter').on('click', function (e) {
    new_data = tabledata;
    $("#organism_table").tabulator("setData", new_data);
    selectAfterTableRefresh(); // organism_filter.js
  });

  $("#organism_table").tabulator({
    rowSelectionChanged:function(data, rows){
      selected_organisms_ids = Array.prototype.map.call(data, function(x) { return x.id; });
      selected_organisms_names = Array.prototype.map.call(data, function(x) { return x.name + ", "; });
      org_counter = selected_organisms_names.length
      $("#total_org_counter").html("Total selected organisms: "+org_counter.toString())
      $('#selected_organisms_names').html(selected_organisms_names);
      if (org_counter == 0){
        disable_tabs()
      }else{
        enable_tabs()
      }
    },
  });

  $("#btn-select").on('click',function (e){
    var btn_primary = "btn-primary";
    var btn_warning = "btn-warning";
    if(this.classList.contains(btn_primary)){
      this.innerHTML = "Deselect all rows";
      this.classList.remove(btn_primary);
      this.classList.add(btn_warning);
      $("#organism_table").tabulator("selectRow");
    }else{
      this.innerHTML = "Select all rows";
      this.classList.remove(btn_warning);
      this.classList.add(btn_primary);
      $("#organism_table").tabulator("deselectRow");
    }
  });


});

function disable_tabs(){
  var gene_btn = $("#gene-btn-apply")[0]
  var exon_btn = $("#exon-btn-apply")[0]
  var intron_btn = $("#intron-btn-apply")[0]
  gene_btn.classList.add("disabled");
  exon_btn.classList.add("disabled");
  intron_btn.classList.add("disabled");
  add_no_org_tooltip(gene_btn)
  add_no_org_tooltip(exon_btn)
  add_no_org_tooltip(intron_btn)
}

function enable_tabs(){
  var gene_btn = $("#gene-btn-apply")[0]
  var exon_btn = $("#exon-btn-apply")[0]
  var intron_btn = $("#intron-btn-apply")[0]
  gene_btn.classList.remove("disabled");
  exon_btn.classList.remove("disabled");
  intron_btn.classList.remove("disabled");
  remove_no_org_tooltip(gene_btn)
  remove_no_org_tooltip(exon_btn)
  remove_no_org_tooltip(intron_btn)
}

function add_no_org_tooltip(elem){
    elem.setAttribute("data-toggle","tooltip");
    elem.setAttribute("data-placement","top");
    elem.setAttribute("title","Select organisms to activate button");
}

function remove_no_org_tooltip(elem){
    elem.removeAttribute("data-toggle");
    elem.removeAttribute("data-placement");
    elem.removeAttribute("title");
}

function column_hide(field_name, button, table) {
  if (button.classList.contains("active")){
    $(table).tabulator("showCol", field_name);  
  }else{
    $(table).tabulator("hideCol", field_name);  
  };
}

  // $('input.gene_input').typeahead({
  //   ajax: {
  //     url: '/gene_names',
  //     triggerLength: 1,
  //   },
  // });

  // $('input.organism_input').typeahead({
  //   onSelect: function(item) {
  //     $("#organism_table").tabulator("setFilter", "name", item["text"]);
  //     console.log(item["text"]);
  //   },
  //   ajax: {
  //     url: '/organism_names',
  //     triggerLength: 1,
  //   }
  // });

// function column_filter(column_name, button){
//   $("#col_name")[0].innerHTML = button.innerHTML;
//   $.ajax({
//   url: "/filter_button?column="+column_name,
//   }).done(function(data) {
//     console.log(button.parentElement.parentElement)
//     // return $("#results").append(html);
//   });
// }

// $("#organism_table").tabulator({setHeight:"100px"});