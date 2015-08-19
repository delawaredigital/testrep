// Load the necessary servers.
var sys = require( "sys" );
var http = require( "http" );
 
// Create our HTTP server.
var server = http.createServer(
function( request, response ){
 
 
// Create a SUPER SIMPLE response.
response.writeHead( 200, {"content-type": "text/plain"} );
response.write( "Hellow world from AWS!\n" );
response.end();
 Crocodoc.createViewer(element, config);
 
}
);
 
// Point the HTTP server to port 8080.
server.listen( 8080 );
 
// For logging....
sys.puts( "Server is running on 8080" );

<link rel="stylesheet" href="crocodoc.viewer.min.css" />
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="crocodoc.viewer.min.js"></script>
<div class="viewer" style="height: 400px"></div>
<script type="text/javascript">
    var viewer = Crocodoc.createViewer('.viewer', {
        url: 'https://view-api.box.com/1/sessions/3c6abc0dcf35422e8353cf9c27578d5c/assets/'
    });
    viewer.load();
</script>