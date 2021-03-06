"use strict";

console.log("app.js is running");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderAppFunction();
  }
};

var appRoot = document.getElementById("app");

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderAppFunction();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var numbers = [55, 101, 1000];

var renderAppFunction = function renderAppFunction() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " ",
      app.title,
      " "
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      " ",
      app.subtitle,
      " "
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "what should i do?"
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "removeAll"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "p",
          { key: option },
          " option: ",
          option,
          " "
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "add Options "
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderAppFunction();
