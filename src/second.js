"use strict";

//Полиндром----------------------------------------------------------------------------------

function removeText1() {
    document.getElementById("firstInput").value = null;
    document.getElementById("isPoly").innerHTML = null;
}

document.getElementById("firstInput").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (document.getElementById("firstInput").value.toLowerCase() ==
            document.getElementById("firstInput").value.split("").reverse().join("").toLowerCase()) {
            document.getElementById("isPoly").innerHTML = "POLYNDROM!";
            return true;
        } else {
            return false;
        }
    }
});

//Fizzbuzz----------------------------------------------------------------------------------

function removeText2() {
    document.getElementById("secondInput").value = null;
    document.getElementById("fizzBuzz").innerHTML = null;
}

document.getElementById("secondInput").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("fizzBuzz").innerHTML = null;
        for (let i = 0; i < document.getElementById("secondInput").value; i++) {
            if (i != 0 && i % 3 == 0 && i % 5 == 0) {
                document.getElementById("fizzBuzz").innerHTML =
                    document.getElementById("fizzBuzz").innerHTML + ' ' + 'fizzbuzz';
            } else if (i != 0 && i % 5 == 0) {
                document.getElementById("fizzBuzz").innerHTML =
                    document.getElementById("fizzBuzz").innerHTML + ' ' + 'buzz';
            } else if (i != 0 && i % 3 == 0) {
                document.getElementById("fizzBuzz").innerHTML =
                    document.getElementById("fizzBuzz").innerHTML + ' ' + 'fizz';
            } else {
                document.getElementById("fizzBuzz").innerHTML =
                    document.getElementById("fizzBuzz").innerHTML + ' ' + i;
            }
        }
    }
});

//Анаграмма-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP-WIP

function removeText3() {
    document.getElementById("thirdInput1").value = null;
    document.getElementById("thirdInput2").value = null;
    document.getElementById("anagram").innerHTML = null;
    console.clear();
}

function anagram() {
    // console.log(document.getElementById("thirdInput1").value.toLowerCase().split(""));
    // console.log(document.getElementById("thirdInput2").value.toLowerCase().split(""));
    if (document.getElementById("thirdInput1").value.length != document.getElementById("thirdInput2").value.length) {
        document.getElementById("anagram").innerHTML = "Слова имеют разную длину!";
    }

    function unique(arr) {
        var obj = {};
        let t = 1;
        for (let i = 0; i < arr.length; i++) {
            obj[arr[i]] = t;
            let key = arr[i];
            arr[i] = '';
            // console.log(arr);
            // console.log(obj);
            for (let i = 0; i < arr.length; i++) {
                console.log(i);
                console.log(Object.keys(obj)[i]);
            //     console.log(Object.keys(obj[key]));
            //     console.log(arr[i]);
            //     console.log('-----------------------');
            }
        }
        // console.log(Object.keys(obj)[0]);

        return obj;
    }
    unique(document.getElementById("thirdInput1").value.toLowerCase().split(""));
    unique(document.getElementById("thirdInput2").value.toLowerCase().split(""));
}

document.getElementById("thirdInput1").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (document.getElementById("thirdInput1").value != '' && document.getElementById("thirdInput2").value != '') {
            anagram();
        } else {
            anagram();

            // document.getElementById("anagram").innerHTML = "Enter 2 values!";
        }
    }
});
document.getElementById("thirdInput2").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (document.getElementById("thirdInput1").value != '' && document.getElementById("thirdInput2").value != '') {
            anagram();
        } else {
            document.getElementById("anagram").innerHTML = "Введите оба значения!";
        }
    }
});