var text = document.getElementsByClassName('typing');
console.log();


var res = text[0].innerText.split("");
text[0].innerHTML = "";
var div = document.createElement('span');
var cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(div);
document.body.appendChild(cursor);

var i = 0;
var interval = setInterval(function () {
    var string = res[i];
    if (string == undefined) {
        clearInterval(interval)
        var twingkile = setInterval(function () {
            if (cursor.classList.value == 'cursor') {
                cursor.classList.remove('cursor');
            } else {
                cursor.classList.add('cursor');
            }
        }, 500)
    } else {
        clearInterval(twingkile)
        typing(string);
        ++i;
    }
}, 100);


function typing(string) {
    div.innerHTML += string;
}