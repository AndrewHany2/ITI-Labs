function getCookie(cookieName) {
  result = allCookieList();
  for (var key in result) {
    if (cookieName === key) {
      return result[key];
    }
  }
}
function setCookie(cookieName, cookieValue, expiryDate) {
  document.cookie = `${cookieName}=${cookieValue};expires=${expiryDate}`;
}
function deleteCookie(cookieName) {
  var cookies = allCookieList();
  for (var key in cookies) {
    if (cookieName === key) {
      document.cookie = key + ";expires=10-10-2020";
    }
  }
}
function allCookieList() {
  var assoiativeCookie = [];
  var splitCookie = document.cookie.split(";");
  for (var index = 0; index < splitCookie.length; index++) {
    assoiativeCookie[splitCookie[index].split("=")[0].trim()] = splitCookie[
      index
    ].split("=")[1];
  }
  return assoiativeCookie;
}

function hasCookie(cookieName) {
  var cookies = allCookieList();
  for (var key in cookies) {
    if (cookieName === key) {
      return true;
    }
  }
  return false;
}

function buttonClicked() {
  var gender;
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var male = document.getElementById("male").checked;
  var female = document.getElementById("female").checked;
  male ? (gender = "male") : null;
  female ? (gender = "female") : null;
  var index = document.getElementById("colors").selectedIndex;
  var color = document.getElementById("colors").options[index].value;
  var txt = document.getElementById("colors").options[index].text;
  var date = new Date();
  setCookie("visitCount", 0, date.getDate());
  date.setMonth(date.getMonth() + 3);
  setCookie("name", name, date);
  setCookie("age", age, date);
  setCookie("gender", gender, date);
  setCookie("color", color, date);
  location.replace("profile.html");
}

function displayInfo() {
  date = new Date();
  var count = getCookie("visitCount");
  count++;
  setCookie("visitCount", count, date.getDate());
  var gender = getCookie("gender");
  var name = getCookie("name");
  var color = getCookie("color");
  gender === "male"
    ? (document.images[0].src = "1.jpg")
    : (document.images[0].src = "2.jpg");
  document.getElementById(
    "data"
  ).innerHTML = `<span style='font:20px bold'>Welcome,</span><span style='color:${color}'> ${name}</span> you have visited this site <span style='color:${color}'> ${count}</span>${
    count === 1 ? " time" : " times"
  }:)`;
}
