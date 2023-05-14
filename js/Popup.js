class Popup {

  constructor(popup, btnClose, btnOpen = null) {
    this.popup = popup;
    this.btnOpen = btnOpen;
    this.btnClose = btnClose
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)

  }

  open() {
    this.popup.classList.add('popup_is-opened');

  }

  close() {
    this.popup.classList.remove('popup_is-opened');
  }

  setEventListeners() {
    if (this.btnOpen) {
      this.btnOpen.addEventListener('click', this.open);
    }

    this.btnClose.addEventListener('click', this.close);
  }
}