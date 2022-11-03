 import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";


form.addEventListener('submit', saveData);


function saveData(evt) {
    evt.preventDefault();
    const {
    elements: { email, message }
  } = evt.currentTarget;

    const data = {
        email: email.value,
        message: message.value,
    } 
    if (data === null) {
        localStorage.clear('data', JSON.stringify(data));
    } else {
          localStorage.setItem('data', JSON.stringify(data));
localStorage.getItem('timeupdate', throttle(saveData, 500));

    }
        console.log(data);
  form.reset();
}

