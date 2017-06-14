var http = require('http');
var url = require('url');
var final = [];
  console.log("Started...")
    var server = http.createServer(function (req, res) {
        // request handling logic...
        console.log("Some conection happened");
       var url_parts = url.parse(req.url, true);
       var c = url_parts.query.iso

       if (!isNaN(c)){
        var theDate = new Date(c * 1000);
        var dateString = theDate.toGMTString();
        if(dateString == "Invalid Date"){
          varHuman = null;
          var varUnix = null;
        }
        else{
          varUnix = c;
          varHuman = dateString;
        }

      }
      else{
        var date = new Date(c).getTime()/1000;
        if(isNaN(date)){
          varHuman = null;
          varUnix = null;
        }
        else{
          var varHuman = new Date(c);
          varHuman = varHuman.toGMTString();;
          varUnix = date;
        }
      }

        final = {human: varHuman, unix: varUnix};

        res.write(JSON.stringify(final));
        res.end();


    })
    server.listen(80);
