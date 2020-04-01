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
var workHours = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

workHours.forEach(function (item){
    var newRow = $("<div>").addClass("row");
    var timeblock = $("<div>").addClass("time-block");
    var newHour = $("<section>").text(item);
    $(newHour).addClass("hour");

    $(".container").append(newRow);
    $(newRow).append(timeblock);
    $(timeblock).append(newHour);
});

    // potential classes needed:
    // .time-block
    // .row
    // .hour
    // .textarea