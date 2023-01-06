let string = '';
let val;

let input = document.querySelector('.input');
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText === 'C') {
            string = '';
            input.value = string;
        } else if (e.target.innerText === '←') {
            string = string.slice(0, -1);
            input.value = string;
        } else if (e.target.innerText === '=') {
            try {
                val = eval(string);
                console.log(string);
                console.log(val);
            } catch (err) {
                input.value = 'error';
            }
            input.value = String(val);
            string = String(val);
        } else {
            string += e.target.innerText;
            input.value = string;
        }
    });
});
