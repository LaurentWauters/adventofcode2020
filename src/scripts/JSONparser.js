const { Http2ServerRequest } = require("http2");

function get_json(url, callback) {
    http2.get(url, function(res){
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            var response = JSON.parse(body);
// call function ----v
            callback(response);
        });
    });
}

         // -----------the url---v         ------------the callback---v
var mydata = get_json("https://adventofcode.com/2020/day/1/input", function (resp) {
    console.log(resp);
});