console.log('hello js');

//JSX - JavaScript XML

const template = /*#__PURE__*/React.createElement("p", null, "This is JSX from app.js!");

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
