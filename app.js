// import functions and grab DOM elements

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
    pollQuestionDisplay.textContent = pollQuestion;
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

function displayCurrentPoll() {
    // Clears any current polls in the DOM
    currentPollDiv.textContent = '';

    //Renders HTML
    // Creates HTML elements
    const pollContainerDiv = document.createElement('div');
    const questionEl = document.createElement('p');
    const optionAContainerDiv = document.createElement('div');
    const optionBContainerDiv = document.createElement('div');
    const optionAEl = document.createElement('p');
    const optionBEl = document.createElement('p');
    const optionAVotesEl = document.createElement('p');
    const optionBVotesEl = document.createElement('p');
    const bothOptionsDiv = document.createElement('div');

    //Sets elements text content to current state
    questionEl.textContent = pollQuestion;
    optionAEl.textContent = optionA;
    optionBEl.textContent = optionB;
    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;

    // Adds class lists to elements for styling
    pollContainerDiv.classList.add('poll-container');
    optionAContainerDiv.classList.add('option-container');
    optionBContainerDiv.classList.add('option-container');
    
    //Appends OptionAVotes and OptionAName to individual container Divs
    optionAContainerDiv.append(optionAVotesEl, optionAEl);
    optionBContainerDiv.append(optionBVotesEl, optionBEl);

    //Appends OptionA and OptionB divs to outer container div
    bothOptionsDiv.append(optionAContainerDiv, optionBContainerDiv);
    bothOptionsDiv.classList.add('both-options-container');

    //Appends Question and options container to pollContainer
    pollContainerDiv.append(questionEl, bothOptionsDiv);

    //appends pollContainer to our existing hardcoded HTML el currentPoll
    currentPollDiv.append(pollContainerDiv);
}