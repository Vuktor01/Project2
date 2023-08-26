let btn = document.querySelector('input[type="button"]');

btn.onclick = preparation;

function randomaizer(min, max, amount, uniq) {
    let rand = [];
    if(min > max || max < 0 || min < 0 || amount < 0) return 'Ошибка! Неверно заданный диапазон';

    if (uniq == true){
        if (amount > max - min) return 'Ошибка! Невозможно сгенерировать заданное количество значений';
        A: for (let i = 0; i < amount;) {
            let number = Math.floor(min + Math.random() * (max - min + 1));
            for(let j = 0; j <= rand.length-1; j++){
                if (number == rand[j]) continue A;
            }
            rand.push(number);
            i++;
        }
    }
    else if(uniq == false){
        for (let i = 0; i < amount; i++) {
            rand.push(Math.floor(min + Math.random() * (max - min + 1)));
        }
    }
    else return 'Неизвестная ошибка! Попробуйте позже!';

    

    return rand;
}

function preparation() {
    let min = +document.querySelector('#min').value;
    let max = +document.querySelector('#max').value;
    let amount = +document.querySelector('#amount').value;
    let result = document.querySelector('.result');
    let uniq = document.querySelector('.checkbox').checked;

    let res = randomaizer(min, max, amount, uniq);
    result.innerText = res;
}