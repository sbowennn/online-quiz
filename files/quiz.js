const questions = [
  {
  // question 1 
    question: "What does HTML stand for?",
    options: [
      "Human Text Modeling Language",
      "Hypertext Markup Language",
      "Hyper Tool Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 1
  },
  {
  // question 2
    question: "Which html tag contains a web page's metadata?",
    options: [
      "<head>",
      "<metadata>",
      "<body>",
      "<html>"
    ],
    answer: 0
  },
  {
  // question 3 
    question: "What is the difference between the elements <ul> and <ol>?",
    options: [
      "There is no visual difference.",
      "<ul> shows the content, <ol> hides the content.",
      "<ul> outputs a bullet points' list and <ol> outputs a numbered list.",
      "<ol> outputs a numbered list and <ul> outputs a bullet points' list."
    ],
    answer: 2
  },
  {
  // question 4 
    question: "What is true about the <video> tag?",
    options: [
      "The width and height of the video must be specified.",
      "The <video> element is not a self-closing tag.",
      "This valid self-closing tag ends with />.",
      "This tag displays only images with captions."
    ],
    answer: 1
  },
  {
  // question 5 
    question: "Select the tag below that is NOT self-closing.",
    options: [
      "<hr>",
      "<meta>",
      "<area>",
      "<textarea>"
    ],
    answer: 3
  },
  {
  // question 6 
    question: "What is the <link> tag used for in HTML files?",
    options: [
      "To make sure all links are styled correctly on the page.",
      "To embed an external HTML file into the current document for additional page content.",
      "To link a specific stylesheet file to an HTML file so styles get applied on the page.",
      "To make sure the hyperlink that navigates to another webpage is defined."
    ],
    answer: 2
  },
  {
  // question 7 
    question: "The abbreviation CSS stands for?",
    options: [
      "Cascading Style Sheets",
      "Custom Styling Sheets",
      "Creative Style Sheets",
      "Content Styling Sheets"
    ],
    answer: 0
  },
  {
  // question 8 
    question: "Which is the correct way to link style.css to index.html?",
    options: [
      "<link style.css stylesheet>",
      "<link href='main.css' rel='style.css'",
      "<link href='stylesheet' rel='style.css'>",
      "<link href='style.css' rel='stylesheet'>"
    ],
    answer: 3
  },
  {
  // question 9 
    question: "Which of the following is accomplished by separating HTML and CSS files?",
    options: [
      "Enhances webpage load time.",
      "Code is easier to read and maintain.",
      "CSS selectors are more specific",
      "Better-looking CSS styles."
    ],
    answer: 1
  },
  {
  // question 10 
    question: "Which is the correct syntax to style multiple selectors?",
    options: [
      ".nav-menu; p { };",
      ".nav-menu: p { };",
      "#nav-menu; p { };",
      "#nav.menu, p { };"
    ],
    answer: 3
  },
  {
  // question 11 
    question: "Which is the correct syntax to select an element inside another element?",
    options: [
      ".home-text li { };",
      ".home-text_li { };",
      ".home-text[li] { };",
      ".home-text=li { };"  
    ],
    answer: 0
  },
  {
  // question 12 
    question: "How to set the top and bottom margins to 32 pixels, and left and right margins to 16 pixels?",
    options: [
      "margins: 32px 16px",
      "margins: 16px 32px 16px 32px",
      "margin: 32px 16px",
      "margin: 16px 32px 32px 16px"
    ],
    answer: 2
  },
  ];


  let currentQuestionIndex = 0;
  let score = 0;

  // Randomise 
  const randomQuestions = [...questions].sort(() => Math.random() - 0.5);

  
  // DOM Elements
  const questionElement = document.querySelector(".question");
  const optionsElement = document.querySelector(".options");
  const nextButton = document.getElementById("next-button");
  const resultElement = document.getElementById("result");
  const questionNumber = document.getElementById("q-number");
  const feedbackElement = document.getElementById("feedback");
  
  function loadQuestion() {
    const currentQuestion = randomQuestions[currentQuestionIndex];
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${randomQuestions.length}`;
    questionElement.textContent = currentQuestion.question; 
    
    // Clear old options
    optionsElement.innerHTML = "";
    feedbackElement.textContent = "";
  
    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => selectAnswer(index);
      li.appendChild(button);
      optionsElement.appendChild(li);
    });
  
    nextButton.classList.add("hidden");
  }
  
  function selectAnswer(selectedIndex) {
    const correctAnswer = randomQuestions[currentQuestionIndex].answer;
    if (selectedIndex === correctAnswer) {
      score++;
      feedbackElement.textContent = "Correct! 🎉";
      feedbackElement.style.color = "green";
    } else {
      feedbackElement.textContent = `Incorrect. 😞 The correct answer is: ${randomQuestions[currentQuestionIndex].options[correctAnswer]}`;
      feedbackElement.style.color = "red";
    }
    nextButton.classList.remove("hidden");
  }
  
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultElement.classList.remove("hidden");
  

  // Percentage Calculation
  const percentage = ((score / randomQuestions.length) * 100).toFixed(2);

  // Result with percentage 
  resultElement.innerHTML = `
  <p>You scored ${score} out of ${randomQuestions.length}!</p>
  <p>Your score percentage is ${percentage}%.</p>
  `
  }

  nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < randomQuestions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  };
  
  // Initialise Quiz
  loadQuestion();