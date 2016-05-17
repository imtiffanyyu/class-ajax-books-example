var express = require ( 'express' )
var fs = require ( 'fs' )
var app = express ( )

app.use( express.static('./resources/')) // "./" in the current folder

app.set('view engine', 'jade');
app.set('views', 'src/views');

app.get ( '/', ( req, res) => {

	fs.readFile('./resources/books.json', function (error,data) {
		if(error) {
			res.send("book not found.");
		}
		else {
			var parsedBooks = JSON.parse (data)
			console.log (parsedBooks)
			res.render ( 'index', { books: parsedBooks } )
		}
	})

	
} )

app.listen ( 3000 )

// BOOK APP PLAN
// // X Make an index
// // X Have a book database
// // // X Boks need title, author, description, thumbnail, cover
// X Resources folder
// X Images folder
// X Get book images
// X Tell express to use a static folder
// Show the books on thge page
// Make script to control DOM and do AJAX
// DOM (result of rendering the page): listen for clicks
// AJAX: Get book details
// Create book API (place to request data and come back with the data)