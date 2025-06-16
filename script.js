let form = document.getElementById('quizForm');
let resultDiv = document.getElementById('result');
let resultImage = document.getElementById('resultImage');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let happy = 0, sad = 0, mad = 0, disappointed = 0, hungry = 0;
  let questions = ['q1', 'q2', 'q3', 'q4'];

  for (let i = 0; i < questions.length; i++) {
    let answer = document.querySelector('input[name="' + questions[i] + '"]:checked');
    if (answer !== null) {
      if (answer.value === 'happy') happy++;
      else if (answer.value === 'sad') sad++;
      else if (answer.value === 'mad') mad++;
      else if (answer.value === 'disappointed') disappointed++;
      else if (answer.value === 'hungry') hungry++;
    }
  }

  let highest = 'happy';
  let maxScore = happy;

  if (sad > maxScore) {
    highest = 'sad'; maxScore = sad;
  }
  if (mad > maxScore) {
    highest = 'mad'; maxScore = mad;
  }
  if (disappointed > maxScore) {
    highest = 'disappointed'; maxScore = disappointed;
  }
  if (hungry > maxScore) {
    highest = 'hungry'; maxScore = hungry;
  }

  let message = "";

  if (highest === 'happy') {
    message = "😊 You're Happy Gabriel! Full of joy and positivity!";
    resultImage.src = "assets/happy.jpeg";

  } else if (highest === 'sad') {
    message = "😢 You're Sad Gabriel. Deep, reflective, and soft-hearted.";
    resultImage.src = "assets/sad.jpeg";

  } else if (highest === 'mad') {
    message = "😡 You're Mad Gabriel! Fierce, fiery, and passionate.";
    resultImage.src = "assets/mad.jpeg";

  } else if (highest === 'disappointed') {
    message = "😐 You're Disappointed Gabriel. Realistic and wise beyond your years.";
    resultImage.src = "assets/shocked.jpeg";

  } else if (highest === 'hungry') {
    message = "🍕 You're Hungry Gabriel! Always on the hunt for flavor and fun!";
    resultImage.src = "assets/hungry.jpeg";
  }

  resultDiv.textContent = message;
  resultImage.style.display = "block";

  document.getElementById('restartButton').addEventListener('click', function() {
  window.location.reload();
});
});
