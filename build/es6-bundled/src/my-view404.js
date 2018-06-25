define(["./my-app.js"],function(_myApp){"use strict";class MyView404 extends _myApp.PolymerElement{static get template(){return _myApp.html`
      <style>
        :host {
          display: block;

          padding: 10px 20px;
        }
      </style>

      Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a>
    `}}window.customElements.define("my-view404",MyView404)});