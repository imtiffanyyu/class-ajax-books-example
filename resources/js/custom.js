$ ( document ).ready ( function ( ) {
	console.log ( "DOM is ready" )
	$ ( '.thumb' ).click(function () {
		var clickedbook = $ ( this ) .attr ('title') // triggered within the click
		console.log ( "You clicked " + clickedbook )
		var ajaxdata = {
			title: clickedbook // title attribute of the image
		}
		$.get ( '/api', ajaxdata, function ( data ) {
			console.log ( data )
			$ ('#title').text (data.title)
			$ ('#author').text (data.author)
			$ ('#description').text (data.desc)
			$ ('#cover').attr( { 'src': '/images/' + data.cover })
		}) // this is ajax
	})
} )