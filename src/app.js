var express = require ( 'express' )
var app = express ( )

app.set('view engine', 'jade');
app.set('views', 'src/views');

app.get ( '/', ( req, res) => {
	res.render ( 'index' )
} )

app.listen ( 3000 )

// BOOK APP PLAN
// // Make an index
// // Have a book database
// // // Boks need title, author, description, thumbnail, cover
// Resources folder
// Images folder
// Get book images
// Tell expess to use a static folder
// Make script to control DOM and do AJAX
// DOM (result of rendering the page): listen for clicks
// AJAX: Get book details
// Create book API (place to request data and come back with the data)