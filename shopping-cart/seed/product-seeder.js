/**
 * Created by abo37 on 30/06/2017.
 */
var Product = require('../models/product'); //SCHEMA FOR PRODUCTS DEFINES KEYS AND VALUES

var mongoose = require('mongoose');         //PACKAGE FOR EASY MONGO METHODS

mongoose.Promise = global.Promise;
//CONNECTS TO MONGOOSE DATABASE "SHOPPING" ON PORT 27018
mongoose.connect('localhost:27018/shopping');


//ARRAY FOR PRODUCTS ALSO DEFINED FIELDS FOUND IN SCHEMA
var products = [
    new Product({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/736x/6a/d7/7a/6ad77ad28a37e251097c33441ce3516a--mini-things-small-things.jpg',
        title: 'Breakfast',
        description: 'Foood',
        price: 10
    }),
    new Product({
        imagePath: 'https://www.petitplat.fr/Graphics/tutorials/DIY_Donut.jpg',
        title: 'Donuts',
        description: 'Also awesome? But of course it was better in vanilla ...',
        price: 20
    }),
    new Product({
        imagePath: 'https://img0.etsystatic.com/017/1/6836645/il_340x270.484164096_nars.jpg',
        title: 'Ploughmans',
        description: 'Meh ... nah, it\'s okay I guess',
        price: 40
    }),
    new Product({
        imagePath: 'http://9bytz.com/wp-content/uploads/2011/12/miniature-food-8.jpg',
        title: 'Pizza',
        description: 'Now that is super awesome!',
        price: 15
    }),
    new Product({
        imagePath: 'https://thewondrous.com/wp-content/uploads/2011/12/Miniature-Food-Sculpture19.jpg',
        title: 'Salmon',
        description: 'I died!',
        price: 50
    })
];
// LOOPS OVER PRODUCTS ARRAY AND CALLBACK WILL EXIT PROCESS WHEN ALL PRODUCTS LOOPED OVER
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        if(err) {
            console.log(err);
        }
        done++;
            if (done === products.length) {
                exit();
            }
    });
}
//DISOCNNECTS FROM MONGO AFTER ALL PRODUCTS FED TO INDEX.JS ROUTES
function exit() {
    mongoose.disconnect();
}