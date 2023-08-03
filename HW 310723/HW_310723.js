for (let x = 1; x < 20; x++) {
    if (x % 3 === 0){
    console.log(x);
    }
}



let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = ((key && document && pen) && (apple || orange) );
console.log(shouldGoToWork);



let promptYear = prompt("В каком году вы родились?");
if ((promptYear) && (promptYear % 4 === 0)){
    console.log("вы родились в високосный год!");
} else if ((promptYear) && (promptYear % 4 !== 0)){
    console.log("ваш год рождения не високосный(");
} else if (!promptYear){
    console.log("вы точно что-то напечатали в поле?");
}

//второй вариант:
// let year;
// let promptYear = prompt("В каком году вы родились?");
// if (promptYear){
// year = promptYear % 4;
// }
// switch(year) {
//     case 0:
//         alert("вы родились в високосный год!");
//         break;
//     case 1:
//     case 2:
//     case 3:
//         alert ("ваш год рождения не високосный(");
//         break;
//     default:
//         alert ("вы точно что-то напечатали в поле?");
//         break;
// }



let userNum = prompt("Введите число");
if ((userNum) && (userNum % 5 === 0) && (userNum % 3 === 0)){
    console.log("FizBuz");
} else if ((userNum) && (userNum % 3 === 0)){
    console.log("Buz");
} else if ((userNum) && (userNum % 5 === 0)){
    console.log("Fiz");
}



let userMonth = prompt ("Введите номер месяца в формате 'хх'. (Например, 01 - январь, 10- октябрь)");
let userYear = prompt (" Введите номер года в формате 'xxxx'. (Например, 1993)");
if ((userYear) && (userYear % 4 === 0) && (userMonth == 02)){
        alert(`В ${userYear} году в ${userMonth} месяце 29 дней.`);
    } else switch(userMonth){
        case "01":
        case "03":
        case "05":
        case "07":
        case "08":
        case "10":
        case "12":
            alert(`В ${userYear} году в ${userMonth} месяце 31 день.`);
            break;
        case "02":
            alert(`В ${userYear} году в ${userMonth} месяце 28 дней.`);
            break;
        case "04":
        case "06":
        case "09":
        case "11":
            alert(`В ${userYear} году в ${userMonth} месяце 30 дней.`);
            break;
        default:
            alert ("вы точно что-то напечатали в поле?");
            console.error("Пустое поле!");
            break;
    }