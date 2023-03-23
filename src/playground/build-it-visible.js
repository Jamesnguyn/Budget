class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    
    this.state = {
      title: 'Visibility Toggle',
      subTitle: 'Sup',
      visibility: false
    }
  }

  toggleVisibility() {
    this.setState( (prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.title} </h1>
        <button onClick={this.toggleVisibility}> 
          { this.state.visibility ? 'Hide details' : 'Show Details' } 
        </button>
        { this.state.visibility && (
          <div>
            <p> {this.state.subTitle} </p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render( <ToggleVisibility />, document.getElementById('app') );