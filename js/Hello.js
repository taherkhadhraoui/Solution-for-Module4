(function(window){

var hello = {};

var starter = "Hello";

hello.speak = function(name) {
  console.log(starter + " " + name);
}

window.hello = hello;

})(window);
