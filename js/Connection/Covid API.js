fetch('https://api.covid19api.com/summary')
.then(function(resp) { return resp.json() })
.then(function(data) {
    console.log(data);
    var A = data.Countries[119].Date;
    A = A.replace(/T/g," ");
    A = A.replace(/Z/g," ");
    document.getElementById("Land").innerHTML = (data.Countries[119].Country);
    document.getElementById("Datum").innerHTML = (A);
    document.getElementById("NewConfirmed").innerHTML = (data.Countries[119].NewConfirmed);
    document.getElementById("TotalConfirmed").innerHTML = (data.Countries[119].TotalConfirmed);
})
.catch(function() {
});
