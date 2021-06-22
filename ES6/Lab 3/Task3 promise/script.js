function req(url) {
  var myPromise = new Promise(function (success, failure) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send("");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(xhr.response);
        } else {
          failure(error);
        }
      }
    };
  });
  return myPromise;
}
req("https://reqres.in/api/users")
  .then((response) => {
    let responseParsed = JSON.parse(response);
    createTable(responseParsed.data);
  })
  .catch((error) => {
    throw new Error(error);
  });

function createTable(table) {
  document.getElementById("result").innerHTML = `
      <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">email</th>
              <th scope="col">first name</th>
              <th scope="col">last name</th>
              <th scope="col">avatar</th>
            </tr>
          </thead>
          <tbody id="rows">

          </tbody>
        </table>`;
  table.forEach((element) => {
    var temp = document.createElement("tr");
    temp.innerHTML = `   
      <th scope="row">${element.id}</th>
      <td>${element.email}</td>
      <td>${element.first_name}</td>
      <td>${element.last_name}</td>
      <td>${element.avatar}</td>
      `;
    document.getElementById("rows").appendChild(temp);
  });
}
