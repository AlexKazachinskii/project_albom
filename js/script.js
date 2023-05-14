(function() { // Переменные
    const containerCard = document.querySelector('.places-list');

    const newPopup = document.getElementById('new');
    const infoPopup = document.getElementById('info');
    const newCardName = document.querySelector('.popup__input_type_name');
    const newCardLink = document.querySelector('.popup__input_type_link-url');
    const newUserName = document.querySelector('.popup__input_type_userName');
    const newUserJob = document.querySelector('.popup__input_type_info');
    const userName = document.querySelector('.user-info__name');
    const userJob = document.querySelector('.user-info__job');
    const userInfoButton = document.querySelector('.user-info__button');
    const addButton = document.getElementById('addButton');
    const editButton = document.querySelector('.user-info__edit_button');
    const saveButton = document.getElementById('saveButton');

    const closeNewPopupButton = document.getElementById('closeNewPopupButton');
    const closeInfoPopupButton = document.getElementById('closeInfoPopupButton');
    const cards = []
    const showBigImage = new PopupZoom(imagePopup, closeImagePopupButton)
    showBigImage.setEventListeners()
    initialCards.forEach(item => {
        const card = new Card(item.name, item.link, showBigImage.open)
        const cardDom = card.create();
        cards.push(cardDom)
    })
    const cardList = new Cardlist(containerCard, cards)
    cardList.render()

    // Создание галлереи из массива

    function createNewCard(event) {
        event.preventDefault();
        const newCard = new Card(newCardName.value, newCardLink.value, showBigImage.open)
        const newCardDom = newCard.create()
        cardList.addCard(newCardDom)

        newPopupClass.close()
        document.forms.new.reset()
    };
    // Создание новой карточки


    const newCardPopupValidation = new FormValidation(newPopup)
    const editInfoValidation = new FormValidation(infoPopup)
        // Валидация
    const userInfo = new UserInfo(userName, userJob, newUserName, newUserJob)
    userInfo.setUserInfo('Jaques Causteau', 'Sailor, Researcher')


    function editInfo(event) {
        event.preventDefault();
        userInfo.setUserInfo(newUserName.value, newUserJob.value)

        infoPopupClass.close()
    }

    // Редактировать информацию пользователя

    const newPopupClass = new Popup(newPopup, closeNewPopupButton, userInfoButton);
    newPopupClass.setEventListeners()

    const infoPopupClass = new Popup(infoPopup, closeInfoPopupButton, editButton)
    infoPopupClass.setEventListeners()








    // ОБРАБОТЧИКИ
    addButton.addEventListener('click', createNewCard);
    // Создать картинку

    saveButton.addEventListener('click', editInfo);
    // Сохранить новые данные о пользователе

    closeNewPopupButton.addEventListener('click', () => {
            document.forms.new.reset();
        })

    closeInfoPopupButton.addEventListener('click', () => {
        newUserName.value = userName.textContent
        newUserJob.value = userJob.textContent

    })


    // ОБЪЯВЛЕНИЕ ФУНКЦИЙ

    newCardPopupValidation.setEventListeners()
    editInfoValidation.setEventListeners()
        // Проверка валидности


})()
