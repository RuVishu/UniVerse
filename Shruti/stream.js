const classButton = document.getElementById('class');
const streamButton = document.getElementById('str');
const peopleButton = document.getElementById('people');

const stream = document.querySelector('.stream');
const classwork = document.querySelector('.classwork');
const people = document.querySelector('.people');


function setActiveTab(activeBtn, inactiveBtn1,inactiveBtn2, showEl, hideEl,hideE2) {
  activeBtn.classList.add('active');
  inactiveBtn1.classList.remove('active');
  inactiveBtn2.classList.remove('active');
  showEl.style.display = "block";
  hideEl.style.display = "none";
  hideE2.style.display = "none";
}

classwork.style.display = "none";
people.style.display = "none";

classButton.addEventListener('click', () => {
  setActiveTab(classButton, streamButton,peopleButton, classwork, stream,people);
});

streamButton.addEventListener('click', () => {
  setActiveTab(streamButton, classButton,peopleButton, stream, classwork,people);
});

peopleButton.addEventListener('click', () => {
  setActiveTab(peopleButton,streamButton, classButton,people, stream, classwork);
});
