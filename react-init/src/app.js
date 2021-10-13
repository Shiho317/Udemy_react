class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  conponentDidMount(){
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options){
        this.setState(() => ({options}));
        console.log('fetching data.')
  }
    }catch(e){

      //Do nothing
    }

    
}

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data.')
    }

  }

  componentWillUnmount(){
    console.log('component will unmount.');
  }

  handleDeleteOptions(){
    this.setState(() => ({
        options: []
    }))
  };

  handleDeleteOption(optionToRemove){
    this.setState((prevState)=> ({
      options: prevState.options.filter(option =>  optionToRemove !== option
      )
    })) 
  }

  handleAddOption(option){

    if(!option){
      return 'Enter valid value to add item';
    }else if(this.state.options.indexOf(option)>-1){
      return 'this option already exists';
    }

    this.setState((prevState) => ({
        options: prevState.options.concat(option)}))
    };

  handlePick(){
  const randomNum = Math.floor(Math.random()* this.state.options.length);
  const option = this.state.options[randomNum];
  alert(option);
  };

  render(){
    const title = 'Indecidion';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/> 
        <Action hasOptions = {this.state.options.length > 0} 
        handlePick = {this.handlePick}/>
        <Options options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}/>
        <AddOption handleAddOption = {this.handleAddOption}/>
      </div>
    );
  }
}


//<Header/> --> <Header></Header>


const Header = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
    </div>
  );
}

// class Header extends React.Component {
//   render(){
//     return (
//       <div>
//       <h1>{this.props.title}</h1>
//       <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) =>{
  return (
    <div>
      <button onClick={props.handlePick}>what should I do?</button>

    </div>
  );
}


// class Action extends React.Component {
//   render(){
//     return (
//       <div>
//         <button onClick={this.props.handlePick}>what should I do?</button>

//       </div>
//     );
//   }
// }


const Options = (props) => {
  return (
    <div>
      <p>Option component here.</p>
      {
        props.options.map(option => <Option 
          key={option} optionText={option}
          handleDeleteOption={props.handleDeleteOption}/>)
      }

      <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
  );
}


// class Options extends React.Component {
//   render(){
//     return (
//       <div>
//         <p>Option component here.</p>
//         {
//           this.props.options.map(option => <Option key={option} optionText={option}/>)
//         }

//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//       </div>
//     );
//   }
// }


const Option = (props) => {
  return (
    <div>
    {props.optionText}
    <button onClick={(e) => {
      props.handleDeleteOption(props.optionText);
    }}>Remove</button>
    </div>
  );
}

// class Option extends React.Component {
//   render(){
//     return (
//       <div>
//       <ol>
//       {
//         <li>{this.props.optionText}</li>
//       }
//       </ol>
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e){
    e.preventDefault();

  const option = e.target.elements.option.value.trim();
  const error = this.props.handleAddOption(option);

  this.setState(() =>({error}));

  if(!error){
    e.target.elements.option.value = '';
  }
  }

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <p>Add Option Component here.</p>
        <form onSubmit={this.handleAddOption}>
        <input type ="text" name="option" />
        <button>Submit</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))