Dark = setInterval(function() {
  var cibSerp = document.getElementsByTagName("cib-serp");
  var n = 0
  for (let i = 0; i < cibSerp.length; i++) {
    cibSerp[i].design.colorScheme=1;
    cibSerp[i].alignment="center";
	  n = 1
  }
  if (n != 0) { clearInterval(Dark) }
}, 200);

// https://github.com/happydm09/Page/blob/main/test/dark.js
