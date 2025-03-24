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

  function updateCaption(index){
    caption.textContent=images[index].caption
  }

  function updateIndicators(){
    const indicators = carouselNav.children
    Array.from(indicators).forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex)
    })
  }



function initializeCarousel() {

    images.forEach((img,index)=>{
        let slide = document.createElement('div')
        slide.className='carousel-slide'
        slide.style.backgroundImage = 
        slide.style.backgroundImage=`url(${img.url})`
        slide.id=index
        carouselTrack.appendChild(slide)
        
        let indicator = document.createElement('div')
        indicator.className = "carousel-indicator"
        indicator.id=index
        indicator.onclick = ()=>(openSlide(index))
        if(index==currentIndex){
            indicator.classList.add('active')
        }
        carouselNav.appendChild(indicator)
    })
    updateCaption(currentIndex)
}

function openSlide(index){
    currentIndex = index
    updateImage(currentIndex)
    updateCaption(currentIndex)
    updateIndicators()
}


initializeCarousel() 

function incrementCurrentIndex(){
    currentIndex = currentIndex + 1
    if(currentIndex >=images.length){
        currentIndex = 0 
    }
    
    updateImage(currentIndex)
    updateCaption(currentIndex)
    updateIndicators()
}

function decementCurrentIndex(){
    if(currentIndex <=0){
        currentIndex = images.length 
    }
    currentIndex = currentIndex - 1
    updateImage(currentIndex)
    updateCaption(currentIndex)
    updateIndicators()
}

function updateImage(currentIndex){
    const offset = -currentIndex * 100; // Assuming each slide takes full width
    carouselTrack.style.transform = `translateX(${offset}%)`;
}

document.getElementById('nextButton').addEventListener('click',function(event){
    incrementCurrentIndex()
})

document.getElementById('prevButton').addEventListener('click',function(event){
    decementCurrentIndex()
})

let timer;
let maxTime=5;
let remainingTime=5
let isTimerRunning=false
document.getElementById('autoPlayButton').addEventListener('click',function(){

    isTimerRunning = !isTimerRunning
    console.log("isTimerRunning",isTimerRunning)
    if (isTimerRunning){
    autoPlayButton.innerText='Stop Auto Play'
    timer = setInterval(()=>{
        if (remainingTime==0){
            remainingTime=maxTime
            incrementCurrentIndex()
        }
        timerDisplay.innerText=`Next Slide in ${remainingTime}s`
        remainingTime = remainingTime - 1
        
    },1000)
    console.log("timer",timer)
}
if(!isTimerRunning){
    console.log("stopping");
    clearInterval(timer)
    autoPlayButton.innerText='Start Auto Play'
    timerDisplay.innerText=''
}
})