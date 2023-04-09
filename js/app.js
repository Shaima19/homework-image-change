// *IMAGE HOVER
let image = document.querySelector('img')


function toggleImage() {
    image.src = "./image/image2.jpg"
} 

image.addEventListener("mouseenter", toggleImage)
 function prevImage() {
    image.src = "./image/image1.jpg"
 }
 image.addEventListener("mouseout", prevImage)