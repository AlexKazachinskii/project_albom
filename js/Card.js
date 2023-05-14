// Надо исправить (DONE)
// Переименуйте файл в Card.js


class Card {
    constructor(name, link, openImageCallback) {
        this.name = name;
        this.link = link;
        this.openImageCallback = openImageCallback
        this.card = null;
        this.imageCont = null;
        this.descCont = null;
        this.btnLike = null;
        this.btnDelete = null;
        this.nameCont = null;
        this.like = this.like.bind(this)
        this.remove = this.remove.bind(this)
        this.openImg = this.openImg.bind(this)
        this.removeEventListeners = this.removeEventListeners.bind(this)
    }

    createMyElem(tag, className) {
        const elem = document.createElement(tag);
        elem.classList.add(className);
        return elem;
    }

    createImageElem() {
        const cardImage = this.createMyElem('div', 'place-card__image');
        cardImage.style.backgroundImage = `url(${this.link})`;
        cardImage.appendChild(this.btnDelete);
        this.imageCont = cardImage;
    }

    createNameElem() {
        const placeName = this.createMyElem('h3', 'place-card__name');
        placeName.textContent = this.name;
        this.nameCont = placeName;
    }

    createBtnDelete() {
        const btn = this.createMyElem('button', 'place-card__delete-icon');
        this.btnDelete = btn;
    }

    createBtnLike() {
        const btn = this.createMyElem('button', 'place-card__like-icon');
        this.btnLike = btn;

    }

    createDescElem() {
        const desc = this.createMyElem('div', 'place-card__description');
        desc.appendChild(this.nameCont);
        desc.appendChild(this.btnLike);
        this.descCont = desc;
    }

    createCard() {
        const placeCard = this.createMyElem('div', 'place-card');
        placeCard.appendChild(this.imageCont);
        placeCard.appendChild(this.descCont);
        this.card = placeCard;
    }

    setEventListeners() {
        this.btnDelete.addEventListener('click', this.remove);
        this.btnLike.addEventListener('click', this.like);
        this.imageCont.addEventListener('click', this.openImg);
    }



    create() {
        this.createBtnDelete();
        this.createBtnLike();
        this.createImageElem();
        this.createNameElem();
        this.createDescElem();
        this.createCard();
        this.setEventListeners();


        return this.card;
    }

    like() {

        this.btnLike.classList.toggle('place-card__like-icon_liked');
    }
    
    removeEventListeners() {
        this.btnLike.removeEventListener('click', this.like);
        this.imageCont.removeEventListener('click', this.openImg);
        this.btnDelete.removeEventListener('click', this.remove);
    }

    remove(event) {
        this.removeEventListeners()
        event.stopPropagation()
        this.card.remove();
    }

    openImg() {
        this.openImageCallback(this.link);
    }
}