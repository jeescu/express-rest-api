import mongoose from 'mongoose';

const facetSchema = new mongoose.Schema({
	name: String
});

const FacetModel = mongoose.model('facet', facetSchema);

export default FacetModel;
