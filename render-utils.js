export function renderPoll(currentPollData) {

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
    questionEl.textContent = currentPollData.pollQuestion;
    optionAEl.textContent = currentPollData.optionA;
    optionBEl.textContent = currentPollData.optionB;
    optionAVotesEl.textContent = currentPollData.optionAVotes;
    optionBVotesEl.textContent = currentPollData.optionBVotes;

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

    //return the HTML tag
    return pollContainerDiv;

}