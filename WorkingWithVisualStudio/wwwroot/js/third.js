﻿document.addEventListener("DOMContentLoaded", function () {
    var element = document.createElement("p");
    element.textContent = "This is the element from (modified) third.js file";
    document.querySelector("body").appendChild(element);
})