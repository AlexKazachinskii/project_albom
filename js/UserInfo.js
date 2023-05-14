class UserInfo {
    constructor(nameOnPage, jobOnPage, nameInput, jobInput) {
        this.nameOnPage = nameOnPage
        this.jobOnPage = jobOnPage
        this.nameInput = nameInput
        this.jobInput = jobInput

    }

    setUserInfo(defaultName, defaultJob) {
        this.dataName = defaultName
        this.dataJob = defaultJob
        this.updateUserInfo()
    }

    updateUserInfo() {

        this.nameOnPage.textContent = this.dataName
        this.jobOnPage.textContent = this.dataJob
        this.nameInput.value = this.dataName
        this.jobInput.value = this.dataJob
    }
}