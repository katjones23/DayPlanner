// current day under header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// 8-5, because who actually gets a 9-5 anymore?
var workHours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
// 24 correlated to work hours array for later comparison in foreach loop
var milHours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17"]
var currentHour = moment().format("MMMM Do YYYY HH")

// function to add row with three columns for hour, textarea, and save button for each hour
workHours.forEach(function addHourstoPage(item, index){
    var newRow = $("<div>").addClass("row");
    var newHour = $("<div>").text(item.toUpperCase());
    $(newHour).addClass("hour col-md-1");
    $(newHour).attr("data-time", moment().format("MMMM Do YYYY") + " " + milHours[index])
    var textArea = $("<textarea>").addClass("textarea col-md-10");
    $(textArea).attr("data-ta-id", index)
    var saveBtn = $("<button>").addClass("saveBtn btn col-md-1");
    $(saveBtn).attr("data-btn-id", index)
    $(saveBtn).append('<i class="far fa-save"></i>')

    $(".container").append(newRow);
    $(newRow).append(newHour);
    $(newRow).append(textArea);
    $(newRow).append(saveBtn);

    // comparing hour in the block to current hour to set colors
    var hourData = $(newHour).attr("data-time")

    if (hourData === currentHour) {
        $(textArea).addClass("present");
    } else if (hourData < currentHour) {
        $(textArea).addClass("past");
    } else if (hourData > currentHour) {
        $(textArea).addClass("future");
    };
});

//localstorage logic
$(".saveBtn").on("click", saveEvent);

// when button is clicked, associate the correct text area and its input, then save to its own localstorage item
function saveEvent(event) {
    event.preventDefault();
    event.stopPropagation();

    var btnID = $(this).attr("data-btn-id");
    relTextarea = $("textarea[data-ta-id*=" + btnID + "]")
    var singleEvent = $(relTextarea).val();

    localStorage.setItem("events" + btnID, singleEvent);
}

// since the input areas and localstorage items will not exceed the number of work hours, use that array to loop through localstorage and add
// text back to the page in the same item
function renderEvents() {
    $(".textarea").empty();

    for (var i = 0; i < workHours.length; i++) {
        var inputText = localStorage.getItem("events" + i);
        $("textarea[data-ta-id*=" + i + "]").text(inputText);
    }    
}

renderEvents();