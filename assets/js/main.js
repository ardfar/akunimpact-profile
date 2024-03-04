$("#side-nav-closure").on("click", () => {
    // Check the screen width
    if ($("#side-nav").hasClass("left-0")) {
        $("#side-nav").removeClass("left-0").addClass("-left-[135px]");
        $("#side-nav-closure-icon").removeClass("rotate-180").addClass("rotate-0");
    } else {
        $("#side-nav").removeClass("-left-[135px]").addClass("left-0");
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


// // FAQ JS -> START

let box = document.querySelectorAll(".box");
  
box.forEach((item , index) => {
  
  let description = item.querySelector(".description");
  let label_box = item.querySelector(".label_box");
  let line1 = item.querySelector(".line1");
  let line2 = item.querySelector(".line2");
  
  description.style.height = "0px";
  label_box.onclick = function(){
  if (description.style.height == "0px") {
    line1.style.rotate = "90deg";
    line2.style.rotate = "0deg";
    description.style.height = description.scrollHeight + 35 + "px";
    // description.style.height = "auto";
    description.style.padding = "12px";
  }else{
    line1.style.rotate = "90deg";
    line2.style.rotate = "90deg";
    description.style.height = "0px";
    description.style.padding = "0px";
  }
}

});

// // FAQ JS -> END