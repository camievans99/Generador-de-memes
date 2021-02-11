const imageBtn = document.getElementById ('imageButton'); //Button to open the image configrations menu. 
const textBtn  = document.getElementById('textButton'); // Button to open the text configrations menu
const asideImage = document.getElementById('imageMenu'); // Menu of image configurations.
const asideText = document.getElementById('textMenu'); // Menu of text configurations.


textBtn.addEventListener('click', () =>{
    asideImage.style.display = 'none'
    asideText.style.display= 'block'
});

imageBtn.addEventListener('click',() => {
    asideImage.style.display='block'
    asideText.style.display='none'
});
