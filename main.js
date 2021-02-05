//Make the first item of the menu selected at the beggining and hide the rest of the descriptions
$(".description_item").hide();
$(".menu_item:first").addClass("menu_item_selected");
$(".description_item:first").show();

//apply the underlined class when the option is selected and remove it
console.log($(`.menu_item`));

for (let i = 0; i < $(".menu_item").length; i++) {
  $(`.menu_item:eq(${i})`).on("click", function () {
    $(`.description_item`).hide();

    $(`.menu_item`).removeClass("menu_item_selected color_font");
    $(`.menu_item:eq(${i})`).addClass("menu_item_selected color_font");

    // $(".description_item:visible").addClass("animate__animated animate__backOutRight");
    // $(".description_item:visible").removeClass("animate__animated animate__backOutRight");

    $(`.description_item:eq(${i})`).show();
  });
}
