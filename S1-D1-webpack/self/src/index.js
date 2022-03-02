 
 import "./index.css"
 import pic from "./todo-icon-5.jpg"

let body1=document.querySelector("body");
let show=document.createElement("div")
show.className="show"
let main=document.createElement("div")
main.className="mainbox"
let logo=document.createElement("div")
logo.className="logo"
let img=document.createElement("img")
img.src=pic
img.className="img"
let list=document.createElement("div")
list.className="list"
let input=document.createElement("input")
input.id="des"
input.type="text"
let btn=document.createElement("button")
btn.innerText="ADD"
btn.id="btn"

body1.append(main,show)
main.append(logo,list)
logo.append(img)
list.append(input,btn);

document.querySelector("#btn").addEventListener("click",addOn);
let body=document.querySelector(".show")


function addOn(){
    let input=document.querySelector("#des").value;
    
    let h1=document.createElement("h2");
    h1.innerText=input
    body.append(h1);

}