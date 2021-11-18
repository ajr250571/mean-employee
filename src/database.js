const mongoose=require("mongoose");

mongoose
    .connect('mongodb://localhost:27017/mean-employees')
    .then(db => console.log('db esta Conectada'))
    .catch(err => console.log(err));
