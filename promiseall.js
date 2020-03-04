//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// de esta forma si funciona

var urls = [
	  'https://swapi.co/api/people/1',
	  'https://swapi.co/api/people/2',
	  'https://swapi.co/api/people/3',
	  'https://swapi.co/api/people/4'
      ];

var promise=Promise.all(urls.map(url => {
	return fetch(url).then(res=>res.json())
	}))

promise.then(res=>console.log(res))
	.catch(err=> console.log(err))



//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// de esta forma no funciona
// la variable "promises" es un array de Promesas
// no se puede iterar a traves de sus elementos para obtener el resultado.


var urls = [
	  'https://swapi.co/api/people/1',
	  'https://swapi.co/api/people/2',
	  'https://swapi.co/api/people/3',
	  'https://swapi.co/api/people/4'
      ];

var promise=Promise.all(urls.map(url => {
	return fetch(url)
	})).then(array => array.map(elem=>elem.json()))

promise.then(arr2 => arr2.map(elem=>console.log(elem)))
	.catch(err=> console.log(err))








