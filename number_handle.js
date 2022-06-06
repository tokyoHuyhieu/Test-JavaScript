function even_odd(number) {
    if (number % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

document.write("<h1>Even or Odd</h1>");
document.write("Input = 3 is " + even_odd(3) + "<br>");
document.write("Input = 8 is " + even_odd(8) + "<br>");

function find_big_number(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

document.write("<h1>Find big number</h1>");
document.write("Input = 3, 5, 7 is " + find_big_number(3, 5, 7) + "<br>");

function sum_odd_number(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 1) {
            sum += i;
        }
    }
    return sum;
}

document.write("<h1>Sum odd number</h1>");
document.write("Input = 10 is " + sum_odd_number(10) + "<br>");

function check_prime_number(number) {
    var count = 0;
    for (var i = 1; i <= number; i++) {
        if (number % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return true;
    } else {
        return false;
    }
}

document.write("<h1>Check prime number</h1>");
document.write("Input = 7 is " + check_prime_number(7) + "<br>");

function check_perfect_number(n) {
    var sum = 0;
    for (var i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    if (sum == n) {
        return true;
    } else {
        return false;
    }
}

document.write("<h1>Check perfect number</h1>");
document.write("Input = 6 is " + check_perfect_number(6) + "<br>");

function sum_perfect_number_1_to_n(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (check_perfect_number(i)) {
            sum += i;
        }
    }
    return sum;
}


document.write("<h1>Sum perfect number</h1>");
document.write("Input = 10 is " + sum_perfect_number_1_to_n(10) + "<br>");
