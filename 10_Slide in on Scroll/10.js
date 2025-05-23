function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(){
    sliderImages.forEach(sliderImage=>{

        //half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        
        //bottom of the image : 
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        
        const isHalfShown = slideInAt > sliderImage.offsetTop; 
        
        const isNotScrollPast = window.scrollY < imageBottom;
        
        if(isHalfShown && isNotScrollPast){
            sliderImage.classList.add('active');
        }else{            
            sliderImage.classList.remove('active');
        }
        console.log("Slide At: ",slideInAt);  
        console.log("Image Bottom: ",imageBottom);
        console.log("Half way: ",isHalfShown);
        console.log("No Scroll Past: ",isNotScrollPast);
        
    })
}

window.addEventListener('scroll',debounce(checkSlide))