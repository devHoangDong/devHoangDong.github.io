
var i = 0;
var speed = 50;
var text1 = "Hello, my name is Hoang Dong ! Feel free to take a look at my latest projects on the web portfolio page."
function typeWriter() {
    if (i < text1.length) {
        document.getElementById('presentText1').innerHTML += text1.charAt(i);
        i++;
    }
    setTimeout(typeWriter, speed);

}
