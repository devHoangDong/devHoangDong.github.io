// typewriter

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
// filter button
myFilter('all');
function myFilter(n) {
    let j;
    var x = document.getElementsByClassName('project');
    if (n == 'all') n = '';
    for (j = 0;j < x.length; j++) {
        removeClass(x[j], 'show');
        if (x[j].className.indexOf(n) > -1) {
            addClass(x[j], 'show');
        }
    }
}
function removeClass(element, name) {
    let j;
    var arr1 = element.className.split(' ');
    var arr2 = name.split(' ');
    for (j=0;j<arr2.length;j++) {
        while (arr1.indexOf(arr2[j]) > -1) {
            arr1.splice(arr1.indexOf(arr2[j]),1);
        };
    }
    element.className= arr1.join(' ');
}
function addClass(element, name) {
    let j;
    var arr1 = element.className.split(' ');
    var arr2 = name.split(' ');
    for (j=0;j<arr2.length;j++) {
        if (arr1.indexOf(arr2[j]) == -1) {
            element.className += ' ' + arr2[j];
        };
    }
}
// show active button

var btnContainer = document.getElementById("mybtn");
var btns = btnContainer.getElementsByClassName("btn");
console.log(btns);
for (let j = 0; j < btns.length; j++) {
  btns[j].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
	