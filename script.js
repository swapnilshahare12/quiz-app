let username = document.getElementById('user-name');
let userName = document.getElementById('username');
let enterBtn = document.getElementById('enter');
let error = document.getElementById('error');
let score = document.getElementById('score');
let section = document.getElementById('section');
let categoryName = document.getElementById('category-name')
let category1Btn = document.getElementById('category1btn');
let category2Btn = document.getElementById('category2btn');
let category3Btn = document.getElementById('category3btn');
let category4Btn = document.getElementById('category4btn');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let startScreen = document.getElementById('start-screen');
let displayContainer = document.getElementById('display-container');
let resultContainer = document.getElementById('result-container');
let nextBtn = document.getElementById('next-btn');
let question = document.getElementById('question');
let countOfQuestion = document.getElementById('number-of-question');
let goToHome = document.getElementById('gotohome');
let startAgain = document.getElementById('startagain');
let time = document.getElementById('time');
let correct = document.getElementById('correct');
let wrong = document.getElementById('wrong');
let percentage = document.getElementById('percentage');
let questionCount;
let scoreCount = 0;
let count = 11;
let attempted = 0;
let attemptedQue = document.getElementById('attempted');
let totalTime = 0;
let timeTaken = document.getElementById('timetaken');
let yourScore = document.getElementById('yourscore');

const quizArray = [
  {
    id: '0',
    question:
      'Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long it will take to fill the tank?',
    options: ['10 mins', '12 mins', '15 mins', '20 mins'],
    correct: '12 mins',
  },
  {
    id: '1',
    question:
      'Pipe A can fill a tank in 45 hrs and pipe B can fill it in 36 hrs. If both the pipes are opened in the empty tank. In how many hours will it be full?',
    options: ['10 hr', '15 hr', '20 hr', '28 hr'],
    correct: '20 hr',
  },
  {
    id: '2',
    question:
      'Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?',
    options: [
      '10 min. 20 sec',
      '11 min. 45 sec',
      '12 min. 30 sec',
      '14 min. 40 sec',
    ],
    correct: '14 min. 40 sec',
  },
  {
    id: '3',
    question:
      'Pipe A can fill a tank in 5 hours, pipe B in 10 hours and pipe C in 30 hours. If all the pipes are open, in how many hours will the tank be filled?',
    options: ['2', '2.5', '3', '3.5'],
    correct: '3',
  },
  {
    id: '4',
    question:
      'Two pipes can fill a tank in 20 minutes and 30 minutes respectively. If both the pipes are opened simultaneously, then the tank will be filled in',
    options: ['10 minutes', '12 minutes', '15 minutes', '25 minutes'],
    correct: '12 minutes',
  },
  {
    id: '5',
    question:
      'A tap fill a pot in two hours because of a hole to the pot, it took 2 1/3 hours. Calculate the time needed for hole to emptied the pot completely?',
    options: ['14', '12', '17', '19'],
    correct: '14',
  },
  {
    id: '6',
    question:
      'A water tank is two-fifth full. Pipe A can fill a tank in 10 minutes and pipe B can empty in 6 minutes. If both the pipes are open, how long will it take to empty or fill the tank completely?',
    options: [
      '6 min to empty',
      '7 min to full',
      '6 min to full',
      '7 min to empty',
    ],
    correct: '6 min to empty',
  },
  {
    id: '7',
    question:
      'A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in?',
    options: ['16 hrs', '20 hrs', '25 hrs', '40 hrs'],
    correct: '40 hrs',
  },
  {
    id: '8',
    question:
      'A cistern is normally filled in 8 hrs. but takes 2 hrs. longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in?',
    options: ['16 hrs', '40 hrs', '25 hrs', '20 hrs'],
    correct: '40 hrs',
  },
  {
    id: '9',
    question:
      'Two pipes X and Y can fill a tank in 24 minutes and 36 minutes respectively. If both the pipes are opened simultaneously, after what time should Y be closed so that the tank is full in 18 minutes?',
    options: ['6 min', '12 min', '10 min', '9 min'],
    correct: '9 min',
  },
];

