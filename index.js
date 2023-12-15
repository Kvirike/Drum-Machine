document.addEventListener('DOMContentLoaded', () => {
    const switchBtn = document.getElementById('switch');
    const drumBtns = document.querySelectorAll('.drum-pad');
    const displayField = document.getElementById('display');

    function setInitialState() {
        displayField.innerHTML = "Let's Play It!";
        switchBtn.innerHTML = "On";
        switchBtn.className = "btn btn-outline-success fw-bolder";
        drumBtns.forEach(button => button.disabled = true);
    }

    function toggleOnOff() {
        const isActive = switchBtn.classList.contains('btn-outline-success');

        drumBtns.forEach(button => button.disabled = !isActive);
        switchBtn.className = isActive ? "btn btn-outline-danger fw-bolder" : "btn btn-outline-success fw-bolder";
        switchBtn.innerHTML = isActive ? "Off" :"On";
    }

    setInitialState();
    switchBtn.addEventListener('click', toggleOnOff);
});

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