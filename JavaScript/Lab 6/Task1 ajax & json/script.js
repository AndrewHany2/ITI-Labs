var jsonParsed;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      var json = xhr.responseText;
      jsonParsed = JSON.parse(json);
      for (var key in jsonParsed) {
        if (Object.hasOwnProperty.call(jsonParsed, key)) {
          var bandOption = document.createElement("option");
          bandOption.innerHTML = key;
          document.getElementById("Band").appendChild(bandOption);
        }
      }
      var clicked = false;
      document.getElementById("Band").onchange = function () {
        if (clicked) {
          document.querySelector("#Artist").innerHTML = "";
        }
        clicked = true;
        var elem = this;
        var artistOption;
        var artistOptions = jsonParsed[elem.options[elem.selectedIndex].text];
        artistOptions.forEach((element) => {
          artistOption = document.createElement("option");
          artistOption.innerHTML = element.name;
          artistOption.value = element.value;
          document.getElementById("Artist").appendChild(artistOption);
        });
      };
      document.getElementById("Artist").onchange = function () {
        location.assign(this.options[this.selectedIndex].value);
      };
    }
  }
};
xhr.open("GET", "rockbands.json");
xhr.send("");
