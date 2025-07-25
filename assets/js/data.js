const QuizData = {
  html: [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Home Tool Markup Language",
        "Hyperlink and Text Markup Language",
      ],
      correctAnswer: 0,
      explanation:
        "HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.",
    },
    {
      id: 2,
      question: "Which HTML element is used for the largest heading?",
      options: ["<h6>", "<h1>", "<heading>", "<header>"],
      correctAnswer: 1,
      explanation:
        "The <h1> element represents the largest and most important heading in HTML.",
    },
    {
      id: 3,
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<lb>", "<br>", "<newline>"],
      correctAnswer: 2,
      explanation:
        "The <br> element is used to insert a single line break in HTML.",
    },
    {
      id: 4,
      question:
        "Which attribute specifies the URL of the page the link goes to?",
      options: ["link", "src", "href", "url"],
      correctAnswer: 2,
      explanation:
        "The href attribute specifies the URL of the page the link goes to in an <a> element.",
    },
    {
      id: 5,
      question: "What is the correct HTML for making a checkbox?",
      options: [
        '<input type="checkbox">',
        '<input type="check">',
        "<checkbox>",
        "<check>",
      ],
      correctAnswer: 0,
      explanation:
        'The correct syntax is <input type="checkbox"> to create a checkbox input.',
    },
    {
      id: 6,
      question: "Which HTML element defines navigation links?",
      options: ["<navigation>", "<nav>", "<navigate>", "<menu>"],
      correctAnswer: 1,
      explanation: "The <nav> element defines a section of navigation links.",
    },
    {
      id: 7,
      question: "What is the correct HTML for making a drop-down list?",
      options: ["<list>", "<select>", "<dropdown>", "<input type='list'>"],
      correctAnswer: 1,
      explanation: "The <select> element is used to create a drop-down list.",
    },
    {
      id: 8,
      question:
        "Which HTML attribute specifies an alternate text for an image?",
      options: ["title", "alt", "longdesc", "src"],
      correctAnswer: 1,
      explanation:
        "The alt attribute provides alternative text for an image if it cannot be displayed.",
    },
    {
      id: 9,
      question: "What is the correct HTML element for playing video files?",
      options: ["<movie>", "<media>", "<video>", "<play>"],
      correctAnswer: 2,
      explanation:
        "The <video> element is used to embed video content in HTML.",
    },
    {
      id: 10,
      question: "Which doctype is correct for HTML5?",
      options: [
        "<!DOCTYPE html>",
        "<!DOCTYPE HTML5>",
        "<!DOCTYPE HTML PUBLIC>",
        "<!DOCTYPE>",
      ],
      correctAnswer: 0,
      explanation: "The HTML5 doctype is simply <!DOCTYPE html>.",
    },
  ],

  css: [
    {
      id: 1,
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets",
      ],
      correctAnswer: 2,
      explanation:
        "CSS stands for Cascading Style Sheets, used for styling web pages.",
    },
    {
      id: 2,
      question:
        "Where in an HTML document is the correct place to refer to an external style sheet?",
      options: [
        "In the <body> section",
        "In the <head> section",
        "At the end of the document",
        "At the top of the document",
      ],
      correctAnswer: 1,
      explanation:
        "External style sheets should be referenced in the <head> section using the <link> element.",
    },
    {
      id: 3,
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<css>", "<script>", "<style>", "<link>"],
      correctAnswer: 2,
      explanation:
        "The <style> tag is used to define internal CSS within an HTML document.",
    },
    {
      id: 4,
      question: "Which is the correct CSS syntax?",
      options: [
        "body {color: black;}",
        "body:color=black;",
        "{body:color=black;}",
        "body=color:black;",
      ],
      correctAnswer: 0,
      explanation: "CSS syntax uses selector { property: value; } format.",
    },
    {
      id: 5,
      question:
        "How do you make each word in a text start with a capital letter?",
      options: [
        "text-transform: capitalize;",
        "text-transform: uppercase;",
        "text-style: capitalize;",
        "transform: capitalize;",
      ],
      correctAnswer: 0,
      explanation:
        "The text-transform: capitalize; property capitalizes the first letter of each word.",
    },
    {
      id: 6,
      question: "Which property is used to change the background color?",
      options: ["color", "bgcolor", "background-color", "bg-color"],
      correctAnswer: 2,
      explanation:
        "The background-color property is used to set the background color of an element.",
    },
    {
      id: 7,
      question: "How do you select an element with id 'demo'?",
      options: ["*demo", ".demo", "#demo", "demo"],
      correctAnswer: 2,
      explanation:
        "The # symbol is used to select elements by their id attribute.",
    },
    {
      id: 8,
      question: "How do you select elements with class name 'test'?",
      options: ["*test", ".test", "#test", "test"],
      correctAnswer: 1,
      explanation:
        "The . (dot) symbol is used to select elements by their class attribute.",
    },
    {
      id: 9,
      question: "Which property is used to change the font of an element?",
      options: ["font-weight", "font-style", "font-family", "font"],
      correctAnswer: 2,
      explanation:
        "The font-family property specifies the font for an element.",
    },
    {
      id: 10,
      question: "How do you make a list that lists items with numbers?",
      options: [
        "list-style-type: numbers;",
        "list-style-type: decimal;",
        "list-style-type: numeric;",
        "list-type: numbers;",
      ],
      correctAnswer: 1,
      explanation:
        "The list-style-type: decimal; property creates numbered list items.",
    },
  ],

  javascript: [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["<javascript>", "<js>", "<script>", "<scripting>"],
      correctAnswer: 2,
      explanation: "JavaScript code is placed inside <script> tags in HTML.",
    },
    {
      id: 2,
      question:
        "What is the correct syntax for creating a function in JavaScript?",
      options: [
        "function = myFunction() {}",
        "function myFunction() {}",
        "create myFunction() {}",
        "function:myFunction() {}",
      ],
      correctAnswer: 1,
      explanation:
        "Functions in JavaScript are declared using the 'function' keyword followed by the function name.",
    },
    {
      id: 3,
      question: "How do you write 'Hello World' in an alert box?",
      options: [
        "alertBox('Hello World');",
        "msg('Hello World');",
        "alert('Hello World');",
        "msgBox('Hello World');",
      ],
      correctAnswer: 2,
      explanation: "The alert() function displays a message in a dialog box.",
    },
    {
      id: 4,
      question: "How do you create a variable in JavaScript?",
      options: [
        "var carName;",
        "variable carName;",
        "v carName;",
        "create carName;",
      ],
      correctAnswer: 0,
      explanation:
        "Variables in JavaScript can be declared using 'var', 'let', or 'const' keywords.",
    },
    {
      id: 5,
      question: "Which operator is used to assign a value to a variable?",
      options: ["=", "*", "-", "x"],
      correctAnswer: 0,
      explanation: "The = operator is used for assignment in JavaScript.",
    },
    {
      id: 6,
      question: "What will the following code return: Boolean(10 > 9)",
      options: ["true", "false", "NaN", "undefined"],
      correctAnswer: 0,
      explanation: "Boolean(10 > 9) returns true because 10 is greater than 9.",
    },
    {
      id: 7,
      question: "How do you round the number 7.25 to the nearest integer?",
      options: [
        "Math.round(7.25)",
        "Math.rnd(7.25)",
        "round(7.25)",
        "rnd(7.25)",
      ],
      correctAnswer: 0,
      explanation: "Math.round() rounds a number to the nearest integer.",
    },
    {
      id: 8,
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
      correctAnswer: 1,
      explanation: "The onclick event occurs when an element is clicked.",
    },
    {
      id: 9,
      question: "How do you declare a JavaScript array?",
      options: [
        "var colors = 'red', 'green', 'blue'",
        "var colors = (1:'red', 2:'green', 3:'blue')",
        "var colors = ['red', 'green', 'blue']",
        "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      ],
      correctAnswer: 2,
      explanation:
        "Arrays in JavaScript are declared using square brackets [].",
    },
    {
      id: 10,
      question: "What is the correct way to write a JavaScript array?",
      options: [
        "var colors = 'red', 'green', 'blue'",
        "var colors = ['red', 'green', 'blue']",
        "var colors = 'red'; 'green'; 'blue'",
        "var colors = (red, green, blue)",
      ],
      correctAnswer: 1,
      explanation:
        "JavaScript arrays are written with square brackets and comma-separated values.",
    },
  ],
};


