
let listContainers = ['home', 'about', 'skills', 'contact'];
let temp = -1;

let container = {};

let listHeight = {};

listContainers.forEach(contain => {
    container[contain] = document.getElementById(contain);
    let obj = {
        first: ++temp,
        end: container[contain].clientHeight + temp
    }
    listHeight[contain] = obj;
    temp = listHeight[contain].end;
});

window.addEventListener("scroll", function(event) { 
    
    var scroll_y = this.scrollY;
    var scroll_x = this.scrollX;
    
    if (scroll_y > window.innerHeight * (70/100)) {
        document.getElementById('btn-back').classList.add('opacity-1');
        document.getElementById('btn-back').classList.add('bottom-2');
    } else {
        document.getElementById('btn-back').classList.remove('opacity-1');
        document.getElementById('btn-back').classList.remove('bottom-2');
    }
    

    listContainers.forEach(contain => {
        if (scroll_y >= listHeight[contain].first - window.innerHeight * (15/100) && scroll_y <= listHeight[contain].end - window.innerHeight * (15/100)) {
            listContainers.forEach(element => {
                if (element != contain) {
                    document.getElementById('mn-' + element).classList.remove('select');
                    document.getElementById('mn-' + contain).classList.add('select');
                }
            })
        }
    });
});

