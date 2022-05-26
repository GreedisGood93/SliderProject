let images = document.querySelectorAll(".slider img");
let initialLeft = 0;
window.addEventListener("load", function(){   
    for (let i = 0; i < images.length - 1; i++) {
        let image = images[i];
        image.style.left = initialLeft + "px";
        let width = getComputedStyle(image).width;
        initialLeft += parseFloat(width)
    }

    let lastImage = images[images.length - 1];
    lastImage.style.left =  -parseFloat(getComputedStyle(lastImage).width) + "px";
    console.log(initialLeft);
})

let prevButton = document.querySelector(".prev"),
    nextButton = document.querySelector(".next"),
    prevButtonActive = true, nextButtonActive = true;
prevButton.addEventListener("click", function(){
    if (prevButtonActive) {
        prevButtonActive = false;
        for (let image of images) {
            image.style.left = (parseFloat(image.style.left) - 500) 
            + "px";
            if (parseFloat(image.style.left) < -500) {
                image.style.zIndex = -1;
                image.style.left = (images.length - 2) * 500 + "px";
                setTimeout(()=> {
                    image.style.zIndex = 1;
                    prevButtonActive = true;
                }, 500);
            }
        }
    }
})

nextButton.addEventListener("click", function(){
    if (nextButtonActive) {
        nextButtonActive = false;
        for (let i = 0; i < images.length; i++) {
            let image = images[i];        
            image.style.left = (parseFloat(image.style.left) + 500) 
            + "px";        
            if (parseFloat(image.style.left) > (images.length - 2) * 500) {
                image.style.zIndex = -1;
                image.style.left = "-500px";
                setTimeout(()=> {
                    image.style.zIndex = 1;
                    nextButtonActive = true;
                }, 500);
            }
        }
    }
})