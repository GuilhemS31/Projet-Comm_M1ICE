function SwapDivsWithClick(div1, div2)
{

	d1 = document.getElementById(div1);
	d2 = document.getElementById(div2);
	
	d1.style.display = "none";
	d2.style.display = "block";

	console.log("test");
	
	const data = myJson();
	console.log(data);
	
	const depart = findCase("34.05")
	console.log(depart);
	
}

function findCase(id){
	const datas = myJson()
	const test =null ;

	var test2 = datas.forEach(elem => {
		//console.log(elem.idcase);
		
		if (elem.idcase == id){
			console.log("id",id);
			console.log("elem",elem);
			
			test = elem;
		};
		return test;

	});
	console.log(test2);
	return test2;
	
}
