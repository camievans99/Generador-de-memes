/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////// VARIABLES //////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  HEADER  //////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

const textBtn  = document.getElementById('textButton'); // Button to open the text configurations menu
const imageBtn = document.getElementById ('imageButton'); //Button to open the image configurations menu. 



/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// CANVAS ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const memeTopText= document.getElementById('topText') // top text of the canvas
const meme = document.getElementById('imgPart'); //// Image part of the canvas
const memeBottomText= document.getElementById('bottomText') // bottom text of the canvas

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// IMAGE ASIDE ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const asideImage = document.getElementById('imageMenu'); // Menu of image configurations.
const url = document.getElementById('url') /// url input
const colorForImage = document.getElementById('colorImage') // Input color that changes the color of the image
const valueOfColor = document.getElementById('colorValue') //Span that says the user wich color it´s using in HEX
const imageOptions = document.getElementById('colorImageOptions') // select input that changes the ways the color of the image will act
const brightnessFilter = document.getElementById('brightness'); // Brightness input range
const opacityFilter = document.getElementById('opacity');// opacity input range
const contrastFilter = document.getElementById('contrast');// contrast input range
const blurFilter = document.getElementById('blur');// blur input range
const grayScaleFilter = document.getElementById('grayScale');// grayScale input range
const sepiaaFilter = document.getElementById('sepia');// sepia input range
const hueFilter = document.getElementById('hue');// hue input range
const saturedFilter = document.getElementById('satured');// satured input range
const negativeFilter= document.getElementById('negative');// negative input range
const resetButton = document.getElementById ('resetButton')


//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// TEXT ASIDE ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

const asideText = document.getElementById('textMenu'); // Menu of text configurations.
const topTextArea = document.getElementById('topAreatext'); // textarea for the the top part of the meme
const eraseTopText = document.getElementById('eraseTopText');// input that erase the top text part of the meme








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE ASIDES CHANGE WHEN THE USER CLICKS THE BUTTON ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////
////////// TEXT ASIDE ///////////////
////////////////////////////////////


textBtn.addEventListener('click', () =>{
    asideImage.style.display = 'none';
    asideText.style.display= 'block';
});


///////////////////////////////////
///////// IMAGE ASIDE ////////////
/////////////////////////////////

imageBtn.addEventListener('click',() => {
    asideImage.style.display='block';
    asideText.style.display='none';
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE URL INPUT WORK ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


url.addEventListener('keyup', (e) => {
    meme.style.backgroundImage = `url(${e.target.value})`;
    meme.style.backgroundPosition= 'center';
    meme.style.backgroundRepeat = "no-repeat";
    meme.style.backgroundSize= "cover";
    
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE BACKGROUND COLOR IMAGE CHANGE  ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


colorForImage.addEventListener('input', (e) => {
    meme.style.backgroundColor = `${e.target.value}`;
    valueOfColor.innerText = `${e.target.value}`;
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE SELECT INPUT THAT MAKE THE COLOR IMAGE DARKER OR ANYTHING THE USER WANTS WORK ///
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


imageOptions.addEventListener('change', (e) => {
    const valor = e.target.value;
    if (valor === 'lighten') {
        meme.style.backgroundBlendMode = 'lighten';
    } else if (valor === 'darken') {
        meme.style.backgroundBlendMode = 'darken';
    } else if (valor === 'difference') {
        meme.style.backgroundBlendMode = 'difference';
    } else if (valor === 'luminosity') {
        meme.style.backgroundBlendMode = 'luminosity';
    } else if (valor === 'multiply') {
        meme.style.backgroundBlendMode = 'multiply';
    } else {
        meme.style.backgroundBlendMode = 'normal';
    }
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE FILTERS WORK ////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const filter = () => {
    meme.style.filter = `brightness(${brightnessFilter.value}) opacity(${opacityFilter.value}) contrast(${contrastFilter.value}%) blur(${blurFilter.value}px) grayscale(${grayScaleFilter.value}%) sepia(${sepiaaFilter.value}%) hue-rotate(${hueFilter.value}deg) saturate(${saturedFilter.value}%) invert(${negativeFilter.value})`;
};

brightnessFilter.addEventListener('change', filter);

opacityFilter.addEventListener('change', filter);

contrastFilter.addEventListener('change', filter);

blurFilter.addEventListener('change', filter);

grayScaleFilter.addEventListener('change', filter);

sepiaaFilter.addEventListener('change', filter);

hueFilter.addEventListener('change', filter);

saturedFilter.addEventListener('change', filter);

negativeFilter.addEventListener('change', filter);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE RESET FILTERS BUTTON WORK ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    brightnessFilter.value = 1;
    opacityFilter.value = 1;
    contrastFilter.value = 100;
    blurFilter.value = 0;
    grayScaleFilter.value = 0;
    sepiaaFilter.value = 0;
    hueFilter.value = 0;
    saturedFilter.value = 100;
    negativeFilter.value = 0;
    filter();
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE TEXTAREA WORK SO THE USER CAN WRITE IN THERE /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


topTextArea.addEventListener('keyup', (e) => {
    memeTopText.innerText = e.target.value;
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE TOP TEXT DISSAPEAR ////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

eraseTopText.addEventListener('change', () => {
    if (eraseTopText.checked === true) {
        memeTopText.style.display = 'none';
    } else {
        memeTopText.style.display = 'block';
    }
});