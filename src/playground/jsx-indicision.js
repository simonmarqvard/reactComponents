console.log("app.js is running");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderAppFunction();
  }
};

const appRoot = document.getElementById("app");

const onRemoveAll = () => {
  app.options = [];
  renderAppFunction();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const numbers = [55, 101, 1000];

const renderAppFunction = () => {
  const template = (
    <div>
      <h1> {app.title} </h1>
      {app.subtitle && <p> {app.subtitle} </p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        what should i do?
      </button>
      <button onClick={onRemoveAll}>removeAll</button>
      <ol>
        {app.options.map(option => {
          return <p key={option}> option: {option} </p>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>add Options </button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderAppFunction();
