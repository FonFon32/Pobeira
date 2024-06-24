let express = require('express')
let mongoose = require('mongoose')
let port = 3000
let app = express()

app.use(express.json())
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

const uri = 'mongodb+srv://40230383:AspCC5GsyPvykzWi@cluster0.e8qcqeu.mongodb.net/Pobeira?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(uri)
    .then(function() {
        console.log('Connected to MongooseDB');
    }) 
    .catch(function(err) {
        console.log('Error connecting to MongooseDB', err);
    })

//modelo e schema ////////////////////////////////////////////////////////////////////

const pobeiraSchema = new mongoose.Schema({
    alcool: String,
    name: String,
    corpo: String,
    estilo: String,
    corpo2: String,
    headliner: String,
    headliner2: String,
    headlinerstyle: String,
    headliner2style: String,
    nameclass: String,
    imagem: String,
    status: String,
    corpostyle: String,
    bg: String,
    bgimg: String,
    btnleft: String,
    btnright: String,
    ebc: Number,
    ibu: Number
}, { versionKey: false });
const Pobeira = mongoose.model('Pobeira', pobeiraSchema);

////inicio do routing /////////////////////////////////////////////////////////////

app.get('/pobeiras', function(req, res) {
    let query = {};
    if (req.query.name) {
        query.name = req.query.name; 
    }

    Pobeira.find(query) 
    .then(function(pobeira) {
        res.send(pobeira)
    })
    .catch(function (err) {
        res.status(500).send({ message: 'Error fetching pobeiras', error: err })
    })
});

app.post('/pobeiras', function (req, res) {
    let newPobeira = new Pobeira(req.body)

    newPobeira
    .save()
    .then(function (pobeira) {
        res.send(pobeira)
    })
    .catch(function (err) {
        res.status(400).send({ message: 'Error adding pobeira', error: err })
    })
});


////app listen /////////////////////////////////////

app.listen(port, function() {
    console.log('Connected to http://localhost/', port)
});
