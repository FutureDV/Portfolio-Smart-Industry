var SymbolBedrijf = 'AAPL';
function KoersAPI( SymbolBedrijf ) {
    var key = '00018a88ae198810a68489bb05cf2cf2';
    fetch('https://cloud.iexapis.com/stable/tops?token='+ key+'&symbols=' + SymbolBedrijf)
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {drawKoers(data);}) // Callback funtie drawKoers
    .catch(function() {});     // catch any errors
}
            function drawKoers( d ) {
            document.getElementById('Prijs').innerHTML = d.symbol;

            }

