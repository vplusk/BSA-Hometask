define(['secondModule'], function(secondModule) {
	var jsOutput = document.getElementById('js-output');
	jsOutput.innerHTML += 'Перший працює!';
	// call secondModule run function
	secondModule.run(jsOutput);
});