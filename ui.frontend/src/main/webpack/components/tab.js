document.addEventListener("DOMContentLoaded", function() {
  var tab = document.querySelector(".tabs");
  console.log("hi");

  console.log({ tab });
  if (tab) {
    var list = tab.querySelector("ol");
    var listTabs = list.querySelectorAll("li");

    console.log({ list, listTabs });
    listTabs.forEach(function(tabitem, i) {
      tabitem.addEventListener("click", function() {
        if (i == listTabs.length - 1) {
          console.log("clicked");
          document.body.style.background = "pink";
        } else {
          document.body.style.background = "white";
        }
      });
    });
  }
});
