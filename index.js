window.onload = Init
function Init(){
    let displayField = document.getElementById('display')
    displayField.innerHTML = "Let's Play It!"
}

function play(str){
    let displayField = document.getElementById('display')
    displayField.innerHTML = (str)
    let audio = document.getElementById(str)
    audio.play();
}

window.document.onkeyup = function(event){
    let keyStore = event.key.toUpperCase();
    if(("QWEASDZXC").includes(keyStore)){
        play(keyStore)
    }
}