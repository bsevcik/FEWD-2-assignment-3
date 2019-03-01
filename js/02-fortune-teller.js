/*eslint-env browser*/

function tellFortune() {
    "use strict";
    var numKids = (Math.random() * 10).toFixed();
    numKids = "You will have " + numKids + " kids";
    var partnerName = (Math.random() * 10).toFixed();
        if(partnerName == 0) {
            partnerName = "You will not be married";
        } else if (partnerName < 3) {
            partnerName = "You will be married to Greg";
        } else if (partnerName < 6) {
            partnerName = "You will be married to Luke";
        } else {
            partnerName = "You will be married to someone rich";
        }
    var location = (Math.random() * 10).toFixed();
        if(location == 0) {
            location = "You will live in the sewers";
        } else if (location < 3) {
            location = "You will live in Florida";
        } else if (location < 6) {
            location = "You will live in Mexico City";
        } else {
            location = "You will live in San Diego";
        }
    var job = (Math.random() * 10).toFixed();
        if(job == 0) {
            job = "You will work as a garbageman";
        } else if (job < 3) {
            job = "You will work as a doctor";
        } else if (job < 6) {
            job = "You will work as a chef";
        } else {
            job = "You will work as a street busker";
        }
    window.document.getElementById("tellFortune").innerHTML = (numKids + "<br>" + partnerName + "<br>" + location + "<br>" + job);
}