// Load required packages
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
var Campaign = require("./models/campaign");
var Company = require("./models/company");
var Content = require("./models/content");
var Survey = require("./models/survey");

//*******************required**********************
// var companyController = require("./controllers/company");
// var contentController = require("./controllers/content");
// var campaignController = require("./controllers/campaign");
// Connect to the beerlocker MongoDB
mongoose.connect("mongodb://localhost:27017/diy_monet");

//swegger definition
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "MonetAPi",
      description: "CompanyName API Information",
      // servers: ["http://localhost:5000"]
    }
  },
  apis: ['server.js']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Create our Express application
var app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Create our Express router
var router = express.Router();

/**
 * @swagger
 * /company/{id}:
 *  get:
 *    description: get by id
 *    parameters : 
 *          - name : id
 *            description :  id for get company details
 *            in  : path
 *            type : integer
 *            required : true
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/company/:id',(req,res)=>{
	Company.find({ comp_id: req.params.id  }, function (err, coms) {
    if (err) return res.send(err);

    res.json(coms);
  });

});

/**
 * @swagger
 * /compaigns/{id}:
 *  get:
 *    description: get by id
 *    parameters : 
 *          - name : id
 *            description :  id for get campaign details
 *            in  : path
 *            type : integer
 *            required : true
 *       
 *    responses:
 *       '200':
 *           description: A successful response
 *
 */
app.get('/compaigns/:id',(req,res)=>{
	Campaign.find({ cmp_comp_id: req.params.id }, function (err, coms) {
    if (err) return res.send(err);

    res.json(coms);
  }).limit(2);

});


/**
 * @swagger
 * /contents/{id}:
 *  get:
 *    description: get by id
 *    parameters : 
 *          - name : id
 *            description :  id for get campaign details
 *            in  : path
 *            type : integer
 *            required : true
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/contents/:id',(req,res)=>{
	 Content.find({ cnt_comp_id: req.params.id }, function (err, coms) {
    if (err) return res.send(err);

    res.json(coms);
  });

});



/**
 * @swagger
 * /getSurvey/{id}:
 *  get:
 *    description: survey get by id
 *    parameters : 
 *          - name : id
 *            description :  id for get campaign details
 *            in  : path
 *            type : integer
 *            required : true
 *    responses:
 *      '200':
 *        description: A successful response
 */


app.get('/getSurvey/:id',(req,res)=>{
        Survey.find({ cns_id : req.params.id},(err,coms)=>{
          if (err) return res.send(err)
          // console.log(Object.keys(Survey))
          coms.forEach((data)=>{
            const mydata = data.cns_questions
            mydata.forEach((data)=>{
              console.log(data.question)
            })
              return res.json(data.cns_survey_name)
          })
            
         
        })
})



/**
 * @swagger
 * /getQnA:
 *  get:
 *    description: questions and ans
 *    responses:
 *      '200':
 *        description: A successful response
 */






app.get('/getQnA',(req,res)=>{

  const mydata = Survey.find()
  if (err) return res.send(err)
  res.json(mydata)
})
















// Create endpoint handlers for /companys
// router.route("/companys/:comp_id").get(companyController.getComs);

// // Create endpoint handlers for /contents
// router.route("/contents/:cnt_comp_id").get(contentController.getContents);
// // Create endpoint handlers for /campaigns
// router.route("/campaigns/:cmp_comp_id").get(campaignController.getCampaigns);

// // Register all our routes with /api
// app.use("/api", router);

// Start the server
app.listen(3000);
