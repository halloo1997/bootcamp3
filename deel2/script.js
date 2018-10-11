"use strict";

// Declare variables
var student = "Chariesa Roozendaal";
var year = 2017;
var group = "MD2B";
var title = "JavaScript Bootcamp " + new Date().getFullYear();

// Init

instruction2();
instruction4();
instruction5();


//Instructions

function instruction2() {
    document.title = title;
    document.getElementById("pageHeader").innerText = title;

    document.getElementById("group").innerText = group;

    var elements = document.getElementsByClassName("year");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = year;
    }

    var elements = document.getElementsByClassName("student");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = student;
    }
}

function instruction3() {
    var description = "Na op de link 'Click Event' te hebben geklikt werden de header," +
        " de beschrijving en de oplossing van de opdracht aangepast";

    document.getElementById("instructionHeader").innerText = "Opdracht 3";
    document.getElementById("instructionDescription").innerText = description;
    document.getElementById("instructionResult").innerText = "";
}

function instruction4() {

    document.getElementById("pageHeader").innerHTML = title;
    document.getElementById("group").innerHTML = group;
    document.getElementById("year").innerHTML = year;
    var elements = document.getElementsByClassName("student");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = student;
    }
}

function instruction5() {
    var current_year = new Date().getFullYear();

    if (current_year <= 2017) {
        year = 2017;
    } else if (current_year > 2017) {
        var start_year = document.getElementById("year").innerHTML = year + "-" + current_year;
    }

    return start_year;
}


function instruction6() {
    var current_year = new Date().getFullYear();
    var description = "Bepaal de periode op basis van het startjaar en het huidige jaar en voer een klein testje" +
        " uit voor verschillende startjaren: vorige jaar, huidige jaar en volgende jaar";

    document.getElementById("instructionDescription").innerHTML = description;
    document.getElementById("instructionHeader").innerHTML = "Opdracht 6";
    document.getElementById("instructionResult").innerHTML = "Huidige jaar: " + current_year + "<br>" +
        "Startjaren: " + "<br>" + "-2017: " + instruction5() + "<br>" + "-2018: 2018" + "<br>" + "-2019: 2019";
}

function instruction7() {


    function instruction7a() {
        var current_day = new Date().getDate();
        if (current_day == 0) {
            current_day = "Zondag";
        } else if (current_day == 1) {
            current_day = "Maandag";
        } else if (current_day == 2) {
            current_day = "Dinsdag";
        } else if (current_day == 3) {
            current_day = "Woensdag";
        } else if (current_day == 4) {
            current_day = "Donderdag";
        } else if (current_day == 5) {
            current_day = "Vrijdag";
        } else if (current_day == 6) {
            current_day = "Zaterdag";
        }


        return current_day;
    }

    function instruction7b() {
        var current_day = new Date().getDate();
        switch (current_day) {
            case 1:
                current_day = "Maandag";
                break;
            case 2:
                current_day = "Dinsdag";
                break;
            case 3:
                current_day = "Woensdag";
                break;
            case 4:
                current_day = "Donderdag";
                break;
            case 5:
                current_day = "Vrijdag";
                break;
            case 6:
                current_day = "Zaterdag";
                break;
            case 0:
                current_day = "Zondag";
                break;
        }
        return current_day;
    }

    function instruction7c() {
        var current_day = new Date().getDate();
        var days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
        current_day = days[current_day];
        return current_day;
    }

    document.getElementById("instructionHeader").innerHTML = "Opdracht 7";
    var description = "Bepaal de dag van vandaag op drie verschillende manieren 1)if/else, 2)switch en 3)array";
    document.getElementById("instructionDescription").innerText = description;
    document.getElementById("instructionResult").innerHTML = "Door gebruik te maken van if/else weet ik dat het vandaag " + instruction7a() + " is." + "<br>" +
        "Ook wanneer ik switch gebruik weet ik dat het vandaag " + instruction7b() + " is." + "<br>" +
        "En tenslotte door gebruik te maken van een array weet ik ook dat het vandaag " + instruction7c() + " is." + "<hr>" +
        "De beste manier is gebruik maken van array omdat het snel en simpel is.";

}

function instruction8() {

    var colors = ["Rood", "Geel", "Blauw", "Groen", "Zwart"];

    document.getElementById("instructionHeader").innerHTML = "Opdracht 8";
    var description = "Toon een ongestoorde array met namen van kleuren.\n Toon vervolgens de oplopend (A-Z) gesorteerde array en de aflopend (Z-A) gesorteerde array";
    document.getElementById("instructionDescription").innerText = description;
    document.getElementById("instructionResult").innerHTML = "Kleuren: " + colors + "<br>" +
        "Gesorteerd(A-Z): " + colors.sort() + "<br>" +
        "Gesorteerd(Z-A): " + colors.reverse();
}
