export default class UserInfo {
  constructor({ nameElement, jobElement }) {
    this._nameElement = document.querySelector(nameElement);
    this._jobElement = document.querySelector(jobElement);
  }

  getUserInfo() {
    return {
      nameElement: this._nameElement.textContent,
      jobElement: this._jobElement.textContent,
    };
  }

  setUserInfo({ name, subtitle }) {
    this._nameElement.textContent = name;
    this._jobElememnt.textContent = subtitle;
  }
}
