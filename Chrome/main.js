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

window.onload = function(){
    var el = document.getElementById('mode')
	var get = localStorage.getItem('Mode');
	
	if (get == 1) {
		el.setAttribute('class', 'bi bi-moon-stars')
	} else {
		el.setAttribute('class', 'bi bi-sun')
	}
}
