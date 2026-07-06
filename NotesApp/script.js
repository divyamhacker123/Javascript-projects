let textArea = document.getElementById('addTxt');
let addNote = document.getElementById('add-btn');

let id = localStorage.length + 1;
addNote.addEventListener('click', function(){
    let note = textArea.value;
    localStorage.setItem(`note${id}`, note);
    id++;
    console.log(localStorage)
    textArea.value = '';
})

let showTxt = document.getElementById('showTxt')
let showNote = document.getElementById('show-btn')
showNote.addEventListener('click', ()=>{
    let noteId = showTxt.value;
    if (isNaN(Number(noteId))) {
        showTxt.value = 'Please Enter valid Key'
        return ;
    }
    let note = localStorage.getItem(`note${noteId}`);
    showTxt.value = `your Searched Note is : ${note}`;
})