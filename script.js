let input = document.querySelector("input")
let ul = document.querySelector("ul")
input.onkeypress = function () {
  if (event.keyCode === 13) {
    let li = document.createElement("li")
    let img = document.createElement("img")
    let span = document.createElement("span")
    img.setAttribute("src", "icons/garbage.svg")
    span.innerHTML = input.value
    li.appendChild(img)
    li.appendChild(span)
    ul.appendChild(li)
    input.value = ""
  }
}
ul.onclick = function(){
  let target = event.target
  console.log(target)
  if (target.tagName === "LI" || target.tagName === "SPAN"){
    target.classList.toggle("checked")
  }
  else if (target.tagName === "IMG"){
    target.parentElement.remove()
  }
}

document.querySelector(".clear").onclick = function(){
  ul.innerHTML = ""
}

document.querySelector(".finish").onclick = function(){
  let listItems = ul.querySelectorAll("li")
  for (let i = 0; i < listItems.length; i++){
    listItems[i].classList.add("checked")
  }
}








