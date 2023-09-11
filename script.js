let year = prompt("Введите год в формате YYYY");
alert(year);
if (year % 400 == 0 || (year % 4 == 0 && !(year % 100 == 0))) {
    console.log("Высокосный год, 366 дней");
    alert("Высокосный год, 366 дней");

}
else {
    console.log("Обычный год, 365 дней");
    alert("Обычный год, 365 дней");

}
