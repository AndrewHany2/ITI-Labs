$(function () {
  $("#tabs")
    .tabs({
      collapsible: true,
    })
    .removeClass("ui-widget-content");
  $("#header").removeClass("ui-widget-header");
  $("#tabs").removeClass("ui-widget");
  $("#tabs-1, #tabs-2, #tabs-3, #tabs-4").removeClass();
  var index = 1;
  $("img[src='rightarrow.png']").click(function (e) {
    index++;
    if (index === 5) index = 1;
    $("#img").attr("src", "snowman" + index + ".png");
  });
  $("img[src='leftarrow.png']").click(function (e) {
    index--;
    if (index === 0) index = 4;
    $("#img").attr("src", "snowman" + index + ".png");
  });
  function position() {
    $("#tabs-3").position({
      of: $("#header > li:eq(2)"),
      my: "center bottom",
      at: "center top",
      collision: "flip",
    });
  }
  position();
  var name;
  var email;
  var phone;
  var complain;
  $("#name").on("change", function (e) {
    name = $("#name").val();
  });
  $("#email").on("change", function (e) {
    email = $("#email").val();
  });

  $("#phone").on("change", function (e) {
    phone = $("#phone").val();
  });
  $("#complain").on("change", function (e) {
    complain = $("#complain").val();
  });

  $("form").submit(function (e) {
    $("#tabs-4-in").empty();
    $("#tabs-4-in")
      .append(
        "<p style='font-weight:small'>Your complain is  <b>" +
          complain +
          "</b></p>"
      )
      .append(
        "<p style='font-weight:small'>Your name is  <b>" + name + "</b></p>"
      )
      .append(
        "<p style='font-weight:small'>Your email is  <b>" + email + "</b></p>"
      )
      .append(
        "<p style='font-weight:small'>Your phone is  <b>" + phone + "</b></p>"
      )
      .append("<input type='button' value='back to edit' id='back'/>");

    $("#back").click(function (e) {
      $("#tabs-4-in").empty();
      $("#tabs-4-in").append(`<form>
            <div>
              <label for="name">Name</label>
              <input type="text" name="name" id="name" value='${name}'/>
            </div>
            <div>
              <label for="name">Email</label>
              <input type="text" name="email" id="email" value='${email}' />
            </div>
            <div>
              <label for="name">Phone</label>
              <input type="text" name="phone" id="phone" value='${phone}'/>
            </div>
            <div>
              <label for="name">Complain</label>
              <input type="text" name="Complain" id="complain" value='${complain}'/>
            </div>
            <div>
              <input type="submit" value="send" />
            </div>
          </form>`);
    });
  });
});
