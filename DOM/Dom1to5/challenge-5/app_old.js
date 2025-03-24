/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];
let currentIndex=0

let carouselTrack = document.getElementById('carouselTrack')
let caption = document.getElementById('caption')
let carouselNav = document.getElementById('carouselNav')
let timerDisplay = document.getElementById('timerDisplay');
let autoPlayButton = document.getElementById('autoPlayButton');

function updateCaption(){
  caption.textContent=images[currentIndex].caption
}

function updatePage(currentIndex){
  console.log(currentIndex)
  
  let slide=document.querySelector(`.carousel-slide`)
  if(slide!=null){
    slide.remove();
  }
  
  const fragment = document.createDocumentFragment();
  const img = fragment.appendChild(document.createElement("img"))
  img.classList.add('carousel-slide')
  img.setAttribute('src',images[currentIndex].url)




  carouselTrack.appendChild(fragment)


  while (carouselNav.firstChild) {
    carouselNav.removeChild(carouselNav.firstChild);
  }
  for (let i=0;i<images.length;i++){
    let indicator = document.createElement('div')
    indicator.classList.add('carousel-indicator')
    indicator.id=i
    if(i==currentIndex){
      indicator.classList.add('active')
    }
    carouselNav.appendChild(indicator)
  }

}

document.getElementById('carousel').addEventListener('click',function(event){
  if(event.target.id=='nextButton'){
    currentIndex = currentIndex + 1
    if (currentIndex>=images.length){
      currentIndex=0
    }
  }else if (event.target.id='prevButton'){
    currentIndex=currentIndex-1
    if (currentIndex<0){
      currentIndex=images.length-1
    }

  }

  updatePage(currentIndex)

})

window.addEventListener('load', function() {
  updatePage(currentIndex);
});


let istimerRunning = false; // Track autoplay state
let interval; // Declare interval globally 
document.getElementById('autoPlayButton').addEventListener('click', function () {
  console.log("button clicked");


  let timeCount = 5;
  let maxTimeCount = 5;

  // Toggle autoplay state
  istimerRunning = !istimerRunning;

  if (istimerRunning) {
      autoPlayButton.textContent = "Stop Auto Play";

      interval = setInterval(() => {
          if (timeCount === 0) {
            currentIndex += 1;
            if (currentIndex>=images.length){
              currentIndex=0
            }
               // Move to the next slide
              timeCount = maxTimeCount; // Reset countdown
              updatePage(currentIndex);
          }
          timerDisplay.textContent = `Next Slide in ${timeCount}s`;
          timeCount--;
      }, 1000);
  } else {
      autoPlayButton.textContent = "Start Auto Play";
      clearInterval(interval); // Stop the interval
      timerDisplay.textContent = ''; // Clear timer text
  }
});

document.getElementById('carouselNav').addEventListener('click',function(event){
  console.log(event.target.id)
 
  if(event.target.id!='carouselNav'){
    currentIndex=Number(event.target.id)
    updatePage(currentIndex)
  }
})

