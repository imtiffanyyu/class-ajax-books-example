var express = require ( 'express' )
var app = express ( )

app.get ( '/', ( req, res) => {
	res.send ( 'I am on' )
} )

app.listen ( 3000 )