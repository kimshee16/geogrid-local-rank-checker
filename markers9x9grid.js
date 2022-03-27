	//document.getElementById("searchmarkerscan").addEventListener("click", getMarkersResult);
	var scaleserpAPIKey = "2760BE634A0D4E04A38C198E39DAFE73";
	//var scaleserpAPIKey = "D8F883C3FBED4B52BB7A1A3BCAC21D9E";
	var currenttitle = "";
	function onClick(mainlat, mainlong, markernumber, e) {
		var dynahtml = "";
		var rank = 0;
		if(markernumber == 1) {
			console.log(markerresulttitle1);
			console.log(markerresultaddress1);
			resultModal.show();
			document.getElementById("scancoordinate").innerHTML = "Search result for this coordinates: Lat: " + mainlat + ", Long: " + mainlong;
			$(".resultbody").empty();
			currenttitle = document.getElementById("currenttitle").value;
			for(var i = 0; i < markerresulttitle1.length; i++) {
				if(currenttitle == markerresulttitle1[i]) {
					rank = i + 1;
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle1[i] + " <span class='badge bg-primary'>Ranked " + rank + "</span></h5>" +
					"<p class='card-text'>" + markerresultaddress1[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				} else {
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle1[i] + "</h5>" +
					"<p class='card-text'>" + markerresultaddress1[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				}
			}
		}

		if(markernumber == 2) {
			console.log(markerresulttitle2);
			console.log(markerresultaddress2);
			resultModal.show();
			document.getElementById("scancoordinate").innerHTML = "Search result for this coordinates: Lat: " + mainlat + ", Long: " + mainlong;
			$(".resultbody").empty();
			currenttitle = document.getElementById("currenttitle").value;
			for(var i = 0; i < markerresulttitle2.length; i++) {
				if(currenttitle == markerresulttitle2[i]) {
					rank = i + 1;
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle2[i] + " <span class='badge bg-primary'>Ranked " + rank + "</span></h5>" +
					"<p class='card-text'>" + markerresultaddress2[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				} else {
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle2[i] + "</h5>" +
					"<p class='card-text'>" + markerresultaddress2[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				}
			}
		}

		if(markernumber == 3) {
			console.log(markerresulttitle3);
			console.log(markerresultaddress3);
			resultModal.show();
			document.getElementById("scancoordinate").innerHTML = "Search result for this coordinates: Lat: " + mainlat + ", Long: " + mainlong;
			$(".resultbody").empty();
			currenttitle = document.getElementById("currenttitle").value;
			for(var i = 0; i < markerresulttitle3.length; i++) {
				if(currenttitle == markerresulttitle3[i]) {
					rank = i + 1;
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle3[i] + " <span class='badge bg-primary'>Ranked " + rank + "</span></h5>" +
					"<p class='card-text'>" + markerresultaddress3[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				} else {
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle3[i] + "</h5>" +
					"<p class='card-text'>" + markerresultaddress3[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				}
			}
		}

		if(markernumber == 4) {
			console.log(markerresulttitle4);
			console.log(markerresultaddress4);
			resultModal.show();
			document.getElementById("scancoordinate").innerHTML = "Search result for this coordinates: Lat: " + mainlat + ", Long: " + mainlong;
			$(".resultbody").empty();
			currenttitle = document.getElementById("currenttitle").value;
			for(var i = 0; i < markerresulttitle4.length; i++) {
				if(currenttitle == markerresulttitle4[i]) {
					rank = i + 1;
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle4[i] + " <span class='badge bg-primary'>Ranked " + rank + "</span></h5>" +
					"<p class='card-text'>" + markerresultaddress4[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				} else {
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle4[i] + "</h5>" +
					"<p class='card-text'>" + markerresultaddress4[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				}
			}
		}

		if(markernumber == 5) {
			console.log(markerresulttitle5);
			console.log(markerresultaddress5);
			resultModal.show();
			document.getElementById("scancoordinate").innerHTML = "Search result for this coordinates: Lat: " + mainlat + ", Long: " + mainlong;
			$(".resultbody").empty();
			currenttitle = document.getElementById("currenttitle").value;
			for(var i = 0; i < markerresulttitle5.length; i++) {
				if(currenttitle == markerresulttitle5[i]) {
					rank = i + 1;
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle5[i] + " <span class='badge bg-primary'>Ranked " + rank + "</span></h5>" +
					"<p class='card-text'>" + markerresultaddress5[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				} else {
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle5[i] + "</h5>" +
					"<p class='card-text'>" + markerresultaddress5[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				}
			}
		}

		if(markernumber == 6) {
			console.log(markerresulttitle6);
			console.log(markerresultaddress6);
			resultModal.show();
			document.getElementById("scancoordinate").innerHTML = "Search result for this coordinates: Lat: " + mainlat + ", Long: " + mainlong;
			$(".resultbody").empty();
			currenttitle = document.getElementById("currenttitle").value;
			for(var i = 0; i < markerresulttitle6.length; i++) {
				if(currenttitle == markerresulttitle6[i]) {
					rank = i + 1;
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle6[i] + " <span class='badge bg-primary'>Ranked " + rank + "</span></h5>" +
					"<p class='card-text'>" + markerresultaddress6[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				} else {
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle6[i] + "</h5>" +
					"<p class='card-text'>" + markerresultaddress6[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				}
			}
		}

		if(markernumber == 7) {
			console.log(markerresulttitle7);
			console.log(markerresultaddress7);
			resultModal.show();
			document.getElementById("scancoordinate").innerHTML = "Search result for this coordinates: Lat: " + mainlat + ", Long: " + mainlong;
			$(".resultbody").empty();
			currenttitle = document.getElementById("currenttitle").value;
			for(var i = 0; i < markerresulttitle7.length; i++) {
				if(currenttitle == markerresulttitle7[i]) {
					rank = i + 1;
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle7[i] + " <span class='badge bg-primary'>Ranked " + rank + "</span></h5>" +
					"<p class='card-text'>" + markerresultaddress7[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				} else {
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle7[i] + "</h5>" +
					"<p class='card-text'>" + markerresultaddress7[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				}
			}
		}

		if(markernumber == 8) {
			console.log(markerresulttitle8);
			console.log(markerresultaddress8);
			resultModal.show();
			document.getElementById("scancoordinate").innerHTML = "Search result for this coordinates: Lat: " + mainlat + ", Long: " + mainlong;
			$(".resultbody").empty();
			currenttitle = document.getElementById("currenttitle").value;
			for(var i = 0; i < markerresulttitle8.length; i++) {
				if(currenttitle == markerresulttitle8[i]) {
					rank = i + 1;
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle8[i] + " <span class='badge bg-primary'>Ranked " + rank + "</span></h5>" +
					"<p class='card-text'>" + markerresultaddress8[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				} else {
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle8[i] + "</h5>" +
					"<p class='card-text'>" + markerresultaddress8[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				}
			}
		}

		if(markernumber == 9) {
			console.log(markerresulttitle9);
			console.log(markerresultaddress9);
			resultModal.show();
			document.getElementById("scancoordinate").innerHTML = "Search result for this coordinates: Lat: " + mainlat + ", Long: " + mainlong;
			$(".resultbody").empty();
			currenttitle = document.getElementById("currenttitle").value;
			for(var i = 0; i < markerresulttitle9.length; i++) {
				if(currenttitle == markerresulttitle9[i]) {
					rank = i + 1;
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle9[i] + " <span class='badge bg-primary'>Ranked " + rank + "</span></h5>" +
					"<p class='card-text'>" + markerresultaddress9[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				} else {
					dynahtml = 
					"<div class='card' style='width: 15rem;'>" +
					"<div class='card-body'>" +
					"<h5 class='card-title'>" + markerresulttitle9[i] + "</h5>" +
					"<p class='card-text'>" + markerresultaddress9[i] + "</p>" +
					"</div>" + 
					"</div><br>";
					$(".resultbody").append(dynahtml);
				}
			}
		}

		
	}

	function getMarkersResult1(lat, long) {
		document.getElementById("loader2").style.display = 'block';
		currenttitle = document.getElementById("currenttitle").value;
		
		var currentlong = document.getElementById("currentlong").value;
		var currentlat = document.getElementById("currentlat").value;

		currentlat = parseFloat(currentlat);
		currentlong = parseFloat(currentlong);

		  	  document.getElementById("scanadvise").innerHTML = "Scanning Marker 1";
				//var scaleserpAPIKey1 = "2760BE634A0D4E04A38C198E39DAFE73";
				var keyword	= document.getElementById("keywordsearch").value;

				var urlsearch = "https://api.scaleserp.com/search?api_key=" + scaleserpAPIKey + "&location=lat:" + lat + ",lon:" + long + ",zoom:13&search_type=places&hl=en&q=" + keyword;
				//var urlsearch = "jollibee.json";
				let myRequest = new Request(urlsearch);
				fetch(myRequest)
					.then(function(resp) {
						return resp.json();
					})
					.then(function(data) {
						var checksameaddress = true;
						var dataitem = "";
						var address = "";
						for(var i = 0; i < data["places_results"].length; i++) {
							dataitem = data["places_results"][i];
							markerresulttitle1.push(dataitem.title); 
							markerresultaddress1.push(dataitem.address);
							if(currenttitle == dataitem.title) {
								document.getElementById("markerresultrank1").value = i + 1;
							}
						}
						document.getElementById("loader2").style.display = 'none';
						document.getElementById("scanadvise").innerHTML = "";
					});
	}

	function getMarkersResult2(lat, long) {
		document.getElementById("loader2").style.display = 'block';
		currenttitle = document.getElementById("currenttitle").value;

		var currentlong = document.getElementById("currentlong").value;
		var currentlat = document.getElementById("currentlat").value;

		currentlat = parseFloat(currentlat);
		currentlong = parseFloat(currentlong);

		  	  document.getElementById("scanadvise").innerHTML = "Scanning Marker 2";
				//var scaleserpAPIKey1 = "2760BE634A0D4E04A38C198E39DAFE73";
				var keyword	= document.getElementById("keywordsearch").value;

				var urlsearch = "https://api.scaleserp.com/search?api_key=" + scaleserpAPIKey + "&location=lat:" + lat + ",lon:" + long + ",zoom:13&search_type=places&hl=en&q=" + keyword;
				//var urlsearch = "jollibee.json";
				let myRequest = new Request(urlsearch);
				fetch(myRequest)
					.then(function(resp) {
						return resp.json();
					})
					.then(function(data) {
						var checksameaddress = true;
						var dataitem = "";
						var address = "";
						for(var i = 0; i < data["places_results"].length; i++) {
							dataitem = data["places_results"][i];
							markerresulttitle2.push(dataitem.title); 
							markerresultaddress2.push(dataitem.address);
							if(currenttitle == dataitem.title) {
								document.getElementById("markerresultrank2").value = i + 1;
							}
						}
						document.getElementById("loader2").style.display = 'none';
						document.getElementById("scanadvise").innerHTML = "";
					});
	}

	function getMarkersResult3(lat, long) {
		document.getElementById("loader2").style.display = 'block';
		currenttitle = document.getElementById("currenttitle").value;

		var currentlong = document.getElementById("currentlong").value;
		var currentlat = document.getElementById("currentlat").value;

		currentlat = parseFloat(currentlat);
		currentlong = parseFloat(currentlong);

		  	  document.getElementById("scanadvise").innerHTML = "Scanning Marker 3";
				//var scaleserpAPIKey1 = "2760BE634A0D4E04A38C198E39DAFE73";
				var keyword	= document.getElementById("keywordsearch").value;

				var urlsearch = "https://api.scaleserp.com/search?api_key=" + scaleserpAPIKey + "&location=lat:" + lat + ",lon:" + long + ",zoom:13&search_type=places&hl=en&q=" + keyword;
				//var urlsearch = "jollibee.json";
				let myRequest = new Request(urlsearch);
				fetch(myRequest)
					.then(function(resp) {
						return resp.json();
					})
					.then(function(data) {
						var checksameaddress = true;
						var dataitem = "";
						var address = "";
						for(var i = 0; i < data["places_results"].length; i++) {
							dataitem = data["places_results"][i];
							markerresulttitle3.push(dataitem.title); 
							markerresultaddress3.push(dataitem.address);
							if(currenttitle == dataitem.title) {
								document.getElementById("markerresultrank3").value = i + 1;
							}
						}
						document.getElementById("loader2").style.display = 'none';
						document.getElementById("scanadvise").innerHTML = "";
					});
	}

	function getMarkersResult4(lat, long) {
		document.getElementById("loader2").style.display = 'block';
		currenttitle = document.getElementById("currenttitle").value;

		var currentlong = document.getElementById("currentlong").value;
		var currentlat = document.getElementById("currentlat").value;

		currentlat = parseFloat(currentlat);
		currentlong = parseFloat(currentlong);

		  	  document.getElementById("scanadvise").innerHTML = "Scanning Marker 4";
				//var scaleserpAPIKey1 = "2760BE634A0D4E04A38C198E39DAFE73";
				var keyword	= document.getElementById("keywordsearch").value;

				var urlsearch = "https://api.scaleserp.com/search?api_key=" + scaleserpAPIKey + "&location=lat:" + lat + ",lon:" + long + ",zoom:13&search_type=places&hl=en&q=" + keyword;
				//var urlsearch = "jollibee.json";
				let myRequest = new Request(urlsearch);
				fetch(myRequest)
					.then(function(resp) {
						return resp.json();
					})
					.then(function(data) {
						var checksameaddress = true;
						var dataitem = "";
						var address = "";
						for(var i = 0; i < data["places_results"].length; i++) {
							dataitem = data["places_results"][i];
							markerresulttitle4.push(dataitem.title); 
							markerresultaddress4.push(dataitem.address);
							if(currenttitle == dataitem.title) {
								document.getElementById("markerresultrank4").value = i + 1;
							}
						}
						document.getElementById("loader2").style.display = 'none';
						document.getElementById("scanadvise").innerHTML = "";
					});
	}

	function getMarkersResult5(lat, long) {
		document.getElementById("loader2").style.display = 'block';
		currenttitle = document.getElementById("currenttitle").value;

		var currentlong = document.getElementById("currentlong").value;
		var currentlat = document.getElementById("currentlat").value;

		currentlat = parseFloat(currentlat);
		currentlong = parseFloat(currentlong);

		  	  document.getElementById("scanadvise").innerHTML = "Scanning Marker 5";
				//var scaleserpAPIKey1 = "2760BE634A0D4E04A38C198E39DAFE73";
				var keyword	= document.getElementById("keywordsearch").value;

				var urlsearch = "https://api.scaleserp.com/search?api_key=" + scaleserpAPIKey + "&location=lat:" + lat + ",lon:" + long + ",zoom:13&search_type=places&hl=en&q=" + keyword;
				//var urlsearch = "jollibee.json";
				let myRequest = new Request(urlsearch);
				fetch(myRequest)
					.then(function(resp) {
						return resp.json();
					})
					.then(function(data) {
						var checksameaddress = true;
						var dataitem = "";
						var address = "";
						for(var i = 0; i < data["places_results"].length; i++) {
							dataitem = data["places_results"][i];
							markerresulttitle5.push(dataitem.title); 
							markerresultaddress5.push(dataitem.address);
							if(currenttitle == dataitem.title) {
								document.getElementById("markerresultrank5").value = i + 1;
							}
						}
						document.getElementById("loader2").style.display = 'none';
						document.getElementById("scanadvise").innerHTML = "";
					});

	}

	function getMarkersResult6(lat, long) {
		document.getElementById("loader2").style.display = 'block';
		currenttitle = document.getElementById("currenttitle").value;

		var currentlong = document.getElementById("currentlong").value;
		var currentlat = document.getElementById("currentlat").value;

		currentlat = parseFloat(currentlat);
		currentlong = parseFloat(currentlong);

		  	  document.getElementById("scanadvise").innerHTML = "Scanning Marker 6";
				//var scaleserpAPIKey1 = "2760BE634A0D4E04A38C198E39DAFE73";
				var keyword	= document.getElementById("keywordsearch").value;

				var urlsearch = "https://api.scaleserp.com/search?api_key=" + scaleserpAPIKey + "&location=lat:" + lat + ",lon:" + long + ",zoom:13&search_type=places&hl=en&q=" + keyword;
				//var urlsearch = "jollibee.json";
				let myRequest = new Request(urlsearch);
				fetch(myRequest)
					.then(function(resp) {
						return resp.json();
					})
					.then(function(data) {
						var checksameaddress = true;
						var dataitem = "";
						var address = "";
						for(var i = 0; i < data["places_results"].length; i++) {
							dataitem = data["places_results"][i];
							markerresulttitle6.push(dataitem.title); 
							markerresultaddress6.push(dataitem.address);
							if(currenttitle == dataitem.title) {
								document.getElementById("markerresultrank6").value = i + 1;
							}
						}
						document.getElementById("loader2").style.display = 'none';
						document.getElementById("scanadvise").innerHTML = "";
					});
	}

	function getMarkersResult7(lat, long) {
		document.getElementById("loader2").style.display = 'block';
		currenttitle = document.getElementById("currenttitle").value;

		var currentlong = document.getElementById("currentlong").value;
		var currentlat = document.getElementById("currentlat").value;

		currentlat = parseFloat(currentlat);
		currentlong = parseFloat(currentlong);

		  	  document.getElementById("scanadvise").innerHTML = "Scanning Marker 7";
				//var scaleserpAPIKey1 = "2760BE634A0D4E04A38C198E39DAFE73";
				var keyword	= document.getElementById("keywordsearch").value;

				var urlsearch = "https://api.scaleserp.com/search?api_key=" + scaleserpAPIKey + "&location=lat:" + lat + ",lon:" + long + ",zoom:13&search_type=places&hl=en&q=" + keyword;
				//var urlsearch = "jollibee.json";
				let myRequest = new Request(urlsearch);
				fetch(myRequest)
					.then(function(resp) {
						return resp.json();
					})
					.then(function(data) {
						var checksameaddress = true;
						var dataitem = "";
						var address = "";
						for(var i = 0; i < data["places_results"].length; i++) {
							dataitem = data["places_results"][i];
							markerresulttitle7.push(dataitem.title); 
							markerresultaddress7.push(dataitem.address);
							if(currenttitle == dataitem.title) {
								document.getElementById("markerresultrank7").value = i + 1;
							}
						}
						document.getElementById("loader2").style.display = 'none';
						document.getElementById("scanadvise").innerHTML = "";
					});
	}

	function getMarkersResult8(lat, long) {
		document.getElementById("loader2").style.display = 'block';
		currenttitle = document.getElementById("currenttitle").value;

		var currentlong = document.getElementById("currentlong").value;
		var currentlat = document.getElementById("currentlat").value;

		currentlat = parseFloat(currentlat);
		currentlong = parseFloat(currentlong);

		  	  document.getElementById("scanadvise").innerHTML = "Scanning Marker 8";
				//var scaleserpAPIKey1 = "2760BE634A0D4E04A38C198E39DAFE73";
				var keyword	= document.getElementById("keywordsearch").value;

				var urlsearch = "https://api.scaleserp.com/search?api_key=" + scaleserpAPIKey + "&location=lat:" + lat + ",lon:" + long + ",zoom:13&search_type=places&hl=en&q=" + keyword;
				//var urlsearch = "jollibee.json";
				let myRequest = new Request(urlsearch);
				fetch(myRequest)
					.then(function(resp) {
						return resp.json();
					})
					.then(function(data) {
						var checksameaddress = true;
						var dataitem = "";
						var address = "";
						for(var i = 0; i < data["places_results"].length; i++) {
							dataitem = data["places_results"][i];
							markerresulttitle8.push(dataitem.title); 
							markerresultaddress8.push(dataitem.address);
							if(currenttitle == dataitem.title) {
								document.getElementById("markerresultrank8").value = i + 1;
							}
						}
						document.getElementById("loader2").style.display = 'none';
						document.getElementById("scanadvise").innerHTML = "";
					});
	}

	function getMarkersResult9(lat, long) {
		document.getElementById("loader2").style.display = 'block';
		currenttitle = document.getElementById("currenttitle").value;

		var currentlong = document.getElementById("currentlong").value;
		var currentlat = document.getElementById("currentlat").value;

		currentlat = parseFloat(currentlat);
		currentlong = parseFloat(currentlong);

		  	  document.getElementById("scanadvise").innerHTML = "Scanning Marker 9";
				//var scaleserpAPIKey1 = "2760BE634A0D4E04A38C198E39DAFE73";
				var keyword	= document.getElementById("keywordsearch").value;

				var urlsearch = "https://api.scaleserp.com/search?api_key=" + scaleserpAPIKey + "&location=lat:" + lat + ",lon:" + long + ",zoom:13&search_type=places&hl=en&q=" + keyword;
				//var urlsearch = "jollibee.json";
				let myRequest = new Request(urlsearch);
				fetch(myRequest)
					.then(function(resp) {
						return resp.json();
					})
					.then(function(data) {
						var checksameaddress = true;
						var dataitem = "";
						var address = "";
						for(var i = 0; i < data["places_results"].length; i++) {
							dataitem = data["places_results"][i];
							markerresulttitle9.push(dataitem.title); 
							markerresultaddress9.push(dataitem.address);
							if(currenttitle == dataitem.title) {
								document.getElementById("markerresultrank9").value = i + 1;
							}
						}
						document.getElementById("loader2").style.display = 'none';
						document.getElementById("scanadvise").innerHTML = "";
					});
	}

	function getMarkersResult() {
		var currentlong = document.getElementById("currentlong").value;
		var currentlat = document.getElementById("currentlat").value;

		currentlat = parseFloat(currentlat);
		currentlong = parseFloat(currentlong);

		getMarkersResult1(currentlat, currentlong);
		getMarkersResult2(currentlat+0.02, currentlong);
		getMarkersResult3(currentlat-0.02, currentlong);
		getMarkersResult4(currentlat, currentlong+0.02);
		getMarkersResult5(currentlat, currentlong-0.02);
		getMarkersResult6(currentlat+0.02, currentlong-0.02);
		getMarkersResult7(currentlat-0.02, currentlong-0.02);
		getMarkersResult8(currentlat+0.02, currentlong+0.02);
		getMarkersResult9(currentlat-0.02, currentlong+0.02);

		document.getElementById("searchmarkerscan").disabled = true;

		//alert("Done scanning search results!");
		//document.getElementById("loader3").style.display = 'none';
		//doneModal.hide();
		doneModal.show();
		document.getElementById("loader3").style.display = 'block';
		document.getElementById("statusstat").innerHTML = "Scanning...";
		setTimeout(setDown(), 20000);
	}

	function setDown() {
		document.getElementById("loader3").style.display = 'none';
		document.getElementById("statusstat").innerHTML = "Done scanning marker results!";
		document.getElementById("setmarkerresult").style.display = 'block';
	}

	function setMarkers()
	{
		var currentlong = document.getElementById("currentlong").value;
		var currentlat = document.getElementById("currentlat").value;

		currentlat = parseFloat(currentlat);
		currentlong = parseFloat(currentlong);

		document.getElementsByClassName("col-12")[0].innerHTML = "<div id='map'></div>";

		let mapOptions = {
			center: [currentlat, currentlong],
			zoom: 13
		}

		let map = new L.map('map', mapOptions);

		let layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
		map.addLayer(layer);

		console.log(document.getElementById("currenttitle").value);

		var numberIcon1 = L.divIcon({
			className: "number-icon",
			iconSize:     [35, 40],
			html: document.getElementById("markerresultrank1").value       
		});
		let marker = new L.Marker([currentlat, currentlong], {icon: numberIcon1}).on('click', onClick.bind(null, currentlat, currentlong, 1));
		marker.addTo(map);

		var numberIcon2 = L.divIcon({
			className: "number-icon",
			iconSize:     [35, 40],
			html: document.getElementById("markerresultrank2").value      
		});
		let marker2 = new L.Marker([currentlat+0.02, currentlong], {icon: numberIcon2}).on('click', onClick.bind(null, currentlat+0.02, currentlong, 2));
		marker2.addTo(map);

		var numberIcon3 = L.divIcon({
			className: "number-icon",
			iconSize:     [35, 40],
			html: document.getElementById("markerresultrank3").value      
		});
		let marker3 = new L.Marker([currentlat-0.02, currentlong], {icon: numberIcon3}).on('click', onClick.bind(null, currentlat-0.02, currentlong, 3));
		marker3.addTo(map);

		var numberIcon4 = L.divIcon({
			className: "number-icon",
			iconSize:     [35, 40],
			html: document.getElementById("markerresultrank4").value     
		});
		let marker4 = new L.Marker([currentlat, currentlong+0.02], {icon: numberIcon4}).on('click', onClick.bind(null, currentlat, currentlong+0.02, 4));
		marker4.addTo(map);

		var numberIcon5 = L.divIcon({
			className: "number-icon",
			iconSize:     [35, 40],
			html: document.getElementById("markerresultrank5").value    
		});
		let marker5 = new L.Marker([currentlat, currentlong-0.02], {icon: numberIcon5}).on('click', onClick.bind(null, currentlat, currentlong-0.02, 5));
		marker5.addTo(map);

		var numberIcon6 = L.divIcon({
			className: "number-icon",
			iconSize:     [35, 40],
			html: document.getElementById("markerresultrank6").value    
		});
		let marker6 = new L.Marker([currentlat+0.02, currentlong-0.02], {icon: numberIcon6}).on('click', onClick.bind(null, currentlat+0.02, currentlong-0.02, 6));
		marker6.addTo(map);

		var numberIcon7 = L.divIcon({
			className: "number-icon",
			iconSize:     [35, 40],
			html: document.getElementById("markerresultrank7").value    
		});		
		let marker7 = new L.Marker([currentlat-0.02, currentlong-0.02], {icon: numberIcon7}).on('click', onClick.bind(null, currentlat-0.02, currentlong-0.02, 7));
		marker7.addTo(map);

		var numberIcon8 = L.divIcon({
			className: "number-icon",
			iconSize:     [35, 40],
			html: document.getElementById("markerresultrank8").value 
		});
		let marker8 = new L.Marker([currentlat+0.02, currentlong+0.02], {icon: numberIcon8}).on('click', onClick.bind(null, currentlat+0.02, currentlong+0.02, 8));
		marker8.addTo(map);

		var numberIcon9 = L.divIcon({
			className: "number-icon",
			iconSize:     [35, 40],
			html: document.getElementById("markerresultrank9").value    
		});			
		let marker9 = new L.Marker([currentlat-0.02, currentlong+0.02], {icon: numberIcon9}).on('click', onClick.bind(null, currentlat-0.02, currentlong+0.02, 9));
		marker9.addTo(map);

		// FOR YOUR INFORMATION: THIS IS THE MOST SHITTY AND WHAT THE FUCK KIND OF PROJECT SO HAVE IT YOURS AFTER I DID IT!!!
	}