const quizArray2 = [
  {
    id: '0',
    question:
      'An event in the probability that will never be happened is called as',
    options: [
      'Unsure event',
      'Sure event',
      'Possible event',
      'Impossible event',
    ],
    correct: 'Impossible event',
  },
  {
    id: '1',
    question: 'What will be the value of P(not E) if P(E) = 0.07?',
    options: ['90', '007', '0.93', '72'],
    correct: '0.93',
  },
  {
    id: '2',
    question:
      'What will be the probability of getting odd numbers if a dice is thrown?',
    options: ['1/2', '2', '4/2', '5/2'],
    correct: '1/2',
  },
  {
    id: '3',
    question:
      'What is the probability of getting a sum as 3 if a dice is thrown?',
    options: ['2/18', '1/18', '4', '1/36'],
    correct: '1/18',
  },
  {
    id: '4',
    question:
      'What is the probability of getting an even number when a dice is thrown?',
    options: ['1/6', '1/2', '1/3', '1/4'],
    correct: '1/2',
  },
  {
    id: '5',
    question:
      'The probability of getting two tails when two coins are tossed is -',
    options: ['1/6', '1/2', '1/3', '1/4'],
    correct: '1/4',
  },
  {
    id: '6',
    question:
      'What is the probability of getting the sum as a prime number if two dice are thrown?',
    options: ['5/24', '5/12', '5/30', '1/4'],
    correct: '5/12',
  },
  {
    id: '7',
    question:
      'What is the probability of getting atleast one head if three unbiased coins are tossed?',
    options: ['7/8', '1/2', '5/8', '8/9'],
    correct: '7/8',
  },
  {
    id: '8',
    question:
      'What is the probability of getting 1 and 5 if a dice is thrown once?',
    options: ['1/6', '1/3', '2/3', '8/9'],
    correct: '1/3',
  },
  {
    id: '9',
    question:
      'What will be the probability of losing a game if the winning probability is 0.3?',
    options: ['0.5', '0.6', '0.7', '0.8'],
    correct: '0.7',
  },
];

