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

const meme = document.getElementById('imgPart'); //// MEDIO DE MI CANVAS

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// IMAGE ASIDE ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const asideImage = document.getElementById('imageMenu'); // Menu of image configurations.
const url = document.getElementById('url') /// url input
const colorForImage = document.getElementById('colorImage') // Input color that changes the color of the image
const valueOfColor = document.getElementById('colorValue') //Span that says the user wich color it´s using in HEX
const imageOptions = document.getElementById('colorImageOptions') // select input that changes the ways the color of the image will act


//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// TEXT ASIDE ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

const asideText = document.getElementById('textMenu'); // Menu of text configurations.








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








