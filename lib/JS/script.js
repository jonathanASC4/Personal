var currentIndex = 0;
setSlide(0);

function setSlide(x) {
    currentIndex = x;
    var slides = document.getElementsByClassName("picture");
    var dots = document.getElementsByClassName("dot");
    
    if (x >= slides.length - 1) {
        document.getElementById("leftP").style.display = "none";
        currentIndex = slides.length - 1;
    } else {
        document.getElementById("leftP").style.display = "inline";
        if (x <= 0) {
            document.getElementById("rightP").style.display = "none";
            currentIndex = 0;
        } else {
            document.getElementById("rightP").style.display = "inline";
        }
    }

    for (var i = 0; i < slides.length; i++) {
        if (i != currentIndex) {
            slides[i].style.display = "none";
            dots[i].style.backgroundColor = "#aaaaaa";
        }
    }

    slides[currentIndex].style.display = "block";
    dots[currentIndex].style.backgroundColor = "#181818";
}

function equals(str, n) {
    return (str.charAt(0) - '0') == n;
}

function updateSlide(x) {
    currentIndex += x;
    setSlide(currentIndex);
}