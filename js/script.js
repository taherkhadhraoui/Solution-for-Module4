(function(){
  var names = ["Yaakov", "Ali", "Jean", "Safa", "Laura", "Dalel", "Josef"];

for (let i = 0; i < names.length-1; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter == 'j') {
    bye.speak(names[i]);
  } else {
    hello.speak(names[i]);
  }
}
})();

