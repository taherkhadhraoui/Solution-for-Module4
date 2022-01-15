(function(window){

var bye = {};

var starter = "Good Bye";

bye.speak = function(name) {
  console.log(starter + " " + name);
}

window.bye = bye;

})(window);

