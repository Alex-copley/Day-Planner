var todaysDate = $("#currentDay");
var timeBlocks = $("#timeBlocks");

var displayArray = [9,10,11,12,13,14,15,16,17]


for (i = 0; i < displayArray.length; i++) {

    var timeBlockEl = $("<div>");
    timeBlockEl.addClass("time-block");

    var hour = displayArray[i];

    var timeSpanEl = $("<span>");
    timeSpanEl.addClass("hour");

    var textAreaEl = $("<textarea>");
    textAreaEl.addClass("description");
    
    var saveButtonEl = $("<button>");
    saveButtonEl.addClass("saveBtn");
    saveButtonEl.data("time", displayArray[i]);
    saveButtonEl.append($('<i class="far fa-save"></i>'))

    timeBlockEl.append(timeSpanEl, textAreaEl, saveButtonEl);
    timeBlocks.append(timeBlockEl);

}




function displayTime() {
    var rightNow = moment().format("dddd, MMMM Do");
    todaysDate.text(rightNow);
}

displayTime();