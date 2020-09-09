var index = 0;

show(index);

function show(n) {
    var imgs = document.getElementsByClassName('mySlides');

    if (n > imgs.length - 1) {
        index = 0;
    }

    if (n < 0) {
        index = imgs.length - 1;
    }

    for (var i = 0; i <= imgs.length - 1; i++) {
        imgs[i].style.display = "none";
    }

    imgs[index].style.display = "block";
}

function automatic() {
    index++;
    show(index);
    setTimeout(automatic, 2500);
}

automatic();

function change(n) {
    index += n;
    show(index);
}