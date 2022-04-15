// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   })
// })



let slider = [
  "https://source.unsplash.com/78A265wPiO4",
  "https://source.unsplash.com/eOpewngf68w",
  "https://source.unsplash.com/ndN00KmbJ1c"
]

let img = document.querySelector('#img');
let currenslide = 0;
img.src = slider[currenslide];


let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click',function(e){
  currenslide++;
  if(currenslide == slider.length){
    currenslide = 0;
  } 
  img.src = slider[currenslide];
})


prev.addEventListener('click',function(e){
  currenslide--;
  if(currenslide == -1){
    currenslide = slider.length - 1;
  }
  img.src = slider[currenslide];
})



