console.log('hello js');

const visible = document.getElementById('app');

let visibility = false;

const toggleVisibility = () =>{
  visibility = !visibility;
  render();
}

const render = () =>{
const toggle = (
  <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggleVisibility}>
      {visibility ? 'Hide details' : 'Show details'}
    </button>
    {
      visibility ? <p>Sorry. nothing details now.</p> : <p>Hey. There are details you can now see!</p>
    }
  </div>
);
ReactDOM.render(toggle, visible);
};
render();