// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// current day under header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// timeblocks 8-5, because who actually gets a 9-5 anymore?
var workHours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var milHours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17"]
var currentHour = moment().format("MMMM Do YYYY HH")

workHours.forEach(function addHourstoPage(item, index){
    var newRow = $("<div>").addClass("row");
    // var timeblock = $("<div>").addClass("time-block");
    var newHour = $("<div>").text(item.toUpperCase());
    $(newHour).addClass("hour");
    $(newHour).attr("data-time", moment().format("MMMM Do YYYY") + " " + milHours[index])
    var textArea = $("<p>").addClass("textarea");
    // remove once ready for prod
    $(textArea).text("test");
    var saveBtn = $("<button>").addClass("saveBtn");

    $(".container").append(newRow);
    $(newRow).append(newHour);
    // $(timeblock).append(newHour);
    $(newRow).append(textArea);
    $(newRow).append(saveBtn);

    var hourData = $(newHour).attr("data-time")

    if (hourData === currentHour) {
        $(textArea).addClass("present");
    } else if (hourData < currentHour) {
        $(textArea).addClass("past");
    } else if (hourData > currentHour) {
        $(textArea).addClass("future");
    };
});

    // potential classes needed:
    // .time-block
    // .row
    // .hour
    // .textarea