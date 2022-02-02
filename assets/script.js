var todaysDate = $("#currentDay");
var timeBlocks = $("#timeBlocks");

var displayArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]

for (i = 0; i < displayArray.length; i++) {

    var savedDescription = localStorage.getItem(displayArray[i]);
    var timeBlockEl = $("<div>");
    timeBlockEl.addClass("time-block row")

    var hour = displayArray[i]

    var timeSpanEl = $("<span>");
    timeSpanEl.addClass("col hour")
    if (hour > 12) {
        timeSpanEl.text((hour - 12) + "PM");
    } else {
        timeSpanEl.text(hour + "AM");
    }

    var textAreaEl = $("<textarea>");
    textAreaEl.addClass("description col-10");
    textAreaEl.attr("data-gramm", "false");
    if (hour < moment().hours()) {
        textAreaEl.addClass("past");
    } else if (hour === moment().hours()) {
        textAreaEl.addClass("present");
    } else {
        textAreaEl.addClass("future");
    }

    if (savedDescription) {
        textAreaEl.val(savedDescription);
    }

    var saveButtonEl = $("<button>");
    saveButtonEl.addClass("saveBtn col");
    saveButtonEl.data("time", displayArray[i]);
    saveButtonEl.append($('<i class="far fa-save"></i>'))

    timeBlockEl.append(timeSpanEl, textAreaEl, saveButtonEl);
    timeBlocks.append(timeBlockEl);

}

$(".saveBtn").on("click", function () {
    var time = $(this).data("time");
    var description = $(this).prev().val();

    localStorage.setItem(time, description);
});

function displayTime() {
    var rightNow = moment().format("dddd, MMMM Do");
    todaysDate.text(rightNow);
};

displayTime();