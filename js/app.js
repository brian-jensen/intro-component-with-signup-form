const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');

const rfc5322 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validate = input => {
  if (!input.value) {
    input.classList.add('error');
    input.nextElementSibling.classList.add('not-valid');
    input.nextElementSibling.textContent = `${input.placeholder} cannot be empty`;
  } else if (input.type === 'email' && !rfc5322.test(input.value)) {
    input.classList.add('error', 'error-email');
    input.nextElementSibling.classList.add('not-valid');
    input.nextElementSibling.textContent = 'Looks like this is not an email';
  } else {
    input.classList.remove('error', 'error-email');
    input.nextElementSibling.classList.remove('not-valid');
    input.nextElementSibling.textContent = '';
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  inputs.forEach(input => {
    validate(input);
  });

  if (!document.querySelectorAll('.error').length) {
    button.classList.add('flip', 'sent');
    button.classList.remove('hover');
    button.textContent = 'Successfully singed up! 🎉';
    button.disabled = true;
  }

});