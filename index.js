const express = require('express');
const port = process.env.PORT || 3002;
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app =express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//routes
app.use('/api/products', productRoute);


app.get('/', (req,res) => {
    res.send('Hello World updated');
});

mongoose.connect(process.env.URL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log('Server is running on port ' + port);  
    });
}).catch((err) => {
    console.log(err);
});