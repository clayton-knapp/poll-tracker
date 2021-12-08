// import functions and grab DOM elements

import { renderPoll } from './render-utils.js';

const pollForm = document.querySelector('#poll-form');

const optionAAdd = document.querySelector('#option-a-add');
const optionASubtract = document.querySelector('#option-a-subtract');
const optionBAdd = document.querySelector('#option-b-add');
const optionBSubtract = document.querySelector('#option-b-subtract');

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
    // pollQuestionDisplay.textContent = pollQuestion;
    optionADisplay.textContent = optionA;
    optionBDisplay.textContent = optionB;

    // - initialize the form inputs
    pollForm.reset();

    //Display the current poll Div
    displayCurrentPoll();
});

optionAAdd.addEventListener('click', ()=>{
    optionAVotes++;
    displayCurrentPoll();
});

optionASubtract.addEventListener('click', ()=>{
    optionAVotes--;
    displayCurrentPoll();
});

optionBAdd.addEventListener('click', ()=>{
    optionBVotes++;
    displayCurrentPoll();
});

optionBSubtract.addEventListener('click', ()=>{
    optionBVotes--;
    displayCurrentPoll();
});

endPoll.addEventListener('click', ()=>{
    // - Resets/clears the current poll Display Element
    currentPollDiv.textContent = '';

    // - Pushes the current Pole into an Array of Poll History
    // THIS IS WHERE YOU WOULD CALL MAKEPOLL FUNCTION
    const currentPollData = {
        pollQuestion,
        optionA,
        optionB,
        optionAVotes,
        optionBVotes,
    };

    pastPollsArr.push(currentPollData);

    // - Displays the Poll History Array in the Poll History Div
    //     -resets the DisplayDiv
    pastPollsDiv.textContent = '';
    //     - loops through and pushes to a render function which returns HTML Divs
    for (let eachPoll of pastPollsArr) {
        const pollDiv = renderPoll(eachPoll);
        pastPollsDiv.append(pollDiv);
    }

    //     - injects HTML Divs into Poll History Display Div with looping and append?

    // - Resets poll Name/Options + Votes - MAKE A RESET FUNCTION?
    pollQuestion = '';
    optionA = '';
    optionB = '';
    optionAVotes = 0;
    optionBVotes = 0;
    // pollQuestionDisplay.textContent = 'Poll Question';
    optionADisplay.textContent = 'Option A';
    optionBDisplay.textContent = 'Option B';
});

function displayCurrentPoll() {
    // Clears any current polls in the DOM
    currentPollDiv.textContent = '';

    //Renders HTML - Call renderPoll function
    //make current object of state
    const currentPollData = {
        pollQuestion,
        optionA,
        optionB,
        optionAVotes,
        optionBVotes,
    };

    const pollContainerDiv = renderPoll(currentPollData);

    //appends pollContainer to our existing hardcoded HTML el currentPoll
    currentPollDiv.append(pollContainerDiv);

}