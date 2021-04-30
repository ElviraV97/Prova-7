function Change() {
    let input = document.querySelector(".input");
    let button = document.querySelector(".button");

    button.disabled = ""; 

    for (let i = 0; i < input.length; i++) {
        if (input[i].value === "") {
            button.disabled = false;
            break;
        }
    }
}

