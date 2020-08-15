const mongoose  = require('mongoose')

const surveySchema = new mongoose.Schema({
	cns_id : Number,
	cns_comp_id : Number,
	cns_survey_name : String,
	cns_questions : Array

})


module.exports = mongoose.model('surveys',surveySchema,'surveys')