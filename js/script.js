

const form = document.querySelector('form')
const inputName = document.querySelector('input[name="name"]')
const message = document.querySelector('.thanks')
const inputEmail = document.querySelector('input[name="email"]')
const inputCel = document.querySelector('input[name="tel"]')


let isValidForm = false

const resetInput = (elem) => {
    elem.classList.remove('invalid')
    elem.nextElementSibling.classList.add('error-hidden')
}

const invalidateElem = (elem) => {
    elem.classList.add('invalid')
    elem.nextElementSibling.classList.remove('error-hidden')
    isValidForm = false
  }

  const validateInput = () => {
    isValidForm = true
    if (!inputName.value) {
        invalidateElem(inputName)
      }
      if (!isValidEmail(inputEmail.value)) {
        invalidateElem(inputEmail)
      }
      if (!(inputCel.value)) {
        invalidateElem(inputCel)
      }

      
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateInput()
    if (isValidForm) {
        form.remove()
        message.classList.remove('error-hidden')
        console.log('Validou enviou')
  }
})
inputName.addEventListener('input', () => {
    resetInput(inputName)
  })

  //validação email
  function isValidEmail(email){
    const EmailRegex = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(EmailRegex.test(email)) {
      return true;
    }
    return false;
  }

  









