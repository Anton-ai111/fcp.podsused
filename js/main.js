const weightInput = document.getElementById('weight');
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
  const weight = parseInt(weightInput.value);
  if (weight >= 60) {
    alert('Prolazna kilaža!');
  } else {
    alert('Nemaš dovoljnu kilažu (60 kg minimum)!');
  }
});