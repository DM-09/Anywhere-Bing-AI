Hide = setInterval(function() {
  var n = 0
  try{
	var firstElement = document.querySelector(".cib-serp-main").shadowRoot;
	var panel = firstElement.querySelector("cib-side-panel");
	panel.setAttribute('style', 'display: none')
	n = 1
	}catch(e){}
  if (n != 0) { clearInterval(Hide) }
}, 200);
