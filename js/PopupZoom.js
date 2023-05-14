class PopupZoom extends Popup {
  open(link) {
    const popupContent = this.popup.querySelector('.popup__content')
    this.popupContent = popupContent
    this.popupContent.style.backgroundImage = `url(${link})`;
    this.popup.classList.add('popup_is-opened');
  }
}