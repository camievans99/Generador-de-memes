/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////// VARIABLES //////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const body =document.getElementById ('body')
const download = document.getElementById ('downloadBtn')


//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  HEADER  //////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

const textBtn  = document.getElementById('textButton'); // Button to open the text configurations menu
const imageBtn = document.getElementById ('imageButton'); //Button to open the image configurations menu. 
const lightBtn = document.getElementById('lightButton') //Button for change to light mode
const darkBtn = document. getElementById ('darkButton') // button for change to dark mode



/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// CANVAS ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const canvas = document.getElementById('canvas')
const memeTopText= document.getElementById('topText'); // top text of the canvas
const meme = document.getElementById('imgPart'); //// Image part of the canvas
const memeBottomText= document.getElementById('bottomText'); // bottom text of the canvas

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// IMAGE ASIDE ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const asideImage = document.getElementById('imageMenu'); // Menu of image configurations.
const url = document.getElementById('url'); /// url input
const colorForImage = document.getElementById('colorImage'); // Input color that changes the color of the image
const valueOfColor = document.getElementById('colorValue'); //Span that says the user wich color it´s using in HEX
const imageOptions = document.getElementById('colorImageOptions');// select input that changes the ways the color of the image will act
const brightnessFilter = document.getElementById('brightness'); // Brightness input range
const opacityFilter = document.getElementById('opacity');// opacity input range
const contrastFilter = document.getElementById('contrast');// contrast input range
const blurFilter = document.getElementById('blur');// blur input range
const grayScaleFilter = document.getElementById('grayScale');// grayScale input range
const sepiaaFilter = document.getElementById('sepia');// sepia input range
const hueFilter = document.getElementById('hue');// hue input range
const saturedFilter = document.getElementById('satured');// satured input range
const negativeFilter= document.getElementById('negative');// negative input range
const resetButton = document.getElementById ('resetButton');// reset filters button


//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// TEXT ASIDE ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

const asideText = document.getElementById('textMenu'); // Menu of text configurations.
const topTextArea = document.getElementById('topAreatext'); // textarea for the the top part of the meme
const eraseTopText = document.getElementById('eraseTopText');// input that erase the top text part of the meme
const BottomtextArea= document.getElementById('bottomAreatext');// textarea for the bottom part of the meme
const eraseBottomText = document.getElementById('eraseBottomText'); // input that erase the bottom text part of the meme
const fontSelection = document.getElementById ('fontSelector'); // select tag tha allows to change the font selection
const fontSize = document.getElementById('fontSize'); //Input to change the size of the meme fonts
const alignLeft= document.getElementById('alignLeft');// button that align the text to the left
const alignCenter=document.getElementById('alignCenter');// center the text of the meme
const alignRight= document.getElementById('alignRight') //Button that aligns text to the right
const fontColor =document.getElementById('fontColor')// Input to change the color of the text 
const fontColorValue= document.getElementById('fontColorValue') // Name of the text color
const textBackColor =document.getElementById('backFontColor')// Input to change the text part of the meme
const backColorValue = document.getElementById('backColorValue') // Name of the background color
const transparentBack =document.getElementById('transparentBack') //input for making the background of our text transparent
const noContour = document.getElementById('noContour') // Button for taking off the contour of the text
const lightContour = document.getElementById('lightContour') // Button for adding white contour to the text
const darkContour = document.getElementById ('darkContour') // button for Adding black contour to the text
const fontSpacing =document.getElementById ('fontSpacing') // Button for the spacing of the text 
const intFont = document.getElementById('intFont') // button for the line spacing of the text





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
////////////////////   MAKING THE TOP TEXTAREA WORK SO THE USER CAN WRITE IN THERE /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


