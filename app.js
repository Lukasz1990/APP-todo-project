
//funkcja dodawania tekstu z wartosci po wpisaniu przez użytkownika
var dodaj = document.getElementById('add');



dodaj.addEventListener('click', function () {
var value = document.getElementById('item').value

    if (value) {
    addElem()

    console.log(value)

    } else {alert('Wpisz zadanie!')}
})
//funkcje dodawania/usuwania elementów li
const addElem = function () {


    var value = document.getElementById('item').value
    var li  = document.createElement('li')
    li.innerText = value
    var items = document.querySelector('.items');
    items.appendChild(li);

    var removeTask = items.appendChild(li);





}







//nowe elementy do listy
/*
function addItem (text) {
    var item = document.createElement('li');
    item.innerText = text;
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    var remove = document.createElement('button');
    remove.classList.add('remove');
    var done = document.createElement('button');
    done.classList.add('done');
}*/


function toggleColor() {
    var myButtonClasses = document.getElementById("items").classList;

    if (myButtonClasses.contains("done")) {
        myButtonClasses.remove("done");
    } else {
        myButtonClasses.add("done");
    }
    if (myButtonClasses.contains("red")) {
        myButtonClasses.remove("red");
    } else {
        myButtonClasses.add("red");
    }
}


function addrmvBtn() {

}
