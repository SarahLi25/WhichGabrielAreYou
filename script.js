
let form = document.getElementById("quiz-form");
let resultText = document.getElementById("result-text");
let resultImage = document.getElementById("result-image");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page from reloading on form submission

  // Initialize scores for each possible result
  let happy = 0, sad = 0, mad = 0, disappointed = 0, hungry = 0;
  const questions = ["q1", "q2", "q3", "q4", "q5"];

  // Loop through each question and tally the selected answer
  for (let i = 0; i < questions.length; i++) {
    let answer = document.querySelector('input[name="' + questions[i] + '"]:checked');
    if (answer !== null) {
      if (answer.value === "happy") happy++;
      else if (answer.value === "sad") sad++;
      else if (answer.value === "mad") mad++;
      else if (answer.value === "disappointed") disappointed++;
      else if (answer.value === "hungry") hungry++;
    }
  }

  // Find the category with the highest score
  let highest = "happy";
  let maxScore = happy;

  if (sad > maxScore) {
    highest = "sad"; maxScore = sad;
  }
  if (mad > maxScore) {
    highest = "mad"; maxScore = mad;
  }
  if (disappointed > maxScore) {
    highest = "disappointed"; maxScore = disappointed;
  }
  if (hungry > maxScore) {
    highest = "hungry"; maxScore = hungry;
  }

  // Set result text and image based on the winning category
  let message = "";
  let imagePath = "";

  if (highest === "happy") {
    message = "😊 You're Happy Gabriel! Full of joy and sunshine.";
    imagePath = "assets/happy.jpeg";
  } else if (highest === "sad") {
    message = "😢 You're Sad Gabriel! It’s okay to feel things deeply.";
    imagePath = "assets/sad.jpeg";
  } else if (highest === "mad") {
    message = "😡 You're Mad Gabriel! You’ve got that fiery passion.";
    imagePath = "assets/mad.jpeg";
  } else if (highest === "disappointed") {
    message = "😔 You're Disappointed Gabriel! You had higher hopes.";
    imagePath = "assets/shocked.jpeg";
  } else if (highest === "hungry") {
    message = "🍕 You're Hungry Gabriel! Food is your love language.";
    imagePath = "assets/hungry.jpeg";
  }

  // Show result on the page
  resultText.textContent = message;
  resultImage.src = imagePath;
  resultImage.style.display = "block";
});