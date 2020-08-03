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

// Name animation
const name=document.querySelector('.name');
const nameText=name.textContent
const nameSplit=nameText.split('')
console.log(nameSplit)

name.textContent=''
for(let i=0;i<nameSplit.length;i++){
    name.innerHTML+=`<span class="nameSpan">${nameSplit[i]}</span>`
}

let nameChar=0;
let nameTimer = setInterval(onTick,50)

function onTick(){
    const nameSpan = name.querySelectorAll('span')[nameChar];
    nameSpan.classList.add('animate')
    nameChar++

    if(nameChar==nameSplit.length){
        complete()
        return;
    }
}

function complete(){
    clearInterval(nameTimer)
    nameTimer=null
}

// THE MY DETAILS IN THE LANDING PAGE SCREEN
function initialSetup() {
    if (document.getElementById("nameDetail") != null) {
      setTimeout(function() {
        document.getElementById('nameDetail').style.display = 'block';
      }, 2000);
    }
  }
  
  initialSetup();