function getCookie(cookieName) {
  if (arguments.length === 0) {
    throw Error("Not enough arguments");
  }
  if (arguments.length > 1) {
    throw Error("More than one arguments");
  }
  result = allCookieList();
  for (var key in result) {
    if (cookieName === key) {
      return result[key];
    }
  }
}
function setCookie(cookieName, cookieValue, expiryDate) {
  if (arguments.length === 0) {
    throw Error("Not enough arguments");
  }
  if (arguments.length > 3) {
    throw Error("More than three arguments");
  }
  document.cookie = `${cookieName}=${cookieValue};expires=${expiryDate}`;
}
function deleteCookie(cookieName) {
  if (arguments.length === 0) {
    throw Error("Not enough arguments");
  }
  if (arguments.length > 1) {
    throw Error("More than one arguments");
  }
  var cookies = allCookieList();
  for (var key in cookies) {
    if (cookieName === key) {
      document.cookie = key + ";expires=10-10-2020";
    }
  }
}
function allCookieList() {
  if (arguments.length > 0) {
    throw Error("This function take no arguments");
  }
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
  if (arguments.length === 0) {
    throw Error("Not enough arguments");
  }
  if (arguments.length > 1) {
    throw Error("More than one arguments");
  }
  var cookies = allCookieList();
  for (var key in cookies) {
    if (cookieName === key) {
      return true;
    }
  }
  return false;
}
