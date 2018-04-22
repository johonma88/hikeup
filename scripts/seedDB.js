const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the mountains collection and inserts the mountains below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hikeups",
  {
    useMongoClient: true
  }
);

const mountain_infoSeed = [
  [{"id_14ers":1, "mountain_range":"Front Range", "14ers":"Grays Peak", "rank":"9 of 53", "elevation":"14,270", "latitude/longitude":"39.633820\u00b0 N -105.817520\u00b0 W"},
  {"id_14ers":2, "mountain_range":"Front Range", "14ers":"Torreys Peak", "rank":"11 of 53", "elevation":"14,267", "latitude/longitude":"39.642742\u00b0 N -105.821259\u00b0 W"},
  {"id_14ers":3, "mountain_range":"Front Range", "14ers":"Mt. Evans", "rank":"14 of 53", "elevation":"14,264", "latitude/longitude":"39.588360\u00b0 N -105.643333\u00b0 W"},
  {"id_14ers":4, "mountain_range":"Front Range", "14ers":"Longs Peak", "rank":"15 of 53", "elevation":"14,255", "latitude/longitude":"40.254902\u00b0 N\n-105.615738\u00b0 W"},
  {"id_14ers":5, "mountain_range":"Front Range", "14ers":"Mt. Bierstadt", "rank":"38 of 53", "elevation":"14,060", "latitude/longitude":"39.582638\u00b0 N -105.668610\u00b0 W"},
  {"id_14ers":6, "mountain_range":"Tenmile Range", "14ers":"Quandary Peak", "rank":"13 of 53", "elevation":"14,265", "latitude/longitude":"39.397236\u00b0 N\n-106.106430\u00b0 W"},
  {"id_14ers":7, "mountain_range":"Mosquito Range", "14ers":"Mt. Lincoln", "rank":"8 of 53", "elevation":"14,286", "latitude/longitude":"39.351391\u00b0 N -106.111404\u00b0 W"},
  {"id_14ers":8, "mountain_range":"Mosquito Range", "14ers":"Mt. Cameron", "rank":"unranked", "elevation":"14,238", "latitude/longitude":"39.346844\u00b0 N\n-106.118576\u00b0 W"},
  {"id_14ers":9, "mountain_range":"Mosquito Range", "14ers":"Mt. Bross", "rank":"22 of 53", "elevation":"14,172", "latitude/longitude":"39.335060\u00b0 N\n-106.107376\u00b0 W"},
  {"id_14ers":10, "mountain_range":"Mosquito Range", "14ers":"Mt. Democrat", "rank":"28 of 53", "elevation":"14,148", "latitude/longitude":"39.339542\u00b0 N\n-106.139946\u00b0 W"},
  {"id_14ers":11, "mountain_range":"Mosquito Range", "14ers":"Mt. Sherman", "rank":"45 of 53", "elevation":"14,036", "latitude/longitude":"39.225006\u00b0 N -106.169945\u00b0 W"},
  {"id_14ers":12, "mountain_range":"Sawatch Range", "14ers":"Mt. Elbert", "rank":"1 of 53", "elevation":"14,433", "latitude/longitude":"39.118075\u00b0 N -106.445417\u00b0 W"},
  {"id_14ers":13, "mountain_range":"Sawatch Range", "14ers":"Mt. Massive", "rank":"2 of 53", "elevation":"14,421", "latitude/longitude":"39.187298\u00b0 N -106.475548\u00b0 W"},
  {"id_14ers":14, "mountain_range":"Sawatch Range", "14ers":"Mt. Harvard", "rank":"3 of 53", "elevation":"14,420", "latitude/longitude":"38.924328\u00b0 N\n-106.320618\u00b0 W"},
  {"id_14ers":15, "mountain_range":"Sawatch Range", "14ers":"La Plata Peak", "rank":"5 of 53", "elevation":"14,336", "latitude/longitude":"39.029251\u00b0 N\n-106.473145\u00b0 W"},
  {"id_14ers":16, "mountain_range":"Sawatch Range", "14ers":"Mt. Antero", "rank":"10 of 53", "elevation":"14,269", "latitude/longitude":"38.674088\u00b0 N -106.246201\u00b0 W"},
  {"id_14ers":17, "mountain_range":"Sawatch Range", "14ers":"Mt. Shavano", "rank":"17 of 53", "elevation":"14,229", "latitude/longitude":"38.619083\u00b0 N -106.239296\u00b0 W"},
  {"id_14ers":18, "mountain_range":"Sawatch Range", "14ers":"Mt. Belford", "rank":"18 of 53", "elevation":"14,197", "latitude/longitude":"38.960575\u00b0 N\n-106.360832\u00b0 W"},
  {"id_14ers":19, "mountain_range":"Sawatch Range", "14ers":"Mt. Princeton", "rank":"20 of 53", "elevation":"14,197", "latitude/longitude":"38.749062\u00b0 N\n-106.242432\u00b0 W"},
  {"id_14ers":20, "mountain_range":"Sawatch Range", "14ers":"Mt. Yale", "rank":"21 of 53", "elevation":"14,196", "latitude/longitude":"38.844051\u00b0 N -106.313965\u00b0 W"},
  {"id_14ers":21, "mountain_range":"Sawatch Range", "14ers":"Tabeguache Peak", "rank":"25 of 53", "elevation":"14,155", "latitude/longitude":"38.625622\u00b0 N -106.250710\u00b0 W"},
  {"id_14ers":22, "mountain_range":"Sawatch Range", "14ers":"Mt. Oxford", "rank":"26 of 53", "elevation":"14,153", "latitude/longitude":"38.964680\u00b0 N -106.338432\u00b0 W"},
  {"id_14ers":23, "mountain_range":"Sawatch Range", "14ers":"Mt. Columbia", "rank":"35 of 53", "elevation":"14,073", "latitude/longitude":"38.903957\u00b0 N -106.297485\u00b0 W"},
  {"id_14ers":24, "mountain_range":"Sawatch Range", "14ers":"Missouri Mountain", "rank":"36 of 53", "elevation":"14,067", "latitude/longitude":"38.947559\u00b0 N -106.378471\u00b0 W"},
  {"id_14ers":25, "mountain_range":"Sawatch Range", "14ers":"Mt. of the Holy Cross", "rank":"51 of 53", "elevation":"14,005", "latitude/longitude":"39.466713\u00b0 N -106.481766\u00b0 W"},
  {"id_14ers":26, "mountain_range":"Sawatch Range", "14ers":"Huron Peak", "rank":"52 of 53", "elevation":"14, 003", "latitude/longitude":"38.945423\u00b0 N\n-106.438126\u00b0 W"},
  {"id_14ers":27, "mountain_range":"Elk Mountains", "14ers":"Castle Peak", "rank":"12 of 53", "elevation":"14,265", "latitude/longitude":"39.009647\u00b0 N -106.86144\u00b0 W"},
  {"id_14ers":28, "mountain_range":"Elk Mountains", "14ers":"Maroon Peak", "rank":"24 of 53", "elevation":"14,156", "latitude/longitude":"39.070713\u00b0 N\n-106.989113\u00b0 W"},
  {"id_14ers":29, "mountain_range":"Elk Mountains", "14ers":"Capitol Peak", "rank":"29 of 53", "elevation":"14,130", "latitude/longitude":"39.150166\u00b0 N\n-107.083221\u00b0 W"},
  {"id_14ers":30, "mountain_range":"Elk Mountains", "14ers":"Snowmass Mountain", "rank":"31 of 53", "elevation":"14,092", "latitude/longitude":"39.118809\u00b0 N -107.066528\u00b0 W"},
  {"id_14ers":31, "mountain_range":"Elk Mountains", "14ers":"Conundrum Peak", "rank":"unranked", "elevation":"14,060", "latitude/longitude":"39.01563\u00b0 N -106.86294\u00b0 W"},
  {"id_14ers":32, "mountain_range":"Elk Mountains", "14ers":"Pyramid Peak", "rank":"47 of 53", "elevation":"14,018", "latitude/longitude":"39.071545\u00b0 N\n-106.950188\u00b0 W"},
  {"id_14ers":33, "mountain_range":"Elk Mountains", "14ers":"North Maroon Peak", "rank":"unranked", "elevation":"14,014", "latitude/longitude":"39.076077\u00b0 N -106.987267\u00b0 W"},
  {"id_14ers":34, "mountain_range":"San Juan Mountains", "14ers":"Uncompahgre Peak", "rank":"6 of 53", "elevation":"14,309", "latitude/longitude":"38.071507\u00b0 N -107.462166\u00b0 W"},
  {"id_14ers":35, "mountain_range":"San Juan Mountains", "14ers":"Mt. Wilson", "rank":"16 of 53", "elevation":"14,246", "latitude/longitude":"37.839310\u00b0 N\n-107.991570\u00b0 W"},
  {"id_14ers":36, "mountain_range":"San Juan Mountains", "14ers":"El Diente Peak", "rank":"unranked", "elevation":"14,159", "latitude/longitude":"37.839275\u00b0 N -108.005219\u00b0 W"},
  {"id_14ers":37, "mountain_range":"San Juan Mountains", "14ers":"Mt. Sneffels", "rank":"27 of 53", "elevation":"14,150", "latitude/longitude":"38.003605\u00b0 N\n-107.792229\u00b0 W"},
  {"id_14ers":38, "mountain_range":"San Juan Mountains", "14ers":"Mt. Eolus", "rank":"32 of 53", "elevation":"14,083", "latitude/longitude":"37.621948\u00b0 N\n-107.622498\u00b0 W"},
  {"id_14ers":39, "mountain_range":"San Juan Mountains", "14ers":"Windom Peak", "rank":"33 of 53", "elevation":"14,082", "latitude/longitude":"37.621235\u00b0 N -107.591774\u00b0 W"},
  {"id_14ers":40, "mountain_range":"San Juan Mountains", "14ers":"Sunlight Peak", "rank":"39 of 53", "elevation":"14,059", "latitude/longitude":"37.627285\u00b0 N -107.595894\u00b0 W"},
  {"id_14ers":41, "mountain_range":"San Juan Mountains", "14ers":"Handies Peak", "rank":"40 of 53", "elevation":"14,048", "latitude/longitude":"37.913021\u00b0 N -107.504478\u00b0 W"},
  {"id_14ers":42, "mountain_range":"San Juan Mountains", "14ers":"North Eolus", "rank":"unranked", "elevation":"14,039", "latitude/longitude":"37.625416\u00b0 N\n-107.620995\u00b0 W"},
  {"id_14ers":43, "mountain_range":"San Juan Mountains", "14ers":"Redcloud Peak", "rank":"46 of 53", "elevation":"14,034", "latitude/longitude":"37.940880\u00b0 N\n-107.421654\u00b0 W"},
  {"id_14ers":44, "mountain_range":"San Juan Mountains", "14ers":"Wilson Peak", "rank":"48 of 53", "elevation":"14,017", "latitude/longitude":"37.859913\u00b0 N -107.984795\u00b0 W"},
  {"id_14ers":45, "mountain_range":"San Juan Mountains", "14ers":"Wetterhorn Peak", "rank":"49 of 53", "elevation":"14,015", "latitude/longitude":"38.060593\u00b0 N\n-107.510834\u00b0 W"},
  {"id_14ers":46, "mountain_range":"San Juan Mountains", "14ers":"San Luis Peak", "rank":"50 of 53", "elevation":"14, 014", "latitude/longitude":"37.986897\u00b0 N\n-106.931389\u00b0 W"},
  {"id_14ers":47, "mountain_range":"San Juan Mountains", "14ers":"Sunshine Peak", "rank":"53 of 53", "elevation":"14,001", "latitude/longitude":"\t37.922604\u00b0 N\n-107.425606\u00b0 W"},
  {"id_14ers":48, "mountain_range":"Sangre de Cristo Range", "14ers":"Blanca Peak", "rank":"4 of 53", "elevation":"14,345", "latitude/longitude":"37.577473\u00b0 N\n-105.485443\u00b0 W"},
  {"id_14ers":49, "mountain_range":"Sangre de Cristo Range", "14ers":"Crestone Peak", "rank":"7 of 53", "elevation":"14,294", "latitude/longitude":"37.966972\u00b0 N -105.585304\u00b0 W"},
  {"id_14ers":50, "mountain_range":"Sangre de Cristo Range", "14ers":"Crestone Needle", "rank":"19 of 53", "elevation":"14,197", "latitude/longitude":"37.964737\u00b0 N\n-105.576683\u00b0 W"},
  {"id_14ers":51, "mountain_range":"Sangre de Cristo Range", "14ers":"Kit Crason Peak", "rank":"23 of 53", "elevation":"14,165", "latitude/longitude":"37.979759\u00b0 N\n-105.602562\u00b0 W"},
  {"id_14ers":52, "mountain_range":"Sangre de Cristo Range", "14ers":"Challenger Point", "rank":"34 of  53", "elevation":"14,081", "latitude/longitude":"37.980267\u00b0 N -105.606766\u00b0 W"},
  {"id_14ers":53, "mountain_range":"Sangre de Cristo Range", "14ers":"Humboldt Peak", "rank":"37 of 53", "elevation":"14,064", "latitude/longitude":"37.976105\u00b0 N -105.555351\u00b0 W"},
  {"id_14ers":54, "mountain_range":"Sangre de Cristo Range", "14ers":"Culebra Peak", "rank":"41 of 53", "elevation":"14,047", "latitude/longitude":"37.122173\u00b0 N -105.185593\u00b0 W"},
  {"id_14ers":55, "mountain_range":"Sangre de Cristo Range", "14ers":"Ellingwood Point", "rank":"42 of 53", "elevation":"14,042", "latitude/longitude":"37.582508\u00b0 N -105.492569\u00b0 W"},
  {"id_14ers":56, "mountain_range":"Sangre de Cristo Range", "14ers":"Mt. Lindsey", "rank":"43 of 53", "elevation":"14,042", "latitude/longitude":"37.583801\u00b0 N -105.444763\u00b0 W"},
  {"id_14ers":57, "mountain_range":"Sangre de Cristo Range", "14ers":"Little Bear Peak", "rank":"44 of 53", "elevation":"14,037", "latitude/longitude":"37.566624\u00b0 N -105.497162\u00b0 W"}]
];

db.Mountain_info
  .remove({})
  .then(() => db.Mountain_info.collection.insertMany( mountain_infoSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
