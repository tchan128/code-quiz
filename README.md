<br />
<div align="center">
    <a href="https://github.com/tchan128/code-quiz"><img src="./assets/quiz-icon.png" alt="Logo" width="80" height="80"></a>
    <h3 align="center">Code Quiz</h3>
    <p align="center">
        The motivation for this project is to create a code quiz from scratch to let users test our their knowledge of javascript/HTML. In a wider scope with more questions, it will be super helpful for users who want to practice for technical interviews. I built this project because a big part of an interview for a software development position is the technical test that one might face. This acts as a practice for users who wants to prepare for that. It has a time limit and multiple fundamental questions to go through. As mentioned, more complicated questions can be added in the future as knowledge increases. This code quiz is a solution for users who are looking to just have a basic practice for free or to brush up on their coding knowledge. Through this project, I learned how actively user event listeners and understood the connection and affect it has on each other. Another big piece I learned to use is local storage and what we can do with that sort of information. Doing research, I also learned more limitations of local storage. 
        <br/>
        <br/>
        <a href="https://github.com/tchan128/code-quiz"><strong>Explore the docs »</strong></a>
    </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#visuals">Visuals</a></li>
    <li><a href="#credits">Credits</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About the Project

This project is a code quiz. This project is built with HTML, CSS, and Javascript. In this project, there are 2 main components: playing the game and checking your high score. A user will be able to press the "Start" button and start the code quiz to play the game. Once the time runs out or all the questions are answered, user will be given a score and a chance to submit their score and to check their high score. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

Nothing is needed to install this project. It is deployed on pages through Gitlab and can be accessed online. If this is being used as a template or source code for refactoring, one can download the code or clone the source code to their own repository.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
## Usage

In this project, a code quiz is built to help users practice their HTML/Javascript knowledge and also prepare for any technical interviews that are upcoming. Another source of usage is to expand this and change seconds/question bank to questions that are more relevant to topics that you want to practice for. 

When the website is loaded, the user can do one of two things: 1) Start quiz or 2) View high score. 

If user decides to start quiz (press Start), they will be prompted with a question and 4 choices. If the user answers correctly, they will be provided with "Correct!" feedback at the bottom. If the user answers incorrectly, they will be provided with "Wrong!" feedback at the bottom. They will go through 10 questions and will have 75 seconds. If time runs out, a "Time's Up" message will display, if they have answered all questions, a "Done!" message will display. Then, user will be prompted to submit their initials to submit save their score. 

Once the score is submitted, the user journey will be similar to viewing high score. If user selects to view high score prior starting the game, they will see a list of high scores that they have previously achieved. They will have the option to "Go Back" to return to the homepage or to "Clear high scores" to clear the list of scores listed there. The function for when user accesses this page via submitting their score will be the same. 

Here are a couple of things I've implemented that elevates the coding quiz:

- Time stopping if user is mid game and goes to see high score 
- Randomizing order of question
- User able to go back and forth between pages without having no questions in the bank to answer


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Visuals

1. Local Storage when multiple games are played 

## Roadmap

- [ ] Randomize order of choices
- [ ] Listing of high score in order
- [ ] A more complex point system that takes in the account time finished and accuracy 


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Credits

This code quiz was built from scratch, however the design of the quiz is derived from a sample that UofT Bootcamp provided. 

In addition to that, some websites that helped with the build of this code quiz includes:

- Event Listener MDN: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- Local Storage MDN: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- Stack OverFlow post for question storage: https://stackoverflow.com/questions/37252041/storing-quiz-questions-in-array-of-objects
- Set Interval MDN: https://developer.mozilla.org/en-US/docs/Web/API/setInterval

README icon is found here: https://www.shareicon.net/quiz-games-87561

The README template is found here: https://github.com/othneildrew/Best-README-Template

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Please refer to the LICENSE in the repo.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Tiffany Chan - tchan12899@gmail.com

Project Link: https://github.com/tchan128/code-quiz

<p align="right">(<a href="#readme-top">back to top</a>)</p>
