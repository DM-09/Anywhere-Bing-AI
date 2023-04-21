document.getElementById('Go').addEventListener('click', function() {
  browser.tabs.create({
        url: 'https://bing.com/chat',
    })
});

document.getElementById('Dark').addEventListener('click', function() {
   browser.tabs.executeScript({
        code: `var script = document.createElement('script'); script.src = 'https://happydm09.github.io/Page/test/dark.js';document.body.appendChild(script);`
    });
	localStorage.setItem('Mode', '1');
});

document.getElementById('Light').addEventListener('click', function() {
   browser.tabs.executeScript({
        code: `var script = document.createElement('script'); script.src = 'https://happydm09.github.io/Page/test/light.js';document.body.appendChild(script);`
    });
	localStorage.setItem('Mode', '0');
});
