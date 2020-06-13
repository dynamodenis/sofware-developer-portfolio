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


