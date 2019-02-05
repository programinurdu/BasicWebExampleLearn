function ShowDate() {
    //Show DateTime using alert
    //window.alert(Date());
    document.getElementById('date').innerHTML = Date();
}

function ClearDate() {
    document.getElementById('date').innerHTML = "";
}

function AddNumbers() {

    var a = parseInt(document.getElementById('first').value);
    var b = parseInt(document.getElementById('second').value);

    var x = a + b;

    // document.getElementById('demo').innerHtml = "343";
    //window.alert(x);
    document.getElementById('result').value = x;
}

function ClearScreen() {
    document.getElementById('first').value = "";
    document.getElementById('second').value = "";
    document.getElementById('result').value = "";

    document.getElementById('first').focus();
}

function FindTemp() {
    var f = parseFloat(document.getElementById('temp').value);

    var c = (5 / 9) * (f - 32);

    document.getElementById('result').value = c;
}

function SubtractNumbers() {
    var first = parseInt(document.getElementsByName('first')[0].value);
    var second = parseInt(document.getElementsByName('second')[0].value);

    var result = first - second;

    document.getElementsByName('result')[0].value = result;
}

function enabletxt2() {
    //var e = document.getElementById('ddlyesno');
    //var val = e.options[e.selectedIndex].value;

    var val = document.getElementById('ddlyesno').value;

    if (val === 'yes')
    {
        document.getElementById('comment').disabled = false;
    }
    else {
        document.getElementById('comment').disabled = true;
    }
}

function enabletxt(val) {

    if (val === 'yes') {
        document.getElementById('comment').disabled = false;
    }
    else {
        document.getElementById('comment').disabled = true;
    }
}