import mongoose from 'mongoose';

const facetSchema = new mongoose.Schema({
  name: String,
  description: String
});

const FacetModel = mongoose.model('facet', facetSchema);

export default FacetModel;
