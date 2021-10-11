console.log('hello js');

class VisibilityToggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visibility: false
    }
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

  }

  handleToggleVisibility(){
    this.setState(prevState =>{
      return{
        visibility: !prevState.visibility
      };
    })
  };

  render(){
    return (
      <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.handleToggleVisibility}>
      {this.state.visibility ? 'Hide details' : 'Show details'}
      </button>
    {
      this.state.visibility ? <p>Sorry. nothing details now.</p> : <p>Hey. There are details you can now see!</p>
    }
      </div>
    );

  }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

// const visible = document.getElementById('app');

// let visibility = false;

// const toggleVisibility = () =>{
//   visibility = !visibility;
//   render();
// }

// const render = () =>{
// const toggle = (
//   <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={toggleVisibility}>
//       {visibility ? 'Hide details' : 'Show details'}
//     </button>
//     {
//       visibility ? <p>Sorry. nothing details now.</p> : <p>Hey. There are details you can now see!</p>
//     }
//   </div>
// );
// ReactDOM.render(toggle, visible);
// };
// render();