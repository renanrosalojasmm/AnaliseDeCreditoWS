let req = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Datastore = require('nedb');
var winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
db = new Datastore({ filename: 'database', autoload: true });

const uri = "https://ussouthcentral.services.azureml.net/workspaces/e8024d0590234d219c8aad2d5c779498/services/48f3a61a677e4cf7acf9e687487a9bed/execute?api-version=2.0&format=swagger";
const apiKey = "4PTkHsCnDowS7SIcO133fiAmVRePyMoaUmQZEuknHJF/SYejkPH5cwBpiHENwgm4Yy2fkmxMu0a0xcKPXoOb8A==";

const options = {
    uri: uri,
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey,
    }
}

app.post('/', function (request, response) {

    options.body = JSON.stringify(request.body.objeto);

    req(options, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            body = JSON.parse(body);
            var scoredLabel = body.Results.output1[0]['Scored Labels'];
            var scoredProbability = body.Results.output1[0]['Scored Probabilities'];
            var resultado = { 'Score': scoredLabel, 'Probabilidade': scoredProbability };

            db.insert(body.Results.output1[0], function (err, newDoc) {          
                
            });
            logger.info('Request made');
            response.send(resultado);
        } else {
            logger.error(res.statusCode);
            response.send("The request failed with status code: " + res.statusCode);
        }
    });
});

app.listen(3000, function () {
    logger.info('Servidor executando na porta 3000!');
    console.log('Servidor executando na porta 3000!');
});


