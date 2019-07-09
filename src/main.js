"use strict";

//полоса загрузки----------------------------------------------------------------------------------

var max = document.getElementById('progress').max;
var i = 1;

function addProgress() {
    if (i != 0) {
        return;
    }

    if (document.getElementById('progress').value <
        max) {
        document.getElementById('progress').value++;
    }
    if (document.getElementById('progress').value == 100) {
        document.getElementById('progress').value = 0;
    }
    setTimeout(addProgress, 50);
    return;
};

function startButton() {
    i--;
    document.getElementById('progress').max = max;
    console.log(i);
    console.log("GO!");
    addProgress();
    if (i < 0) {
        i = 0;
    }
    return;
}

function stopButton() {
    i++;
    console.log("HALT!");
    let currVal = document.getElementById('progress').value;
    document.getElementById('progress').max = currVal;
    if (i > 1) {
        i = 1;
    }
    return;
}

function resetButton() {
    document.getElementById('progress').value = 0;
    return;
}

//drag and drop------------------------------------------------------------------------------------

i = 0;
var arr = Array.from(document.getElementsByClassName('insides'));
arr.forEach(function () {
    var draggable = arr[i];

    draggable.onmousedown = function (e) {

        var coords = getCoords(draggable);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        draggable.style.position = 'absolute';
        draggable.style.transform = 'translateY(0%)';
        // document.body.appendChild(draggable);
        moveAt(e);

        //   draggable.style.zIndex = 1000; // над другими элементами

        function moveAt(e) {
            draggable.style.left = e.pageX - shiftX + 'px';
            draggable.style.top = e.pageY - shiftY + 'px';
        }

        document.onmousemove = function (e) {
            moveAt(e);
        };

        draggable.onmouseup = function () {
            document.onmousemove = null;
            // draggable.onmouseup = null;
        };

    }

    draggable.ondragstart = function () {
        return false;
    };

    function getCoords(elem) { // кроме IE8-
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
    i++;
});
i = 1;

//submit form--------------------------------------------------------------------------------------

var input = document.getElementById("submitSpace");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        let textForInsert = document.createElement('li');
        textForInsert.innerHTML = document.getElementById("submitSpace").value;
        let textRemoveButton = document.createElement('button');
        textRemoveButton.innerHTML = "X";
        textRemoveButton.className = "textRemove";
        textRemoveButton.onclick = function () {
            this.parentNode.remove();
        }
        document.getElementById("submitSpace").value = null;
        document.getElementById("forInput").appendChild(textForInsert);
        document.getElementById("forInput").lastChild.appendChild(textRemoveButton);
    }
});

//--------------------------------------------------------------------------------------

