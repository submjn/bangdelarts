var mongoose = require('mongoose');

var ArtSchema = new mongoose.Schema({
  id: String,
  title: String,
  height: Number,
  width: Number,
  medium: String,
  category: String,
  sub_category: String,
  owner_collection: String,
  published_year: { type: Number, min: 1935, max: 2019 },
  date: Date,
  publisher: String,
  remarks: String,
  deven_img: Number,
  kabindra_sn: Number,
  kabindra_dsc: Number
});

module.exports = mongoose.model('Art', ArtSchema);