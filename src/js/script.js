let divOne    = document.querySelector('.one');
let buttonOne = document.querySelector('.buttonOne');
let divTwo    = document.querySelector('.two');
let btn1 = document.querySelector('.show1');
let btn2 = document.querySelector('.show2');
let btn3 = document.querySelector('.show3');



buttonOne.addEventListener('click', function() {
	let promise = fetch('https://my-json-server.typicode.com/Kate2111/JS_ajax/countries'); 
	
	promise
        .then(function(response) {
            for(let [key, value] of response.headers) {
                console.log(key, value)
            }
            if(response.status === 200) {
                return response.json();
            } else {
                throw new Error(`<img src="../img/error.jpg">`)
            }
        })
        .then(function(arr) {
                let html = '';

                for(let i = 0; i < arr.length; i++) {
                    html += `
                        <p>Название: ${arr[i].title}</p>
                    `
                } 

                divOne.innerHTML = html;
            }
        )
        .catch(function(error) {
                divOne.innerHTML = error;
            }
        )
      
});

btn1.addEventListener('click', function() {
	fetch('/page/ajax1.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			divTwo.innerHTML = text;
		}
	);
});

btn2.addEventListener('click', function() {
	fetch('/page/ajax2.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			divTwo.innerHTML = text;
		}
	);
});

btn3.addEventListener('click', function() {
	fetch('/page/ajax3.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			divTwo.innerHTML = text;
		}
	);
});

