var letterCount;
var script = prompt('enter a script to count "e" ');
var ignoreCaseSensitive = confirm("do you want to ignore case sensitive");
ignoreCaseSensitive
  ? (letterCount = script.match(/e/gim).length)
  : (letterCount = script.match(/e/gm).length);
alert(letterCount);
