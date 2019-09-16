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
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1> VisibilityToggle </h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.Visibility ? "hide info" : "show info"}
        </button>
        {this.state.Visibility && <div> "These are the detailed info" </div>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
