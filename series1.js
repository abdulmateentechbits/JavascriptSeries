//problem: 2+5-8+11-14+17-20+23-26+29
var result = 0;

for (var num = 2; num <= 29; num=num+3) {
    //document.write(num); to check the series 2 5 8 11 14 17 20 23 26 29
    if (num%7 == 0) {
        result = result - num;
    } else {
        result = result + num;
    }
}
document.write(result);
