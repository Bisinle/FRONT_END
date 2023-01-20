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
		let data1=""
		Object.values(response.results).forEach((item) => {
			let src;
			if(item.primaryImage === null){
				src = "https://i.goojara.to/mb_228_228497.jpg"
			}
			else{
				src = item.primaryImage.url
			}
			data1 += `<div class="card" style="border:#f0094d" >
			<img src="${src}" class="card-img-top" alt="...">
			<div class="card-body">
				<p class="card-text">${item.titleText.text}</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
		
			 
			</div>
		</div>`
		})
			document.getElementById('card-container').innerHTML= data1
			
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