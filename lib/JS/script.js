setSlide(0);

function setSlide(x) {
    var slides = document.getElementsByClassName("picture");
    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i < slides.length; i++) {
        if (i != x) {
            slides[i].style.display = "none";
            dots[i].style.backgroundColor = "#aaaaaa";
        }
    }

    slides[x].style.display = "block";
    dots[x].style.backgroundColor = "#181818";
}

function equals(str, n) {
    return (str.charAt(0) - '0') == n;
}