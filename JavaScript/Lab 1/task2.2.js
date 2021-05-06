var script = prompt("enter a script");
if (script === "") {
  alert("this is empty script");
} else Panlindrome(script);

function Panlindrome(script) {
  var reverseScript;
  var ignoreCaseSensitive = confirm("do you want to ignore case sensitive");
  if (ignoreCaseSensitive) {
    reverseScript = script.toLowerCase().split("").reverse().join("");
    script = script.toLowerCase();
  } else {
    reverseScript = script.split("").reverse().join("");
  }
  if (script === reverseScript) {
    alert("script is palindrome");
  } else {
    alert("script is not palindrome");
  }
}
