// import functions and grab DOM elements

const pollForm = document.querySelector('#poll-form');

const optionAAdd = document.querySelector('#option-a-add');
const optionASubtract = document.querySelector('#option-a-subtract');
const optionBAdd = document.querySelector('#option-b-add');
const optionBSubtract = document.querySelector('#option-a-subtract');

const endPoll = document.querySelector('#end-poll-button');

const optionADisplay = document.querySelector('#option-a-display');
const optionBDisplay = document.querySelector('#option-b-display');
const pollQuestionDisplay = document.querySelector('#poll-question-display');


const currentPollDiv = document.querySelector('#current-poll-div');
const pastPollsDiv = document.querySelector('#past-polls-div');


// let state

let pollQuestion = '';
let optionA = '';
let optionB = '';
let optionAVotes = 0;
let optionBVotes = 0;
let pastPollsArr = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

pollForm.addEventListener('submit', (e)=> {
    // Form Submit/Create Poll
    // - prevents default behavior
    e.preventDefault();

    // - grabs data from form using `new FormData`
    const data = new FormData(pollForm);

    // - update state of Current Poll Question and Options
    pollQuestion = data.get('question-input');
    optionA = data.get('option-a-input');
    optionB = data.get('option-b-input');


    // - Display that in the DOM
    pollQuestionDisplay.textContent = pollQuestion;
    optionADisplay.textContent = optionA;
    optionBDisplay.textContent = optionB;

    // - initialize the form inputs
    pollForm.reset();
});