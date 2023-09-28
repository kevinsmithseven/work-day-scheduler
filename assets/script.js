// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// $(function () {
// DOM interaction code goes here

// DOM reference elements
var dateDisplayEl = $('#currentDay');

// Global variables
var currentHour = parseInt(dayjs().format('HH'));

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

function saveTask(hour) {
  var key = `text-${hour}`
  var task = $(`#${key}`).val();
  localStorage.setItem(key, task);
  displayTimeBlock();
}


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

//* is this where I need to dynamically create the elements
//* how do I start at 0900 when dynamically creating the hour divs?
//* need to add listener for when they click inside of textBlock and capture value
//* function to store data in local storage

// buttonEl.on('click', storeData) //*storeData not defined yet





// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

//* need some conditional statements to compare currentHour to past, present, or future div class

function timeOfDayClass(hour) {
  if (hour < currentHour) {
    return "past"
  } else if (hour === currentHour) {
    return "present"
  } else {
    return "future"
  }
}



// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

//* use unique hour-x id's to help capture value of text entered



// TODO: Add code to display the current date in the header of the page.

// displays current date at top of page
function showDate() {
  var currentDay = dayjs().format('dddd MMMM D hh:MM A');
  dateDisplayEl.text(currentDay);
}
















showDate();
setInterval(showDate, 1000);
displayTimeBlock()
// })
