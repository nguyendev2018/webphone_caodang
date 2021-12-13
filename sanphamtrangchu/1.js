document.addEventListener('DOMContentLoaded', function() {
    var trangthai = 'duoi300';
    var doituongmenu = document.querySelector('header');
    console.log(doituongmenu);

    window.addEventListener('scroll', function() {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 500) {
            if (trangthai == 'duoi300') {
                console.log('ok roi');
                trangthai = 'tren300';
                doituongmenu.classList.add('nholai');
            }
        }

    })
})