// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// $(function () {
// DOM interaction code goes here

// DOM reference elements
var dateDisplayEl = $('#currentDay');

// Global variables
var currentHour = dayjs().format('HH');

//* can i use .attr to add the unique hour-x id to these?
var hourDivPast = $('<div class="row time-block past">') 
var hourDivPresent = $('<div class="row time-block present">')
var hourDivFuture = $('<div class="row time-block future">')

//* how do I enter text into the below, i.e. 9AM, 10AM, etc?
var hourBlock = $('<div class=col-2 col-md-1 hour text-center py-3">')
var textBlock = $('<textarea class=col-8 col-md-10 description" rows="3">')
var button = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save">')
var icon = $('<i class="fas fa-save" aria-hidden="true">')



// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

//* is this where I need to dynamically create the elements
//* how do I start at 0900 when dynamically creating the hour divs?
//* need to add listener for when they click inside of textBlock and capture value
//* function to store data in local storage - do I need to retrieve or empty storage on page load/reload?



// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

//* need some conditional statements to compare currentHour to pas, present, or future div class

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

//* use unique hour-x id's to help capture value of text entered



// TODO: Add code to display the current date in the header of the page.

// displays current date at top of page
function showDate() {
  var currentDay = dayjs().format('dddd MMMM D');
  dateDisplayEl.text(currentDay);
}
















showDate();
setInterval(showDate, 1000);
// })
