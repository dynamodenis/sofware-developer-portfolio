// AJAX REQUEST
$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault()
        form=$('form')
        $.ajax({
            'url':'/ajax/inquiry/',
            'type':'POST',
            'data':form.serialize(),
            'dataType':'json',
            'success':function(data){
                Swal.fire(
                    '',
                    data['success'],
                    'success'
                  )
            }
        })//End of ajax function
        $('#id_your_name').val('')
        $('#id_your_email').val('')
        $('#id_subject').val('')
        $('#id_your_message').val('')

    }) //End of submit event
})

// ----------------------------------------------------------PROJECT DETAIL MODAL-----------------------------------

// get image id
var image=document.getElementsByClassName('image');
// get the modal
var modal=document.getElementById('modal');
// get model conetent
var modalContent=document.getElementById('modalContent')
// close
var close=document.getElementById('close')

// image click event

for(i=0;i<image.length;i++){
    var description=document.getElementById('description')

    image.item(i).onclick=function(){
        modal.style.display='block';
        description.innerHTML=this.alt;
        console.log(123)
    }
}

close.addEventListener('click',closeModal);

function closeModal(){
    modal.style.display='none'
}

// click outside window to close

window.addEventListener('click',clickOutside);

function clickOutside(e){
    if(e.target==modal){
        modal.style.display='none'
    }
}

// --------------------------------------------------------WELCOME ANIMATION ON THE LANDING BACKGROUND IMAGE----------------------------------

// // Welcome animation

const text=document.querySelector('.fancy');
const strText=text.textContent
const splitText=strText.split('')

text.textContent=''
for(let i=0;i<splitText.length;i++){
    text.innerHTML+=`<span>${splitText[i]}</span>`
}

let char=0;
let timing = setInterval(onTick,50)

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('animate')
    char++

    if(char==splitText.length){
        complete()
        return;
    }
}

function complete(){
    clearInterval(timing)
    timing=null
}


//THE MY DETAILS IN THE LANDING PAGE SCREEN
function initialSetup() {
    setTimeout(function() {
     document.getElementById('nameDetail').style.display = 'block';
    }, 500);
  }
  
initialSetup();



// ----------------------------------------------TYPEWRITER--------------------------------------------------------

// THIS IS THE CONSTRUCTOR FOR THE TYPEWRITER

const TypeWriter= function(txtElement,words,wait=300){
    this.txtElement=txtElement;
    this.words=words;
    this.txt='';
    this.wordIndex=0;
    this.type();
    this.wait=parseInt(wait,10);
    this.isDeleting=false;
}

// Type method type()
TypeWriter.prototype.type = function(){
    // current word
    const current = this.wordIndex % this.words.length
    const fullText = this.words[current]
   
    // check if deleting
    if(this.isDeleting){
        // Delete string
        this.txt = fullText.substring(0,this.txt.length-1)
    }else{
        // Add string
        this.txt = fullText.substring(0,this.txt.length+1)
    }

    // Dispaly name in the DOM
    this.txtElement.innerHTML=`<span class='my-name'>${this.txt}</span>`

    // set the deletng time to faster
    let typeSpeed=300;
    if(this.isDeleting){
        typeSpeed /=2;
    }

    if(!this.isDeleting && this.txt == fullText){
        typeSpeed=this.wait;
        this.isDeleting=true;
    }else if(this.isDeleting && this.txt == ''){
        // set is deleting to false
        this.isDeleting=false

        // chage to the next word
        this.wordIndex ++;

        // wait for a half second then start typing
        typeSpeed=500;
    }


    setTimeout(()=>this.type(),typeSpeed)
}


// Init The DOM Load

document.addEventListener('DOMContentLoaded', init);
// init function
function init(){
    const txtElement=document.querySelector('.text-name');
    const words= JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement,words,wait)

}

// -------------------------------------------------------SKILLS-----------------------------------------

// const html = document.querySelector('.bar-html')
// const css = document.querySelector('.bar-css')
// const javascript = document.querySelector('.bar-javascript')
// const react = document.querySelector('.bar-react')
// const angular = document.querySelector('.bar-angular')
// const django = document.querySelector('.bar-django')
// const flask = document.querySelector('.bar-flask')

// var tl = new TimelineLite();
// //let tl=new TimelineMax();

// tl.fromTo(html,1,{width:`calc(0%-6px)`},{width:`calc(90%-6px)`, ease:Linear.easeNone})
//     .fromTo(css,.75,{width:`calc(0%-6px)`},{width:`calc(80%-6px)`, ease:Power4.easeOut} )
//     .fromTo(javascript,.75,{width:`calc(0%-6px)`},{width:`calc(87%-6px)`, ease:Power4.easeOut} )
//     .fromTo(react,.75,{width:`calc(0%-6px)`},{width:`calc(70%-6px)`, ease:Power4.easeOut} )
//     .fromTo(angular,.75,{width:`calc(0%-6px)`},{width:`calc(70%-6px)`, ease:Power4.easeOut} )
//     .fromTo(django,.75,{width:`calc(0%-6px)`},{width:`calc(90%-6px)`, ease:Power4.easeOut} )
//     .fromTo(flask,.75,{width:`calc(0%-6px)`},{width:`calc(70%-6px)`, ease:Power4.easeOut} )


// const controller = new ScrollMagic.Controller()
// const scene = new ScrollMagic.Scene({
//     triggerElement:'.skills',
//     triggerHook:0
// })
// .setTween(tl)
// .addTo(controller)
