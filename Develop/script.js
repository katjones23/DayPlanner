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
    var newHour = $("<div>").text(item.toUpperCase());
    $(newHour).addClass("hour col-md-1");
    $(newHour).attr("data-time", moment().format("MMMM Do YYYY") + " " + milHours[index])
    var textArea = $("<textarea>").addClass("textarea col-md-10");
    $(textArea).attr("data-ta-id", index)
    var saveBtn = $("<button>").addClass("saveBtn col-md-1");
    $(saveBtn).attr("data-btn-id", index)
    $(saveBtn).append('<i class="far fa-save"></i>')

    $(".container").append(newRow);
    $(newRow).append(newHour);
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

//local storage logic
$(".saveBtn").on("click", saveEvent);

function saveEvent(event) {
    event.preventDefault();
    event.stopPropagation();

    var btnID = $(this).attr("data-btn-id");
    relTextarea = $("textarea[data-ta-id*=" + btnID + "]")
    var singleEvent = $(relTextarea).val();

    localStorage.setItem("events" + btnID, singleEvent);
}

function renderEvents() {
    $(".textarea").empty();

    for (var i = 0; i < workHours.length; i++) {
        var inputText = localStorage.getItem("events" + i);
        $("textarea[data-ta-id*=" + i + "]").text(inputText);
    }    
}

renderEvents();