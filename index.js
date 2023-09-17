const express=require('express');
const app=express();
const path=require('path');
// dichiaro le varibili che facciano istallazione di express.

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
//dichiaro una funzione di post che posta il sito del server.

app.post("/divisione", function(req, res) {
  num = parseInt(req.body.num);
  div = num;
//dichiaro le variabili in costanye e metto toString per convertire in divisione 
  const binario = div.toString(2);
  const ottale = div.toString(8);
  const decimale = div.toString(10);
  const esadecimale = div.toString(16).toUpperCase();
//metta la funzione is prime per trovare il numero primo
  function isPrime(div) {
    if (div <= 1) {
        return false;
    }
    if (div <= 3) {
        return true;
    }
    if (div % 2 === 0 || div % 3 === 0) {
        return false;
    }
    let divisor = 5;
    
    while (divisor * divisor <= div) {
        if (number % divisor === 0 || div % (divisor + 2) === 0) {
            return false;
        }
        divisor += 6;
    }
    return true;
}
  
const isPrimeNumber = isPrime(div);
 //poi metto res che scrive il sito del server 
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    '<html><body>' +
    '<br><br>' +
    '  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">'+
    ' <H2> I numeri convertiti </H2>'+
    ' il numero binario: ' + binario + '<br><br>' +
    ' il numero ottale: ' + ottale + '<br><br>' +
    ' il numero decimale: ' + decimale + '<br><br>' +
    ' il numero esadecimale: ' + esadecimale + '<br><br>' +
    ' il numero primo risultato: ' + isPrimeNumber + '<br><br>' +
    '<a href="/"> Torna indietro </a>' +
      '</body></html>'
  );
  res.end();
});
// merto il porto del 8080
let port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Convert_Bin_to_Dec/:parametro_binario " + port);
});

