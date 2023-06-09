(_ => {
    chrome.webRequest.onBeforeSendHeaders.addListener(
        details => {
            for (let i = 0; i < details.requestHeaders.length; ++i) {
                if (details.requestHeaders[i].name === 'User-Agent') {
					var val = details.requestHeaders[i]
					if (val.value.includes("Mobile")) {
						// Mobile
						val.value = 'Mozilla/5.0 (Linux; Android 10; HD1913) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.5563.116 Mobile Safari/537.36 EdgA/110.0.1587.66';
					} else {
						// Other
						val.value = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54';
					} 
                }
            }
            return {
                requestHeaders: details.requestHeaders
            };
        },
        {
            urls: ["https://*.bing.com/*"]
        },
        ["blocking", "requestHeaders"]
    );
})();

chrome.webNavigation.onCompleted.addListener(function(details) {
  if(details.url.indexOf('bing.com') != -1) {
	var Mode = localStorage.getItem('Mode');
	var Len = localStorage.getItem('Len');
	var pan = localStorage.getItem('pan');

	if (Len != null) {
	  chrome.tabs.executeScript(details.tabId, {
        code: `Value = setInterval(function() {
  var n = 0
  try{
	var firstElement = document.querySelector(".cib-serp-main").shadowRoot;
	var secondElement = firstElement.querySelector("#cib-action-bar-main").shadowRoot;
	var textArea = secondElement.querySelector("textarea");
	textArea.maxLength = ${Len};
	n = 1
	}catch(e){}
  if (n != 0) { clearInterval(Value) }
}, 200);`
      });
	}
	
	if (Mode == '1') {
	  chrome.tabs.executeScript(details.tabId, {
        code: `var script = document.createElement('script'); script.src = 'https://happydm09.github.io/Page/test/dark.js';document.body.appendChild(script);`
      });
	} else {
		chrome.tabs.executeScript(details.tabId, {
        code: `var script = document.createElement('script'); script.src = 'https://happydm09.github.io/Page/test/light.js';document.body.appendChild(script);`
      });
	}
	
	if (pan == '1') {
	  chrome.tabs.executeScript(details.tabId, {
        code: `var script = document.createElement('script'); script.src = 'https://happydm09.github.io/Page/test/hide.js';document.body.appendChild(script);`
      });
	} else {
		chrome.tabs.executeScript(details.tabId, {
        code: `var script = document.createElement('script'); script.src = 'https://happydm09.github.io/Page/test/show.js';document.body.appendChild(script);`
      });
	}
  }
});
