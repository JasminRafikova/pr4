"use strict"

function numbers() {
    let a = +prompt('Введите первое число');
    let b = +prompt('Введите второе число');
    if (a < b) {
        for (let i = a; i <= b; i++) {
            if (i % 2 === 0) {
                alert(i);
            }
        }
    } else {
        alert('Первое число должно быть меньше второго');
    }
}
numbers();

//  2
let i = 0;
while(i<3) {
    alert(`number ${i}`);
    i++
}


//3
let number = +prompt("Введите число");
do {
    number = +prompt("Введите число еще раз");
} while(number < 10 && number) 


// 4
let x = +prompt('Введите первое число', 6);
let y = +prompt('Введите второе число', 12);

function Min(x,y) {
    if(x>y) {
        alert(y);
    } else if(y>x) {
        alert(x);
    }
}

Min(x,y);


// 5
let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились!"),
    () => alert("Вы отменили выполнение!")
);

// 6
let age = +prompt('Введите возраст');
let checkAge = age => age >18 || confirm('Родители разрешили?');
checkAge(age)