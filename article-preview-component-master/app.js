const btn = document.querySelector(".button");
const share =  document.querySelector(".icon")
console.log(btn);
btn.addEventListener('click', function(){
    if(share.classList.contains("icon")){
        share.className = "icon-active";
    }else {
        share.className = "icon"
    }
  

})