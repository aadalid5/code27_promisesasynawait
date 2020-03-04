// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// -----------------------------
// 1. promise- fetch 1 url 
// -----------------------------
var url = 'https://jsonplaceholder.typicode.com/users';
var promise = fetch(url)
                .then(response => response.json());
    
promise.then(result => console.log('1. ',result))    
       .catch(err=> alert(err));

console.log("variable promise: ", promise)
// -----------------------------
// 2. promise- fetch arrays de urls
// -----------------------------
var urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
    ];
var promise = Promise.all(urls.map( url =>{
                return fetch(url).then(response => response.json())
                }));
promise.then(array => console.log('2.', array ))
       .catch(err=>alert(err))

console.log("variable promiseAll: ", promise)

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// -----------------------------
// 3. async await- fetch 1 url 
// -----------------------------

var url = 'https://jsonplaceholder.typicode.com/users';

const myfunct = async()=>{
    var response = await fetch(url);
    var result = await response.json();

    console.log('4.\n', result);
}

myfunct()
console.log("myfunction async")

// -----------------------------
// 4. async await- fetch arrays de urls
// -----------------------------
var urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
    ];

const myarrayfunct = async() =>{
    try{
        var responseArray = await Promise.all(urls.map(async (url)=>{
            //return fetch(url).then(response => response.json());
            var aux = await fetch(url);
            var aux2 = await aux.json();
            return aux2
        }));

        responseArray.forEach(elem =>{
            console.log(elem)
        });
    }
    catch(err){
        console.log("ooppps ", err)
    }        
}

myarrayfunct();
console.log("array function...");
