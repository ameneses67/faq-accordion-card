// selectors
const questions = document.querySelectorAll(".accordion__question");

// event listeners
questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("opened");

    const answer = question.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