const quizArray3 = [
  {
    id: '0',
    question:
      "Father is four times the age of his daughter. If after 5 years, he would be threee times of daughter\'s age, then further after 5 years, how many times he would be of his daughter\'s age?",
    options: ['1.5 times', '2 times', '2.5 times', '3 times'],
    correct: '2.5 times',
  },
  {
    id: '1',
    question:
      'What is Aman\'s present age &sbquo; if after 20 years his age will be 10 times his age 10 years back?',
    options: ['6.2 years', '7.7 years', '13.3 years', '10 years'],
    correct: '13.3 years',
  },
  {
    id: '2',
    question:
      'Nisha is 15 years elder to Romi. If 5 years ago, Nisha was 3 times as old as Romi, then find Nisha’s present age.',
    options: ['32.5 years', '27.5 years', '25 years', '24.9 years'],
    correct: '27.5 years',
  },
  {
    id: '3',
    question:
      'One year ago, the ratio of Honey and Piyush ages was 2: 3 respectively. After five years from now, this ratio becomes 4: 5. How old is Piyush now?',
    options: ['5 years', '25 years', '10 years', '15 years'],
    correct: '10 years',
  },
  {
    id: '4',
    question:
      'Ten years ago, the age of mother was three times the age of her son. After ten years, mother&rsquo;s age will be twice that of his son. Find the ratio of their present ages.',
    options: ['11 : 7', '9 : 5', '7 : 4', '7 : 3'],
    correct: '7 : 3',
  },
  {
    id: '5',
    question:
      'Saransh is 50 years old and Nazma is 40 years old. How long ago was the ratio of their ages 3:2?',
    options: ['20 years', '30 years', '40 years', '25 years'],
    correct: '20 years',
  },
  {
    id: '6',
    question:
      'The ratio of the present ages of Pranav and Qureshi is 4:5. Five years ago, the ratio of their ages was 7:9. Find their present ages? (In years)',
    options: ['40, 50', '18, 25', '40, 60', '20, 25'],
    correct: '40, 50',
  },
  {
    id: '7',
    question:
      'A man said to his son, "I was one-third of your present age when you were born". If the present age of the man is 48 years, find the present age of the son.',
    options: ['25.7 years', '28 years', '29.3 years', '36 years'],
    correct: '36 years',
  },
  {
    id: '8',
    question:
      'Dinesh is younger to Roshan by 9 years. If their ages are in the respective ratio of 4:5, how old is',
    options: ['36 years', '23years', '29 years', 'Cannot be determined'],
    correct: '36 years',
  },
  {
    id: '9',
    question:
      'The ratio of Sara&rsquo;s age 4 years ago and Vaishali&rsquo;s age after 4 years is 1: 1. Presently, the ratio of their ages is 5: 3. Find the ratio between Sara&rsquo;s age 4 years hence and Vaishali&rsquo;s age 4 years ago.',
    options: ['1 : 3', '3 : 1', '4 : 3', '3 : 4'],
    correct: '3 : 1',
  },
];
const quizArray4 = [
  {
    id: '0',
    question:
      'A person sold a stove for Rs. 423 and incurred a loss of 6%. At what price would it be sold so as to earn a profit of 8%?',
    options: ['Rs. 525', 'Rs. 500', 'Rs. 490', 'Rs. 486'],
    correct: 'Rs. 486',
  },
  {
    id: '1',
    question:
      'A fruit seller buys lemons at 2 for a rupee and sells then at 5 for three rupees. His gain percent is',
    options: ['10%', '15%', '20%', '25%'],
    correct: '20%',
  },
  {
    id: '2',
    question:
      'A sells a car to B at 10% loss. If B sells it for Rs. 54000 and gains 20%, the cost price of the car for A was',
    options: ['Rs. 25000', 'Rs. 50000', 'Rs. 37500', 'Rs. 60000'],
    correct: 'Rs. 50000',
  },
  {
    id: '3',
    question:
      'Ramesh sold a statue for a price 25% higher than the original price of the statue. He had however bought the statue at 20% discount on the original price. With the profit of Rs. 2025, find the original price of the statue.',
    options: ['Rs. 6000', 'Rs. 7500', 'Rs. 3500', 'Rs. 4500'],
    correct: 'Rs. 4500',
  },
  {
    id: '4',
    question:
      'If selling price of 40 articles is equal to cost price of 50 articles, the loss or gain percent is',
    options: ['25% loss', '20% loss', '25% gain', '20% gain'],
    correct: '20% gain',
  },
  {
    id: '5',
    question:
      'Two bicycles were sold for Rs. 3990 each, gaining 5% on one and losing 5% on the other. The gain or loss percent on the whole transaction is',
    options: ['Neither gain nor loss', '2.5% gain', '2.5% loss', '0.25% loss'],
    correct: '0.25% loss',
  },
  {
    id: '6',
    question:
      'The ratio of cost price and selling price is 4:5. The profit percent is',
    options: ['10%', '20%', '25%', '30%'],
    correct: '25%',
  },
  {
    id: '7',
    question:
      'If a person sells a ‘sari’ for Rs. 5200, making a profit of 30%, then the cost price of the sari is',
    options: ['Rs. 4420', 'Rs. 4000', 'Rs. 3900', 'Rs. 3800'],
    correct: 'Rs. 4000',
  },
  {
    id: '8',
    question:
      'A shopkeeper earns a profit of 15% after selling a book at 20% discount on the printed price. The ratio of the cost price and printed price of the book is?',
    options: ['20:23', '23:20', '16:23', '23:16'],
    correct: '16:23',
  },
  {
    id: '9',
    question:
      'Simran bought pet food worth Rs. 56000. She then sold 1/3rd of it incurring a loss of 40%. What profit she must earn on rest of the supplies to nullify this loss?',
    options: ['25%', '20%', '45%', '50%'],
    correct: '20%',
  },
];

