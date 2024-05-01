let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");
let span = document.getElementById("span");
let input = document.getElementById("search-input");
let listItems= document.querySelectorAll(".dropdown-list-item");


dropdownBtn.onclick = function(){
   // rotate arrow icon
   if(list.classList.contains("show")){
    icon.style.transform = "rotate(0deg)";
  } else {
  icon.style.transform = "rotate(-180deg)";
  }
  list.classList.toggle("show");

};

//hide dropdown when clicked outside
window.onclick = function(e){
  if(
    e.target.id !== "drop-text" &&
    e.target.id !== "span" &&
    e.target.id !== "icon"
  ) {
    list.classList.remove("show");
    icon.style.transform = "rotate(0deg)";
  }
}; 

for(item of listItems){
  item.onclick=function(e){
    span.innerText= e.target.innerText;
  };
}
