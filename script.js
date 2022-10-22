const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("MnavBar");

    mobileMenu.style.right = "-750px";

    burger.onclick = function(){

        if(mobileMenu.style.right === "-750px"){
            mobileMenu.style.right = "0";
        }
        else{
            mobileMenu.style.right = "-750px";
        }

    }