enterBtn.addEventListener('click', () => {
  if (isNaN(username.value)) {
    userName.innerText = username.value;
    username.classList.remove('err');
    error.innerHTML = '👋 HELLO ' + username.value + ' Select Category Below';
    /* -------------------------------- category1 ------------------------------- */
    category1Btn.addEventListener('click', () => {
     nextQue(quizArray);
      startScreen.classList.add('hide');
      displayContainer.classList.remove('hide');
      initial(quizArray);
      option1.addEventListener('click', (e) => {
        nextBtn.style.visibility = "visible"
        checker(e.target, quizArray);
      });
      option2.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray);
      });
      option3.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray);
      });
      option4.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray);
      });
    });
    /* -------------------------------- category2 ------------------------------- */
    category2Btn.addEventListener('click', () => {
      nextQue(quizArray2);
       categoryName.innerText = 'Probablity';
      startScreen.classList.add('hide');
      displayContainer.classList.remove('hide');
      initial(quizArray2);
      option1.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray2);
      });
      option2.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray2);
      });
      option3.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray2);
      });
      option4.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray2);
      });
    });
    /* -------------------------------- category3 ------------------------------- */
    category3Btn.addEventListener('click', () => {
      nextQue(quizArray3);
       categoryName.innerText = 'Problem On Ages';
      startScreen.classList.add('hide');
      displayContainer.classList.remove('hide');
      initial(quizArray3);
      option1.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray3);
      });
      option2.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray3);
      });
      option3.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray3);
      });
      option4.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray3);
      });
    });
    /* -------------------------------- category4 ------------------------------- */
    category4Btn.addEventListener('click', () => {
      nextQue(quizArray4);
      categoryName.innerText = 'Profit And Loss';
      startScreen.classList.add('hide');
      displayContainer.classList.remove('hide');
      initial(quizArray4);
      option1.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray4);
      });
      option2.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray4);
      });
      option3.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray4);
      });
      option4.addEventListener('click', (e) => {
        nextBtn.style.visibility = 'visible';
        checker(e.target, quizArray4);
      });
    });
  } else {
    error.innerHTML = 'Please enter your valid name first';
    username.classList.add('err');
  }
  
  /* --------------------------------- second --------------------------------- */
  username.addEventListener('input', () => {
    if (username.value.trim() === '') {
      username.classList.add('err');
      error.innerHTML = 'Please enter your name first';
    } else {
      username.classList.remove('err');
    }
  });
});
 
category1Btn.addEventListener('click', () => {
  error.innerHTML = 'Please enter your valid name first';
  username.classList.add('err');
});
category2Btn.addEventListener('click', () => {
  error.innerHTML = 'Please enter your valid name first';
  username.classList.add('err');
});
category3Btn.addEventListener('click', () => {
  error.innerHTML = 'Please enter your valid name first';
  username.classList.add('err');
});
category4Btn.addEventListener('click', () => {
  error.innerHTML = 'Please enter your valid name first';
  username.classList.add('err');
});
username.addEventListener('input', () => {
  if (username.value.trim() === '') {
    username.classList.add('err');
    error.innerHTML = 'Please enter your name first';
  } else {
    username.classList.remove('err');
  }
});

