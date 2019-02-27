function SwapDivsWithClick(div1, div2)
{

	d1 = document.getElementById(div1);
	d2 = document.getElementById(div2);
	
	d1.style.display = "none";
	d2.style.display = "block";

	console.log("test");
	
	const data = myJson();
	console.log(data);
	
}

function UpdateCurrentLocation(tdID){
	var childDivs = document.getElementById('map').getElementsByTagName('td');

	for( i=0; i< childDivs.length; i++ ){
		var childDiv = childDivs[i];
		childDiv.style.backgroundColor  = "transparent";
	}	
	SetTileAsCurrentLocation(tdID);
}

function SetTileAsCurrentLocation(tdID){
	
	console.log("Hello");
	
	td = document.getElementById(tdID);
	color = td.style.backgroundColor ;
	if (color === "red"){
        td.style.backgroundColor  = "transparent";
	}
    else {
		console.log("Me red");
        td.style.backgroundColor  = "red";
	}
}