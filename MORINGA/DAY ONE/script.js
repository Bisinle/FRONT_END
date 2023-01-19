const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc164faca3mshbefe8154ada2227p172dcdjsnfd76487844e7',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));