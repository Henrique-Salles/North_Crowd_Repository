let header = document.querySelector(".HeaderClass")

    window.onscroll = function(){
        let top = window.scrollY;
        console.log(top)
    
        if (top >= 100){
            header.classList.add('active');
        } else {
            header.classList.remove('active');
    
        }
    
    }