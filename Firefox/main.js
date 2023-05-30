document.getElementById('Go').addEventListener('click', function() {
  chrome.tabs.create({
        url: 'https://bing.com/chat',
    })
});

document.getElementById('mode').addEventListener('click', function() {
	var el = document.getElementById('mode')
	var get = localStorage.getItem('Mode');
	if (get == 1) {
	  el.setAttribute('class', 'bi bi-sun')
	  chrome.tabs.executeScript({
        code: `var script = document.createElement('script'); script.src = 'https://happydm09.github.io/Page/test/light.js';document.body.appendChild(script);`
      });
	  localStorage.setItem('Mode', '0');
	} else {
	 el.setAttribute('class', 'bi bi-moon-stars')
     chrome.tabs.executeScript({
        code: `var script = document.createElement('script'); script.src = 'https://happydm09.github.io/Page/test/dark.js';document.body.appendChild(script);`
     });
	 localStorage.setItem('Mode', '1');
	}
});

document.getElementById('len').addEventListener('click', function() {
	var get = localStorage.getItem('Len');
	var inp = prompt('Enter the max lenght. 최대 길이를 입력하세요.', get);
	localStorage.setItem('Len', inp);
});

var ver = '1.0.5'
let gets;

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://happydm09.github.io/Page/test/abi_ver.json', true);
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
  const re = xhr.response;
  gets = re.ver
	console.log(gets)
	if (ver != gets) {
		document.getElementById('update').setAttribute('class', 'bi bi-arrow-up-circle')
	}
}

document.getElementById('update').addEventListener('click', function() {
	  chrome.tabs.create({
        url: 'https://addons.mozilla.org/en-US/firefox/addon/anywhere-bing-ai/'	
    })
});

window.onload = function(){
    var el = document.getElementById('mode')
	var get = localStorage.getItem('Mode');
	
	if (get == 1) {
		el.setAttribute('class', 'bi bi-moon-stars')
	} else {
		el.setAttribute('class', 'bi bi-sun')
	}
}
