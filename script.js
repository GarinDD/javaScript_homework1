let year = prompt("Введите год в формате YYYY");
alert(year);
if(year%400==0 || (year%4==0 && !(year%100==0)) )
alert("Высокосный год, 366 дней")
else
alert("Обычный год, 365 дней")
