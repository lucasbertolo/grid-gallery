// Get the modal
var modal = document.getElementById('myModal');
let modalImg = document.getElementById('modal-content')

// Get the button that opens the modal
var item = document.querySelectorAll("img");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

Array.from(item).forEach(link => {
    link.addEventListener('click', function(event) {
        modal.style.display = "block";
        modalImg.style.background = `url(${link.src}) no-repeat center center fixed`;
       	modalImg.style.backgroundSize = 'cover';
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}