var response = prompt("enter your message");
if (response) {
  for (i = 1; i <= 6; i++) {
    document.write("<h" + i + ">" + response + " " + i + "</h" + i + ">");
  }
} else {
  alert("you  haven't entered any message");
}
