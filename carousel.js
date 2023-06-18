const carousel = document.querySelector('.carousel');
const image = document.querySelectorAll(".carousel img");

let currentIndex = 0;
image[currentIndex].style.display = 'inline';

const showImage = (index) =>{
    if(index < 0)
    {
        index = image.length - 1;
    }
    else if(index >= image.length)
    {
        index = 0;
    }
    image[currentIndex].style.display = 'none';
    image[index].style.display = 'inline';
    currentIndex = index;
}

const nextImage = () =>{
    showImage(currentIndex + 1);
}
const prevImage = () =>{
    showImage(currentIndex - 1);
}