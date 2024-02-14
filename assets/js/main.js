$("#side-nav-closure").on("click", () => {
    // Check the screen width
    if ($("#side-nav").hasClass("left-0")) {
        $("#side-nav").removeClass("left-0").addClass("-left-[155px]");
        $("#side-nav-closure-icon").removeClass("rotate-180").addClass("rotate-0");
    } else {
        $("#side-nav").removeClass("-left-[155px]").addClass("left-0");
        $("#side-nav-closure-icon").removeClass("rotate-0").addClass("rotate-180");
    }
});

$("#full-nav-closure").on("click", () => {

    if ($("#full-nav").hasClass("left-0")) {
        $("#full-nav").removeClass("left-0").addClass("-left-full");
        $("#full-nav-closure-icon").removeClass("rotate-180").addClass("rotate-0");
        $("#full-nav-closure").removeClass("-right-[4px]").addClass("-right-[38px]");
        $("#full-nav-closure").removeClass("bg-[#30657a]").addClass("bg-[#4086A2]");
    } else {
        $("#full-nav").removeClass("-left-full").addClass("left-0");
        $("#full-nav-closure-icon").removeClass("rotate-0").addClass("rotate-180");
        $("#full-nav-closure").removeClass("-right-[38px]").addClass("-right-[4px]");
        $("#full-nav-closure").removeClass("bg-[#4086A2]").addClass("bg-[#30657a]");
    }
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {

    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 

    var chevron = $(this).children("span").eq(1)

    if (chevron.hasClass("rotate-0")){
        chevron.removeClass("rotate-0").addClass("rotate-180")
    } else {
        chevron.removeClass("rotate-180").addClass("rotate-0")

    }
  });
}