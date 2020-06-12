// get image id
var image=document.getElementById('image');
// get the modal
var modal=document.getElementById('modal');
// get model conetent
var modalContent=document.getElementById('modalContent')
// close
var close=document.getElementById('close')

// image click event
image.addEventListener('click', openModal);

function openModal(){
    modal.style.display='block';
}

// close modal
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


// section animation
 // MDB Lightbox Init
 $(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

// Adding animations to the sections
$("section").addClass("wow fadeIn");

// Animations Init
new WOW().init();