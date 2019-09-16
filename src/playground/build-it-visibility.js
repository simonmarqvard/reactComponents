class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      Visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        Visibility: !prevState.Visibility
      };
    });
    console.log(this.state.Visibility);
  }
  render() {
    return (
      <div>
        <h1> VisibilityToggle </h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.Visibility ? "Hide message" : "Show message"}
        </button>
        {this.state.Visibility && (
          <div>
            <p> Hey. Here are some details you can now see</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
