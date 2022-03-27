function SearchScan() {
resultModal.show();
document.getElementById("loader1").style.display = 'block';
document.getElementById("scancoordinate").innerHTML = "";

$(".resultbody").empty();
var scaleserpAPIKey = "2760BE634A0D4E04A38C198E39DAFE73";
//var scaleserpAPIKey = "D8F883C3FBED4B52BB7A1A3BCAC21D9E";

var place	= document.getElementById("placesearch").value;

if (place == "") {
	alert("Please fill up the place query!");
} 

else {
	var myInit = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		mode: 'cors',
		cache: 'default'
	};


	//var addresssearch = street + ", " + city + ", " + state + ", " + country + ", " + postal;
	var urlsearch = "https://api.scaleserp.com/search?api_key=" + scaleserpAPIKey + "&search_type=places&hl=en&q=" + place;
	//var urlsearch = "testdata.json";
	let myRequest = new Request(urlsearch);

	fetch(myRequest)
		.then(function(resp) {
			return resp.json();
		})
		.then(function(data) {
			var dataitem = "";
			var dynahtml = "";
			var address = "";
			
			for(var i = 0; i < data["places_results"].length; i++) {
				dataitem = data["places_results"][i];
				
				dynahtml = 
				"<div class='card' style='width: 15rem;' onclick='changeMapLoc(" + i + ")'>" +
				"<div class='card-body'>" +
				"<h5 class='card-title'>" + dataitem.title + "</h5>" +
				"<p class='card-text'>" + dataitem.address + "</p>" +
				"<input type='hidden' id='long"+i+"' value='" + dataitem.gps_coordinates.longitude + "'>" +
				"<input type='hidden' id='lat"+i+"' value='" + dataitem.gps_coordinates.latitude + "'>" +
				"<input type='hidden' id='title"+i+"' value='" + dataitem.title + "'>" +
				"</div>" + 
				"</div><br>";
				$(".resultbody").append(dynahtml);
			}
			document.getElementById("loader1").style.display = 'none';	
		});

}

}

