const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("MnavBar");


const navLink = Array.from(document.getElementsByClassName("navLink"));

for(let i = 0; i < navLink.length; i++){
    navLink[i].addEventListener("click" , function(){
        mobileMenu.style.right = "-750px";
    });
}

    mobileMenu.style.right = "-750px";

    burger.onclick = function(){

        if(mobileMenu.style.right === "-750px"){
            mobileMenu.style.right = "0";
        }
        else{
            mobileMenu.style.right = "-750px";
        }

    }
