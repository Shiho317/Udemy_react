console.log("hello js");

// const init = <div>
// <h1>Good weekend!!</h1> 
// <p>This is some info.</p>
// <ul>
// <li>one</li>
// <li>two</li>
// </ul>
// </div>



const app = {
  title: 'react-init',
  subTitle: 'Put your life in the hands of a computer',
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
}

const appRoots = document.querySelector('#app');

const removeAll = () => {
  app.options= [];
  render();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random()* app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const render = () =>{
  const template = (
  <div>
  {app.subTitle ? <p>{app.subTitle}</p> : <h1>{app.title}</h1>}
  {app.options.length > 0 ? <p>"Here are your options."</p> : <p>"No options."</p>}
  <p>{app.options}</p>
  <button disabled={app.options===0} onClick={onMakeDecision}>What should I do?</button>
  <button onClick={removeAll}>remove All</button>
  <ol>
    {
    app.options.map(option => <li key={option}>{option}</li>)
  }
  </ol>
  <form onSubmit={onFormSubmit}>
    <input type="text" name="option" />
    <button>Add Option</button>
  </form>
  </div>
  
);
ReactDOM.render(template, appRoots);
}
render();





// function getLocation(location){
//   if(location){
//     return location;
//   } else {
//     return 'Unknown';
//   }
// }

// const user = {
//   name: 'Mark',
//   age: 26,
//   location: 'Philadelphia',
// }
// const template2 = (
//   <div>
//     <h1>{user.name}</h1>
//     <p>Age:{user.age}</p>
//     <p>Location:{getLocation(user.location)}</p>
//   </div>
// );

