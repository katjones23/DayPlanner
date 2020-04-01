// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// current day under header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// timeblocks 8-5, because who actually gets a 9-5 anymore?
var workHours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
var milHours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
var currentHour = moment().format("MMMM Do YYYY HH")
console.log(currentHour)

workHours.forEach(function addHourstoPage(item, index){
    var newRow = $("<div>").addClass("row");
    var newHour = $("<div>").text(item.toUpperCase());
    $(newHour).addClass("hour");
    $(newHour).attr("data-time", moment().format("MMMM Do YYYY") + " " + milHours[index])
    var timeblock = $("<div>").addClass("time-block");
    var textArea = $("<p>").addClass("textarea");
    $(textArea).text("test");

    $(".container").append(newRow);
    $(newRow).append(newHour);
    $(newRow).append(timeblock);
    $(timeblock).append(textArea);

    var hourData = $(newHour).attr("data-time")
    console.log(hourData)

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