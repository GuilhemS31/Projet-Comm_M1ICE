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