topTextArea.addEventListener('keydown', (e) => {
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE BOTTOM TEXTAREA WORK SO THE USER CAN WRITE IN THERE /////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


BottomtextArea.addEventListener('keydown',(e) => {
    memeBottomText.innerText= e.target.value;
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE BOTTOM TEXT DISSAPEAR ////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


eraseBottomText.addEventListener('change',()=> {
    if(eraseBottomText.checked === true){
        memeBottomText.style.display= 'none'
    } else {
        memeBottomText.style.display= 'block'
    }
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE FONT SELECTION WORK ////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

fontSelection.addEventListener('change', (e) => {
    const fontValue = e.target.value;
    if (fontValue === 'bella-years') {
        memeTopText.style.fontFamily = `bella-years`;
        memeBottomText.style.fontFamily = `bella-years`;
    } else if (fontValue === 'cosmith-sans') {
        memeTopText.style.fontFamily = `cosmith-sans`;
        memeBottomText.style.fontFamily = `cosmith-sans`;
    } else if (fontValue === 'how-dare-you') {
        memeTopText.style.fontFamily = `how-dare-you`;
        memeBottomText.style.fontFamily = `how-dare-you`;
    } else if (fontValue === 'pastika-demo') {
        memeTopText.style.fontFamily = `pastika-demo`;
        memeBottomText.style.fontFamily = `pastika-demo`;
    } else if (fontValue === 'macho-weaak') {
        memeTopText.style.fontFamily = `macho-weak`;
        memeBottomText.style.fontFamily = `macho-weak`;
    } else if (fontValue === 'mellow-yellow') {
        memeTopText.style.fontFamily = `mellow-yellow`;
        memeBottomText.style.fontFamily = `mellow-yellow`;
    } else if (fontValue === 'murky') {
        memeTopText.style.fontFamily = `murky`;
        memeBottomText.style.fontFamily = `murky`;
    } else if(fontValue=== 'sweet-cherry'){
        memeTopText.style.fontFamily='sweet-chery'
        memeBottomText.style.fontFamily='sweet-chery'
    }
      else {
        memeTopText.style.fontFamily = `pastika-demo`;
        memeBottomText.style.fontFamily = `pastika-demo`;
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE FONT SIZE WORK ////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

fontSize.addEventListener('change', (e) => {
    memeTopText.style.fontSize = `${e.target.value}px`;
    memeBottomText.style.fontSize = `${e.target.value}px`;
});




///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE TEXTALIGN LEFT WORK////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

alignLeft.addEventListener('click', () => {
    memeTopText.style.textAlign = 'left';
    memeBottomText.style.textAlign = 'left';
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE TEXTALIGN CENTER WORK////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////



alignCenter.addEventListener('click', () => {
    memeTopText.style.textAlign='center';
    memeBottomText.style.textAlign='center'
})



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE TEXTALIGN RIGHT WORK////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


alignRight.addEventListener('click', () => {
    memeTopText.style.textAlign= 'right'
    memeBottomText.style.textAlign='right'
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE CHANGE OF THE COLOR OF THE FONT WORK////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


fontColor.addEventListener('input', (e) => {
    memeTopText.style.color = e.target.value;
    memeBottomText.style.color = e.target.value;
    fontColorValue.innerText = `${e.target.value}`;
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE BACKGROUND COLOR OF THE TEXT WORK////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

textBackColor.addEventListener('input', (e) => {
    memeTopText.style.backgroundColor = e.target.value;
    memeBottomText.style.backgroundColor = e.target.value;
    backColorValue.innerText = `${e.target.value}`;
});



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE TRANSPARENT BACKGROUND COLOR OF THE TEXT WORK//////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

transparentBack.addEventListener('change', () => {
    if (transparentBack.checked) {
        memeTopText.style.backgroundColor = 'transparent';
        memeTopText.style.zIndex='2'
        memeBottomText.style.backgroundColor = 'transparent';
        memeBottomText.style.marginTop='-23px'
        
    } else {
        memeTopText.style.backgroundColor = 'black';
        memeBottomText.style.backgroundColor = 'black';
    }
})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE CONTOUR COLOR OF THE TEXT WORK//////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

noContour.addEventListener('click', (e) => {
    e.preventDefault();
    memeTopText.classList.remove('light-contour');
    memeTopText.classList.remove('dark-contour');
    memeBottomText.classList.remove('light-contour');
    memeBottomText.classList.remove('dark-contour');
});


lightContour.addEventListener('click',(e)=> {
    e.preventDefault();
    memeTopText.classList.add('light-contour')
    memeBottomText.classList.add('light-contour')
    memeTopText.classList.remove('dark-contour')
    memeBottomText.classList.remove('dark-contour')
})

darkContour.addEventListener('click',(e)=> {
    e.preventDefault();
    memeTopText.classList.add('dark-contour')
    memeBottomText.classList.add('dark-contour')
    memeTopText.classList.remove('light-contour')
    memeBottomText.classList.remove('light-contour')
})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE FONT SPACING  OF THE TEXT WORK//////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

fontSpacing.addEventListener('change', (e) => {
    memeTopText.style.padding = `${e.target.value}px 15px`;
    memeBottomText.style.padding = `${e.target.value}px 15px`;
    memeBottomText.style.marginTop = '0';
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE LINE SPACING  OF THE TEXT WORK//////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


intFont.addEventListener('change', (e) => {
    memeTopText.style.lineHeight = `${e.target.value}`;
    memeBottomText.style.lineHeight = `${e.target.value}`;
    memeBottomText.style.marginTop = '0';
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE DOWNLOAD BUTTON WORK//////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const downloadImage = () => {
    domtoimage.toBlob(canvas)
        .then(function (blob) {
            saveAs(blob, 'my-meme.png')
        })
}


download.addEventListener('click', () => {
    downloadImage()
   
})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////   MAKING THE DARKMODE WORK//////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////



darkBtn.addEventListener( 'click', (e)  => {
    if (darkBtn.checked === true){
        darkBtn.style.display='none';
        lightBtn.style.display='inline';
    }
    
    

    
})

lightBtn.addEventListener( 'click', ()  => {
    lightBtn.style.display='none';
    darkBtn.style.display='inline';
    body.classList.toggle=('darkmode')
    
   
    

})





