window.addEventListener("scroll", function(event) { 

    var scroll_y = this.scrollY; 
    var scroll_x = this.scrollX; 
    console.log(scroll_y);
    if (scroll_y > 700) {
        document.getElementById('btn-back').classList.add('opacity-1');
        document.getElementById('btn-back').classList.add('bottom-2');
    } else {
        document.getElementById('btn-back').classList.remove('opacity-1');
        document.getElementById('btn-back').classList.remove('bottom-2');
    }
}); 