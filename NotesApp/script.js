let textArea = document.getElementById('addTxt');
let addNote = document.getElementById('add-btn');

addNote.addEventListener('click', function(){
    let note = textArea.value;
    localStorage.setItem('note', note);
    console.log(localStorage)
    textArea.value = '';
})