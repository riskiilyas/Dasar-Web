const n = document.querySelectorAll(".drum").length

for(let i=0; i<n; i++) {
    const btn = document.querySelectorAll('.drum')[i];
    btn.addEventListener("click", () => {
        clicked(btn)

        switch (i) {
            case 0:
                new Audio("sounds/crash.mp3").play();
                break;
            case 1:
                new Audio("sounds/kick-bass.mp3").play();
                break;
            case 2:
                new Audio("sounds/snare.mp3").play();
                break;
            case 3:
                new Audio("sounds/tom-1.mp3").play();
                break;
            case 4:
                new Audio("sounds/tom-2.mp3").play();
                break;
            case 5:
                new Audio("sounds/tom-3.mp3").play();
                break;
            case 6:
                new Audio("sounds/tom-4.mp3").play();
                break;
        }
    })

    btn.addEventListener('keypress', (event) => {
        switch (event.code) {
            case 'KeyW':
                clicked(get(0))
                new Audio("sounds/crash.mp3").play();
                break;
            case 'KeyA':
                clicked(get(1))
                new Audio("sounds/kick-bass.mp3").play();
                break;
            case 'KeyS':
                clicked(get(2))
                new Audio("sounds/snare.mp3").play();
                break;
            case 'KeyD':
                clicked(get(3))
                new Audio("sounds/tom-1.mp3").play();
                break;
            case 'KeyJ':
                clicked(get(4))
                new Audio("sounds/tom-2.mp3").play();
                break;
            case 'KeyK':
                clicked(get(5))
                new Audio("sounds/tom-3.mp3").play();
                break;
            case 'KeyL':
                clicked(get(6))
                new Audio("sounds/tom-4.mp3").play();
                break;
        }
    })
}

function get(i) {
    return document.querySelectorAll('.drum')[i]
}

function clicked(element) {
    element.classList.add('pressed')

    setTimeout( () => {
        element.classList.remove('pressed')
    }, 100)
}