document.addEventListener("DOMContentLoaded", getDoc);

function getDocData() {
    document.getElementById("getOut2").innerHTML = myObj['web-app'].servlet[0]['init-param'].cachePackageTagsRefresh + '<br>' +
        myObj['web-app'].servlet[0]['init-param'].cachePackageTagsStore;
    console.log(myObj);
}

function showObject(elem) {
    for (var prop in elem) {
        document.getElementById("getOut1").innerHTML = document.getElementById("getOut1").innerHTML + "obj." + prop + ': \"' + elem[prop] + '\"' + "<br>";
    }
}
var myObj;

function getDoc() {
    let x = new XMLHttpRequest();
    x.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            var counter = 0;
            for (var key in myObj['web-app'].servlet[0]['init-param']) {
                counter++;
            }
            console.log("Всего свойств: " + counter);
            showObject(myObj['web-app'].servlet[0]['init-param']);
        }
    };
    x.open("GET", "../db/example.json", true);
    x.send();
};

document.getElementById("inputData").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
    }
});

function clearP() {
    document.getElementById("getOut1").innerHTML = null;
    document.getElementById("getOut2").innerHTML = null;
    document.getElementById("getOut3").innerHTML = null;
    myObj['web-app'].servlet[0]['init-param'].cachePackageTagsRefresh = 60;
    console.clear();
}

//----------------------------------------------------------------------------------------
// window.onbeforeunload = function (evt) {
//     console.log('0');
// 	var message = "good bye!";
// 	if (typeof evt == "undefined") {
//         console.log('1');
// 	}
// 	if (evt) {
//         console.log('2');
// 	}
// 	return message;
// }
//----------------------------------------------------------------------------------------
