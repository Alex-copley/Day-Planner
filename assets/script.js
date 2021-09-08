var todaysDate = $("#currentDay");
var timeBlocks = $("#timeBlocks");

var displayArray = [9,10,11,12,13,14,15,16,17]


for (i = 0; i < displayArray.length; i++) {

}

function displayTime() {
    var rightNow = moment().format("dddd, MMMM Do");
    todaysDate.text(rightNow);
}

displayTime();