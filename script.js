var button = document.getElementById('submit');
var input = document.getElementById('input');

button.addEventListener('click', function submit(){
    var inputValue = input.value;
    document.write(`Hello, ${inputValue}!`);
    var back = document.createElement('button');
    back.innerHTML = "Go back";
    document.body.appendChild(back);
})

input.addEventListener('keyup', function(e){
    var event = e.keyCode;
    if (event == 13){
        var inputValue = input.value;
        document.write(`Hello, ${inputValue}!`);
        let back = document.createElement('button');
        back.innerHTML = "back";
        back.style.paddingLeft = "3px";
        document.body.appendChild(back);
    }
}
