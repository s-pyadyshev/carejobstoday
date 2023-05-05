export const quiz = (function () {
  const init = function () {
    let isQuizStarted = false;
    const quickStart = document.querySelector(".js-quiz-start");
    const quizQuestionIntro = document.querySelector(".quiz__intro");
    const quizQuestionWrap = document.querySelector(".quiz__question-wrap");
    const quizQuestions = document.querySelectorAll(".quiz__question");
    const nextQuestions = document.querySelectorAll(".quiz__next");
    const prevQuestions = document.querySelectorAll(".quiz__prev");
    const quizProgressLine = document.querySelector(".progress__line");
    // const quizProgressDividers = document.querySelector(".progress__dividers");
    const quizProgressCurrent = document.querySelector(
      ".progress__questions-current"
    );
    const quizProgressTotal = document.querySelector(
      ".progress__questions-total"
    );
    const quizProgressStats = document.querySelector(".progress__questions");
    let currentQuestionNumber = 1;
    const questionsAmount = quizQuestions.length;
    const progressLineRatio = 100 / questionsAmount;

    quizProgressTotal.textContent = questionsAmount;

    quickStart.addEventListener("click", () => {
      quizQuestionWrap.classList.toggle("active");
      quizQuestionIntro.classList.toggle("hidden");
      quizQuestions[0].classList.add("active");
      quizProgressStats.classList.add("active");
      isQuizStarted = true;
      quizProgressLine.setAttribute(
        "value",
        currentQuestionNumber * progressLineRatio
      );
      quizProgressCurrent.textContent = currentQuestionNumber;
    });

    nextQuestions.forEach((button, index) => {
      button.addEventListener("click", () => {
        quizQuestions.forEach(() => {
          quizQuestions[index].classList.remove("active");
          quizQuestions[index + 1].classList.add("active");
        });
        currentQuestionNumber += 1;
        quizProgressLine.setAttribute(
          "value",
          currentQuestionNumber * progressLineRatio
        );
        quizProgressCurrent.textContent = currentQuestionNumber;
      });
    });

    prevQuestions.forEach((button, index) => {
      button.addEventListener("click", () => {
        quizQuestions.forEach(() => {
          quizQuestions[index + 1].classList.remove("active");
          quizQuestions[index].classList.add("active");
        });
        currentQuestionNumber -= 1;
        quizProgressLine.setAttribute(
          "value",
          currentQuestionNumber * progressLineRatio
        );
        quizProgressCurrent.textContent = currentQuestionNumber;
      });
    });
  };

  return {
    init,
  };
})();
