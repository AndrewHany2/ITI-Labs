//1
$("div:nth-child(2) span").css("color", "red");
//2
$("div .myclass").css("color", "blue");
//3
$("div[class=myclass]").css("color", "cyan");
//4
$("#first li:first").css("color", "red");
$("#first li:nth-child(4)").css("color", "blue");
$("#first li:last").css("color", "brown");
//5
$("#nav > li:nth-child(1) > a").css("color", "red");
$("#nav > li:nth-child(2) > a").css("color", "red");
//6
$("#div1").children().not("h2").css("color", "red");
//7
$("#second li:gt(2)").css("color", "blue");
//8
$("tr:even").css("background-color", "red");
$("tr:odd").css("background-color", "blue");
//9
$(
    "#form1 > div:nth-child(6) > ul > li:nth-child(1),#form1 > div:nth-child(6) > ul > li:nth-child(4),#form1 > div:nth-child(6) > ul > li:nth-child(5),#form1 > div:nth-child(6) > span:nth-child(2),#form1 > div:nth-child(6) > span:nth-child(3),#form1 > div:nth-child(6) > span:nth-child(5),#form1 > div:nth-child(6) > span:nth-child(6) > a,#form1 > div:nth-child(6) > a,#form1 > div:nth-child(6) > div:nth-child(10) > a"
).css("color", "red");