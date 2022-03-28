// get the button for hamburger menu
// add an eventlistners to it
// when you click it will toggle a class on the ul

// code for the hamburger menu
const hamburger = document.querySelector('.hamburgerMenu');

// e = event
hamburger.addEventListener('click', function(e){
    e.preventDefault();

    const ulElement = document.querySelector('header ul')
    ulElement.classList.toggle('hideMe');
    ulElement.classList.toggle('showMe');
})



// create the comments element
// add comments to the comment container div
// add event listener to post comment button

const commentButton = document.querySelector('.formContainer button')


commentButton.addEventListener('click', function(e){
e.preventDefault();

const nameElement = document.getElementById('name')
const commentElement = document.getElementById('commentInput')

// const newComment = `
//         <div class="imgContainer">
//             <img src="./beach-final-images/comment-image2.jpg"
//                 alt="A woman with red reflective sun glasses, wearing red lipstick.">
//         </div>
//         <div class="commentText">
//             <p class="date">Wednesday October 10th, 2019 by ${nameElement.value}</p>
//             <p>${commentElement.value}</p>
//         </div>
// `;

const commentDiv = document.querySelector('.commentContainer');

const comment = document.createElement('div')
comment.setAttribute('class', 'comment')

const commentImg = `
    <img src="./beach-final-images/comment-image2.jpg"
        alt="A woman with red reflective sun glasses, wearing red lipstick.">
`;

// creating the image for the comment
const imgChild = document.createElement('div');
imgChild.setAttribute('class', 'imgContainer')
imgChild.innerHTML = commentImg;
comment.appendChild(imgChild);

// creating the text div for comments
const textElement = document.createElement('div');
textElement.setAttribute('class', 'commentText');

let today = new Date();
console.log(today);

// creating date element
const dateElement = document.createElement('p');
dateElement.setAttribute('class', 'date');
dateElement.textContent = `${today} by ${nameElement.value}`;
textElement.appendChild(dateElement);

// creating the actual comment text
const commentTextElement = document.createElement('p');
commentTextElement.textContent = `${commentElement.value}`;
textElement.appendChild(commentTextElement);

comment.appendChild(textElement);
commentDiv.appendChild(comment);
})