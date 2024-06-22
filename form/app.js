const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = "mongodb+srv://joaosantos:VYmKNMZh66qc0xev@cluster0.qwecnlf.mongodb.net/Project?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
    .then(function () {
        console.log('Connected to MongoDB');
    })
    .catch(function (err) {
        console.log('Error connecting to MongoDB', err);
    });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    imageUrl: String
}, { versionKey: false });

const User = mongoose.model('User', userSchema);

app.post('/users', upload.single('image'), function (req, res) {
    const imagePath = req.file.path.replace('public/', '');

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        imageUrl: imagePath
    });

    newUser.save()
        .then(function () {
            res.send({ message: 'User added successfully!', user: newUser });
        })
        .catch(function (err) {
            res.status(400).send({ message: 'Error adding user', error: err });
        });
});

app.listen(3000, function () {
    console.log('Server running on http://localhost:3000');
});
