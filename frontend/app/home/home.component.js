"use strict";

(function() {

    var images = [];
    var overlays = [];

    function init() {

        images = document.getElementsByClassName("imagecontainer");
        overlays = document.getElementsByClassName("imagecontainer__content"); 
    }

    function setHeight() {

        for (var i = images.length; i--;) {

            images[i].style.height = window.innerHeight + "px";
        }
        
        for (var i = overlays.length; i--;) {

            overlays[i].style.height = window.innerHeight + "px";
        }
    }

    init();
    setHeight();
})();