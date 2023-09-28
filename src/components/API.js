// export default class Api {
//   constructor(baseUrl, headers) {
//     this._baseUrl = baseUrl;
//     this._headers = headers;
//   }

//   _handleServerResponse(res) {
//     if (res.ok) {
//       return res.json();
//     } else Promise.reject(res.status);
//   }

//   getUserInfo() {
//     return fetch(this._baseUrl + "/users/me", {
//       headers: this._headers,
//     }).then(this._handleServerResponse);
//   }

//   getInitialCards() {
//     return fetch(`${this._baseUrl}/cards`, {
//       headers: this._headers,
//     }).then(this._handleServerResponse);
//   }
// }

//* fetch("https://around-api.en.tripleten-services.com/v1", {
// *  headers: {
// *    authorization: "e83633ae-db9d-4452-b87f-71623cefa287",
// * },
// *})
// *  .then((res) => res.json())
// * .then((result) => {
// *    console.log(result);
// * });

fetch("https://around-api.en.tripleten-services.com/users/me", {
  headers: {
    authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });
