var name = prompt("enter your name");
while (
  name === "null" ||
  !name ||
  !name.match(/^[a-z]/) ||
  name.length !== name.match(/[a-z]/gi).length
) {
  alert("this is not valid name");
  name = prompt("enter your name");
}
var phoneNumber = prompt("enter your phone number");
while (
  phoneNumber === "null" ||
  !phoneNumber ||
  isNaN(Number(phoneNumber)) ||
  phoneNumber.length !== 8
) {
  alert("this is not valid phone number");
  phoneNumber = prompt("enter your phone number");
}
var mobileNumber = prompt("enter your mobile number");
while (
  mobileNumber === "null" ||
  !mobileNumber ||
  isNaN(Number(mobileNumber)) ||
  mobileNumber.length !== 11 ||
  !mobileNumber.match(/^012|010|011/)
) {
  alert("this is not valid phone number");
  mobileNumber = prompt("enter your mobile number");
}
var email = prompt("enter you email");
while (email === "null" || !email || !email.match(/\S+@\S+\.\S+/)) {
  alert("this is not valid phone number");
  email = prompt("enter your email");
}

var fontColor = prompt(
  "enter font color: 1) red 2) blue 3) green"
).toLowerCase();

var date = new Date();
var dateString = date.toDateString();
switch (fontColor) {
  case "1":
  case "red":
    style = "color:red";
    document.write(
      "<p style=" +
        style +
        ">Welcome dear guest " +
        '<span style="color:black">' +
        name +
        "</span>" +
        "</p>"
    );
    document.write(
      "<p style=" +
        style +
        ">your telephone number is  " +
        '<span style="color:black">' +
        phoneNumber +
        "</span>" +
        "</p>"
    );
    document.write(
      "<p style=" +
        style +
        ">your mobile number is " +
        '<span style="color:black">' +
        mobileNumber +
        "</span>" +
        "</p>"
    );
    document.write(
      "<p style=" +
        style +
        ">your email address is " +
        '<span style="color:black">' +
        email +
        "</span>" +
        "</p>"
    );
    document.write(
      "<p style=" +
        style +
        ">today is " +
        '<span style="color:black">' +
        dateString +
        "</span>" +
        "</p>"
    );
    break;
  case "2":
  case "blue":
    style = "color:blue";
    document.write(
      "<p style=" +
        style +
        ">Welcome dear guest " +
        '<span style="color:black">' +
        name +
        "</span>" +
        "</p>"
    );
    document.write(
      "<p style=" +
        style +
        ">your telephone number is  " +
        '<span style="color:black">' +
        phoneNumber +
        "</span>" +
        "</p>"
    );
    document.write(
      "<p style=" +
        style +
        ">your mobile number is " +
        '<span style="color:black">' +
        mobileNumber +
        "</span>" +
        "</p>"
    );
    document.write(
      "<p style=" +
        style +
        ">your email address is " +
        '<span style="color:black">' +
        email +
        "</span>" +
        "</p>"
    );
    document.write(
      "<p style=" +
        style +
        ">today is " +
        '<span style="color:black">' +
        dateString +
        "</span>" +
        "</p>"
    );
    break;
  case "3":
  case "green":
    style = "color:green";
    document.write(
      "<p style=" +
        style +
        ">Welcome dear guest " +
        '<span style="color:black">' +
        name +
        "</span>" +
        "</p>"
    );
    document.write(
      "<p style=" +
        style +
        ">your telephone number is  " +
        '<span style="color:black">' +
        phoneNumber +
        "</span>" +
        "</p>"
    );
    document.write(
      "<p style=" +
        style +
        ">your mobile number is " +
        '<span style="color:black">' +
        mobileNumber +
        "</span>" +
        "</p>"
    );
    document.write(
      "<p style=" +
        style +
        ">your email address is " +
        '<span style="color:black">' +
        email +
        "</span>" +
        "</p>"
    );
    document.write(
      "<p style=" +
        style +
        ">today is " +
        '<span style="color:black">' +
        dateString +
        "</span>" +
        "</p>"
    );
    break;

  default:
    break;
}
