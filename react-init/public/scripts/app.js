'use strict';

console.log('hello js');

var visible = document.getElementById('app');

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var toggle = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility ? React.createElement(
      'p',
      null,
      'Sorry. nothing details now.'
    ) : React.createElement(
      'p',
      null,
      'Hey. There are details you can now see!'
    )
  );
  ReactDOM.render(toggle, visible);
};
render();
