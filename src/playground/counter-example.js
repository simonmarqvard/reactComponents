class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    console.log("fetch data");
    const stringcount = localStorage.getItem("number");
    const numbercount = parseInt(stringcount, 10);

    if (!isNaN(numbercount)) {
      this.setState(() => ({ count: numbercount }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const count = this.state.count;
      localStorage.setItem("number", count);
      console.log("save data");
    }
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count : {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

//This will be used if DOM.render count is not provided
// Counter.defaultProps = {
//   count: 5
// };

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;
//
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
//
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
//
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <p> Count : {count} </p>
//       <button onClick={addOne}> +1 </button>
//       <button onClick={minusOne}> -1 </button>
//       <button onClick={reset}> reset </button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();
