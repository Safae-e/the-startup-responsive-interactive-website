// let mijnButton = document.querySelector('button')
// let mijnDiv = document.querySelector('div')

// mijnButton.addEventListener('click', function() {
//   mijnDiv.classList.toggle('show-menu')
// })

function myFunction() {
    var filter = document.getElementById("filter");
    if (filter.style.display === "none") {
      filter.style.display = "block";
    } else {
      filter.style.display = "none";
    }
  }

//   let button = document.querySelector('button');
// let navigation = document.querySelector('nav');

// button.addEventListener("click", function(){
//   navigation.classList.toggle('show-menu');
// })

let menuList = document.getElementById("menuList")


function toggleMenu(){
  if (menuList.style.maxHeight == "0px")
  {
    menuList.style.maxHeight = "300px";
  }
  else {
    menuList.style.maxHeight = "0px";
  }
}