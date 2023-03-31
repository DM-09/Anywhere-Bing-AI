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