function nextQue(catNo) {
  nextBtn.addEventListener(
    
    'click',
    (displayNext = () => {
      nextBtn.style.visibility = 'hidden';
      time.classList.remove('red');
      clearInterval(countdown);
      timerDisplay();
      option1.classList.remove('correct');
      option2.classList.remove('correct');
      option3.classList.remove('correct');
      option4.classList.remove('correct');
      option1.classList.remove('incorrect');
      option2.classList.remove('incorrect');
      option3.classList.remove('incorrect');
      option4.classList.remove('incorrect');
      option1.disabled = false;
      option2.disabled = false;
      option3.disabled = false;
      option4.disabled = false;
      questionCount++;
      if (questionCount === catNo.length) {
        clearInterval(countdown);
        displayContainer.classList.add('hide');
        resultContainer.classList.remove('hide');
        result(catNo);
      } else {
        if (questionCount === catNo.length - 1) {
          nextBtn.innerText = 'Finish';
        }
        quizDisplay(questionCount, catNo);
        countOfQuestion.innerHTML = questionCount + 1 + '/' + catNo.length;
      }
    })
  );
}

goToHome.addEventListener('click', () => {
  location.reload();
});
function startAgainFunc(catNo) {
  startAgain.addEventListener('click', () => {
    resultContainer.classList.add('hide');
    displayContainer.classList.remove('hide');
    nextBtn.innerText = 'Next Question';
    attempted = 0;
    totalTime = 0;
    score.innerText = `SCORE:0`;
    clearInterval(countdown);
    initial(catNo);
  });
}


function quizDisplay(questionCount, catNo) {
  countOfQuestion.innerHTML = questionCount + 1 + '/' + quizArray.length;
  question.innerHTML = catNo[questionCount].question;
  option1.innerHTML = catNo[questionCount].options[0];
  option2.innerHTML = catNo[questionCount].options[1];
  option3.innerHTML = catNo[questionCount].options[2];
  option4.innerHTML = catNo[questionCount].options[3];
}

function checker(userselectedopt, catNo) {
  attempted++;
  let userselectedoption = userselectedopt.innerText;
  if (userselectedoption === catNo[questionCount].correct) {
    const audio = document.createElement('audio');
    audio.setAttribute('autoplay', '');
    audio.setAttribute('src', 'correct.mp3');
    section.appendChild(audio);
    userselectedopt.classList.add('correct');
    scoreCount++;
    score.innerText = 'SCORE:' + scoreCount;
  } else {
    const audio = document.createElement('audio');
    audio.setAttribute('autoplay', '');
    audio.setAttribute('src', 'incorrect.mp3');
    section.appendChild(audio);
      if (navigator) {
        navigator.vibrate(500);
      }
    userselectedopt.classList.add('incorrect');
    if (option1.innerText === catNo[questionCount].correct) {
      option1.classList.add('correct');
    }
    if (option2.innerText === catNo[questionCount].correct) {
      option2.classList.add('correct');
    }
    if (option3.innerText === catNo[questionCount].correct) {
      option3.classList.add('correct');
    }
    if (option4.innerText === catNo[questionCount].correct) {
      option4.classList.add('correct');
    }
  }
  clearInterval(countdown);
  totalTime += count;
  option1.disabled = true;
  option2.disabled = true;
  option3.disabled = true;
  option4.disabled = true;
}
function result(catNo) {
  correct.innerText = scoreCount;
  percentage.innerText = (scoreCount * 100) / 10 + '.00%';
  attemptedQue.innerText = attempted;
  wrong.innerText = attempted - scoreCount;
  timeTaken.innerText = totalTime;
  yourScore.innerText = scoreCount;
  startAgainFunc(catNo)
}
const timerDisplay = () => {
  count = 11;
  countdown = setInterval(() => {
    count--;
    time.innerHTML = `${count}s`;
    if (count == 0) {
      time.classList.add('red');
      clearInterval(countdown);
      displayNext();
    }
    if (count < 6) {
      time.classList.add('red');
    }
  }, 1000);
};
function initial(catNo) {
  questionCount = 0;
  scoreCount = 0;
  timerDisplay();
  quizDisplay(questionCount, catNo);
}
