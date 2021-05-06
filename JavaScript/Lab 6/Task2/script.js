var xhr = new XMLHttpRequest();
var response;
var responseParsed;
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      response = xhr.responseText;
      responseParsed = JSON.parse(response);
      responseParsed.data.forEach((element) => {
        var span = document.createElement("tr");
        span.innerHTML = `
        <td>${element.first_name}</td>
        <td>${element.last_name}</td>
        <td>${element.email}</td>`;
        document.querySelector("#table > tbody").appendChild(span);
      });
    }
  }
};

xhr.open("GET", "https://reqres.in/api/users");
xhr.send("");
