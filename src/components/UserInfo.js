export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameSelector = document.querySelector(nameSelector);
    this._jobSelector = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      nameSelector: this._nameSelector.textContent,
      jobSelector: this._jobSelector.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this._nameSelector = name;
    this._jobSelector = about;
  }
}
