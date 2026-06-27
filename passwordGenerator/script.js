document.addEventListener('DOMContentLoaded', ()=>{
    const button = document.querySelector(".passwordGenerator button");
    function shuffleString(str) {
    const arr = str.split('');

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.join('');
}
    button.addEventListener('click', ()=>{
        const checkboxes = document.querySelectorAll('input[type = "checkbox"]')
        let pass = "";
        const len = Math.floor(Math.random() * 3);
        for (let i = 0; i <= len; i ++){
        if (checkboxes[0].checked)
        pass = pass + String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        if (checkboxes[1].checked)
        pass = pass + String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        if (checkboxes[2].checked)
        pass = pass + String(Math.floor(Math.random() * 10))
        const symbols = "@#$%^&*";
        if (checkboxes[3].checked)
        pass  = pass + symbols[Math.floor(Math.random() * symbols.length)];
        }
        pass = shuffleString(pass);
        alert("your password is " + pass);
    })
})