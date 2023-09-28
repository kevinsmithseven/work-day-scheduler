
// $(function () {


// DOM reference elements
var dateDisplayEl = $('#currentDay');

// Global variables
var currentHour = parseInt(dayjs().format('HH'));

// Array to establish hour, hour display time and unique hour ID

var timeBlockArray = [
  {
    "hour": 9,
    "displayText": "9 AM",
    "id": "hour-9"
  },
  {
    "hour": 10,
    "displayText": "10 AM",
    "id": "hour-10"
  },
  {
    "hour": 11,
    "displayText": "11 AM",
    "id": "hour-11"
  },
  {
    "hour": 12,
    "displayText": "12 PM",
    "id": "hour-12"
  },
  {
    "hour": 13,
    "displayText": "1 PM",
    "id": "hour-13"
  },
  {
    "hour": 14,
    "displayText": "2 PM",
    "id": "hour-14"
  },
  {
    "hour": 15,
    "displayText": "3 PM",
    "id": "hour-15"
  },
  {
    "hour": 16,
    "displayText": "4 PM",
    "id": "hour-16"
  },
  {
    "hour": 17,
    "displayText": "5 PM",
    "id": "hour-17"
  }
]

// Function to dynamically create HTML blocks, and retrieve user input into local storage

function displayTimeBlock() {
  $("#time-block-section").empty();

  for (var block of timeBlockArray) {
    var timeClass = timeOfDayClass(block.hour);
    var key = `text-${block.hour}`;
    var task = localStorage.getItem(key) || "";

    var html = `
  <div id="${block.id}" class="row time-block ${timeClass}">
    <div class="col-2 col-md-1 hour text-center py-3">${block.displayText}</div>
    <textarea id="${key}" class="col-8 col-md-10 description" rows="3">${task}</textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save" onclick="saveTask(${block.hour})">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>
  `
    $("#time-block-section").append(html);
  }
}


// Store input in local storage

function saveTask(hour) {
  var key = `text-${hour}`
  var task = $(`#${key}`).val();
  localStorage.setItem(key, task);
  displayTimeBlock();
}


// Determines which class to assign in the displayTimeBlock function

function timeOfDayClass(hour) {
  if (hour < currentHour) {
    return "past"
  } else if (hour === currentHour) {
    return "present"
  } else {
    return "future"
  }
}



// Displays current date at top of page
function showDate() {
  var currentDay = dayjs().format('dddd MMMM D hh:MM A');
  dateDisplayEl.text(currentDay);
}


showDate();
setInterval(showDate, 1000);
displayTimeBlock()
// })
