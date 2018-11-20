const actions = document.getElementById('actions');
const output = document.getElementById('output');

const render = drawing1 => {
    output.innerHTML = drawing1
};

// const clear = () => {
//     output.innerHTML = '';
// };

const triangle = () => {
    let drawing = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < i; j++) {
            drawing += '*';
        }
        drawing += '<br />';
    }

    render(drawing);
};

const piramid = () => {
    let drawing = '';
    for (let i = 0; i < 10; i++) {
        //tarpas
        for (let x = 0; x < 10 - i; x++) {
            drawing += '&nbsp;'; // none breaking space
        }

        //zvaigzdutes
        for (let j = 0; j < i * 2 + 1; j++) {
            drawing += '*';
            // for (let j = 0; j < i; j++) { antras variantas su tarpu prie zvaigzdutes
            //     drawing += '* ';
            // }
        }
        drawing += '<br />';
    }

    render(drawing);
};

const reversePiramid = () => {
    let drawing = '';
    for (let i = 10; i >= 0; i--) {
        //tarpas
        for (let x = 0; x < 10 - i; x++) {
            drawing += '&nbsp;'; // none breaking space
        }

        //zvaigzdutes
        for (let j = 0; j < i * 2 + 1; j++) {
            drawing += '*';
            // for (let j = 0; j < i; j++) { antras variantas su tarpu prie zvaigzdutes
            //     drawing += '* ';
            // }
        }
        drawing += '<br />';
    }

    render(drawing);
};



actions.addEventListener('click', event => {
    // if (event.target.tagId === "BUTTON") {
    const action = event.target.id; //susikurus mygtuka ir pridejus addEventListeneri ir //paspaudus consolei ismeta parametrus ir ieskome target ir ji uzrasome const action = //event.target.id, jai priskyrem per id, jai per name tai galune bus name;

    switch (action) {
        case 'triangle':
            triangle();
            break;
        case 'piramid':
            piramid();
            break;
        case 'reverse-piramid':
            reversePiramid();
            break;
        case 'clear':
            render('');
            break;
        default:
            render('');
    }
});