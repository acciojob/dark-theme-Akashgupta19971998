//your code here
let button=document.getElementById('swap');
let body=document.getElementsByTagName('body')
let main=document.getElementById("app")

function swap(){
    //body.style.backgroundcolor="dark";
    document.body.style.backgroundColor = "dark";
    button.setAttribute("class", "button_night")
    main.setAttribute("class","night")

    //console.log("hi")
}

