// Your code goes here
//random color generator (global scope)
let randomRGB = '#' + Math.floor(Math.random()*16777215).toString(16);

//changes main-navigation to a random color when your mouse enters it and changes it back to white when you leave
let funheader = document.querySelector('main-navigation');
//mouse enter
funheader.addEventListener('mouseenter', function(){
    funheader.style.backgroundColor = randomRGB;
});
//mouse leave
funheader.addEventListener('mouseleave', function(){
    funheader.style.backgroundColor = '';
})


//When the key 'y' is pressed down it add a solid yellow border to the intro img of fun bus
let midImg = document.querySelector('.intro img');
//key down
window.addEventListener('keydown', function(event){
    if (event.isComposing || event.keyCode === 89){
        midImg.style.border = '4px solid yellow';
    }
})
//key up
window.addEventListener('keyup', function(){
    midImg.style.border = '';
})

//zooms in and out of the intro img when pointing at the element
function zoom(event) {
    //prevents default size
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restricts scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Applies scale transform
    midImg.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  midImg.onwheel = zoom;


//changes the background color of the content-section when you focus and blur 
  let funbody = document.querySelector('content-section')
//focus
  funbody.addEventListener('focus', function(){
      funbody.style.backgroundColor = '#F7DC6F';
  })
//blur
  funbody.addEventListener('blur', function(){
      funbody.style.backgroundColor = '';
  })


//changes text color of button when clicked
let destinationbtn = document.querySelector('.destination .btn')

destinationbtn.addEventListener('click', function(){
    destinationbtn.style.color = randomRGB;
})


//
let cntDest = document.querySelector('.content-destination img')

cntDest.addEventListener('dbclick', function(){
    cntDest.style.border = '4px dashed #A3E4D7';
})
