// Questions array
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "A. Hypertext Markup Language",
      "B. Hightext Machine Language",
      "C. Hyperloop Machine Language",
      "D. Hypertext Markup Level",
    ],
    answer: 0, // Correct answer index
  },
  {
    question: "Which HTML element defines the title of a document?",
    options: ["A. <meta>", "B. <title>", "C. <head>", "D. <footer>"],
    answer: 1,
  },
  {
    question: "Which CSS property controls the text size?",
    options: [
      "A. font-size",
      "B. text-size",
      "C. text-style",
      "D. font-weight",
    ],
    answer: 0,
  },
  {
    question: "Which JavaScript keyword is used to declare a variable?",
    options: ["A. var", "B. let", "C. const", "D. All of the above"],
    answer: 3,
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["A. Django", "B. Flask", "C. React", "D. Ruby on Rails"],
    answer: 2,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "A. Colorful Style Sheets",
      "B. Cascading Style Sheets",
      "C. Creative Style Systems",
      "D. Cascading Simple Sheets",
    ],
    answer: 1,
  },
  {
    question: "Which HTML element is used to define an internal style sheet?",
    options: ["A. <style>", "B. <script>", "C. <css>", "D. <link>"],
    answer: 0,
  },
  {
    question: "Which property is used to change the background color?",
    options: ["A. bgcolor", "B. background-color", "C. color", "D. background"],
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'script.js'?",
    options: [
      "A. <script src='script.js'>",
      "B. <script href='script.js'>",
      "C. <script ref='script.js'>",
      "D. <script link='script.js'>",
    ],
    answer: 0,
  },
  {
    question: "Which method is used to access an HTML element by Id?",
    options: [
      "A. getElementById()",
      "B. getElementByClassName()",
      "C. querySelector()",
      "D. getElementsByTagName()",
    ],
    answer: 0,
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["A. =", "B. -", "C. *", "D. %"],
    answer: 0,
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "A. function:myFunction()",
      "B. function myFunction()",
      "C. function = myFunction()",
      "D. create myFunction()",
    ],
    answer: 1,
  },
  {
    question: "How can you add a comment in JavaScript?",
    options: [
      "A. // This is a comment",
      "B. <!-- This is a comment -->",
      "C. ' This is a comment",
      "D. /* This is a comment */",
    ],
    answer: 0,
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "A. var colors = (1:'red', 2:'green', 3:'blue')",
      "B. var colors = ['red', 'green', 'blue']",
      "C. var colors = 'red', 'green', 'blue'",
      "D. var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following is a valid way to declare a variable in JavaScript?",
    options: [
      "A. var name = 'John';",
      "B. let name = 'John';",
      "C. const name = 'John';",
      "D. All of the above",
    ],
    answer: 3,
  },
  {
    question: "What will the following code return: Boolean(10 > 9)?",
    options: ["A. NaN", "B. true", "C. false", "D. undefined"],
    answer: 1,
  },
  {
    question: "What is the correct syntax for an if statement in JavaScript?",
    options: [
      "A. if i = 5 then",
      "B. if (i == 5)",
      "C. if i == 5",
      "D. if (i = 5)",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["A. Undefined", "B. Boolean", "C. Number", "D. Character"],
    answer: 3,
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    options: [
      "A. Math.round(7.25)",
      "B. Math.rnd(7.25)",
      "C. round(7.25)",
      "D. Math.floor(7.25)",
    ],
    answer: 0,
  },
  {
    question:
      "What is the output of the following code: console.log(typeof NaN);",
    options: ["A. number", "B. NaN", "C. undefined", "D. string"],
    answer: 0,
  },
  {
    question:
      "Which of the following methods is used to remove the last element from an array?",
    options: ["A. pop()", "B. push()", "C. shift()", "D. unshift()"],
    answer: 0,
  },
];

// Function to create quiz form
function createQuiz() {
  const quizForm = document.getElementById("quiz-form");
  questions.forEach((q, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options
              .map(
                (option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}" required>
                    ${option}
                </label>
            `
              )
              .join("")}
        `;
    quizForm.appendChild(questionElement);
  });
}

// Function to calculate score and show result
function showResult() {
  let score = 0;
  questions.forEach((q, index) => {
    const selected = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `You scored ${score} out of ${questions.length}`;
}

// Event listeners
document.getElementById("submit-quiz").addEventListener("click", showResult);

// Create the quiz on page load
createQuiz();
