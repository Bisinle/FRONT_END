const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc164faca3mshbefe8154ada2227p172dcdjsnfd76487844e7',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options)
	.then(response => response.json())
	.then((response) =>{
		Object.values(response).forEach(arr =>{
			//console.log(arr);
			for(key in arr){
				console.log(arr[key])
			}
		})
	})


	.catch(err => console.error(err));


/*

	const studname = (fname, lname)=>{
		console.log(fname);
		console.log(lname)
		
	}


	function studname(fname,lname){
		console.log(fname);
		console.log(lname)


	}

	const studname=function(fnamem,lname) {
		console.log(fname);
		console.log(lname);
		
	}*/