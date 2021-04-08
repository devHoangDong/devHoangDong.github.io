
var i = 0;
var speed = 50;
var isNewline = 'false';
var text1 = "Hello, my name is Hoang Dong|Feel free to take a look at my latest projects on the web portfolio page."
function typeWriter() {
    if (i < text1.length) {
        if (text1.charAt(i) != '|' && isNewline == 'false') {
            document.getElementById('presentText1').innerHTML += text1.charAt(i);}
        else {
            document.getElementById('presentText2').innerHTML += text1.charAt(i+1);
            isNewline = 'true';
        }
        i++;
    }
    setTimeout(typeWriter, speed);
}

	