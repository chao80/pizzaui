/*         ______________________________________
  ________|                                      |_______
  \       |           PizzaUI WebApp          |      /
   \      |      Copyright © none             |     /
   /      |______________________________________|     \
  /__________)                                (_________\

*/

define(function(require, exports, module) {

	$('button').click(function() {
		alert('Hello world ! ')
	})
	
	var a = require('util');
	alert(a.md5("1"));

});