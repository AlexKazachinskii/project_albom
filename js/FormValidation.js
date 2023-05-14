class FormValidation {
  constructor(popup) {
    this.popup = popup
    this.resetPopup = this.resetPopup.bind(this)
  }

  init() {
    const button = this.popup.querySelector('.popup__button')
    this.button = button
    const popupForm = this.popup.querySelector('.popup__form')
    this.popupForm = popupForm
    const inputsList = this.popup.querySelectorAll('input')
    const inputsArray = Array.prototype.slice.call(inputsList)
    this.inputs = inputsArray
    const closeButton = this.popup.querySelector('.popup__close')
    this.closeButton = closeButton
    const popupButton = this.popup.querySelector('.popup__button')
    this.popupButton = popupButton
    const errorMessages = this.popup.querySelectorAll('.error')
    this.errorMessages = errorMessages
  }


  setSubmitButtonState() {
    this.init()
    if (this.popupForm.checkValidity()) {
      this.button.removeAttribute('disabled')
    } else {
      this.button.setAttribute('disabled', true)
    }
  }


  checkInputValidity(input) {
    const error = this.popup.querySelector(`#${input.name}-error`)
    this.error = error
    if (input.validity.tooShort) {

      this.error.textContent = 'Должно быть от 2 до 30 символов'

    } else if (input.validity.valueMissing) {

      this.error.textContent = 'Это обязательное поле'

    } else if (input.validity.typeMismatch) {
      this.error.textContent = 'Здесь должна быть ссылка'
    } else {
      this.error.textContent = ''
    }
  }

  resetPopup() {

    this.popupButton.setAttribute('disabled', true);
    this.errorMessages.forEach(error => {
      error.textContent = ''
    })
  }

  setEventListeners() {
    this.init()
    this.inputs.forEach(item => item.addEventListener('input', () => {
      this.checkInputValidity(item)
      this.setSubmitButtonState()
    }))
    this.closeButton.addEventListener('click', this.resetPopup)
    this.popupButton.addEventListener('click', this.resetPopup)
  }
}