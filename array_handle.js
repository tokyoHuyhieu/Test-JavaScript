function max_of_array(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

document.write("<h1>Max of array</h1>");
document.write("Input = [1, 2, 3, 4, 5] is " + max_of_array([1, 2, 3, 4, 5]) + "<br>");


function sum_prime_number_of_array(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (check_prime_number(arr[i])) {
            sum += arr[i];
        }
    }
    return sum;
}

document.write("<h1>Sum prime number of array</h1>");
document.write("Input = [1, 2, 3, 4, 5] is " + sum_prime_number_of_array([1, 2, 3, 4, 5]) + "<br>");

function find_str_on_array(arr, str) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].endsWith(str)) {
            return arr[i];
        }
    }
    return "No string found";
}

document.write("<h1>Find string on array</h1>");
document.write("Input = [\"abc\", \"def\", \"ghi\"] and str = \"f\" is " + find_str_on_array(["abc", "def", "ghi"], "f") + "<br>");

function delete_perfect_number_on_array(arr) {
    var result = []
    for (var i = 1; i < arr.length; i++) {
        if (!check_perfect_number(i)) {
            result.push(i);
        }
    }
    return result;
}


document.write("<h1>Delete perfect number on array</h1>");
document.write("Input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] is " + delete_perfect_number_on_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) + "<br>");
 

function print_name_picture_and_url(src) {
    let result = '';
    let temp = src.split('/');
    const name = temp[temp.length - 1]
    for (let i = 0; i < temp.length; i++) {
        if (i === temp.length - 1) {
            let temp2 = temp[i].split('.');
            result += '/' + temp2[0] + '_sp.' + temp2[1];
        } else if (i === 3) {
            result += 'sp/' + temp[i];
        }
        else {
            result += temp[i] + '/';
        }
    }
    return result;
}

document.write("<h1>Print name picture and url</h1>");
document.write("Input = \"https://www.example.com/images/image.jpg\" is " + print_name_picture_and_url("https://www.example.com/images/image.jpg") + "<br>");