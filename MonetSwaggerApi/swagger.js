const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require('express')
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "MonetAPi",
      description: "CompanyName API Information",
      servers: ["http://localhost:5000"]
    }
  },
  apis: ['server.js']
};

// route for swagger app
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: camp_id
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
//   app.post('/login', function(req, res) {
//   console.log(req.body)
//   res.json(req.body);
// });