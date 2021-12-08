## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this?** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)


HTML SETUP
6 Buttons
    - Create Form
        - 3 Inputs, 1 poll question, 2 options
        - Button
    -option A add
    -option B add
    -option A undo
    -option B undo
    -End poll
- Current Pole Div
    - has name of current Pole
    - option A + option B
    - option A votes + option B votes
-Past Polls
    - empty div to inject closed polls/history list

EVENTS

Form Submit/Create Poll
    - prevents default behavior
    - grabs data from form using `new FormData`
    - update state of Current Poll Question and Options
    - Display that in the DOM
    - initialize the form inputs

OptionA/B Add/Subtract Buttons
    - increments/decrements for that option
    - Updates the DOM

End Poll Button
    - Resets the current poll Display Element
    - Pushes the current Pole into an Array of Poll History
    - Displays the Poll History Array in the Poll History Div
        -resets the DisplayDiv
        - loops through and pushes to a render function which returns HTML Divs
        - injects HTML Divs into Poll History Display Div with looping and append?
    - Resets poll Name/Options + Votes



Functions

renderOption(option, votes)
-- what does render option do?
-- take in option A and votes A OR option B votes B
-- takes those values
-- creates p elements
-- appends them in a container div
-- returns the container div


