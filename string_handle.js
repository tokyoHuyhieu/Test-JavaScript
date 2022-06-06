function reverse_string(str) {
  return str.split("").reverse().join("");
}

document.write("<h1>Reverse string</h1>");
document.write("Input = 'Hello World' is " + reverse_string("Hello World") + "<br>");

function split_string_and_down_the_line(str) {
    var str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
        document.write(str[i] + "<br>");
    }
}

document.write("<h1>Split string and down the line</h1>");
split_string_and_down_the_line("Hello World");

function reverse_characters(str) {
  return str.split(" ").reverse().join(" ");
}

document.write("<h1>Reverse characters</h1>");
document.write("Input = 'Hello World' is " + reverse_characters("Hello World") + "<br>");


function begin_and_end_of_string(str) {
    var begin = str.substring(0, str.indexOf(" "));
    var end = str.split(" ").pop();
    return begin + " " + end;
}

document.write("<h1>Begin and end of string</h1>");
document.write("Input = 'Nguyen Phan Huy Hieu' is " + begin_and_end_of_string("Nguyen Phan Huy Hieu") + "<br>");

function delete_string(str1, str2){
    var str = str1.split(" ");
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str2) {
            str.splice(i, 1);
        }
    }
    return str.join(" ");
}

document.write("<h1>Delete string</h1>");
document.write("Input = 'Hello World' and 'World' is " + delete_string("Hello World", "World") + "<br>");

