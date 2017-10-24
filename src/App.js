import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    //React.Children.count(children)
    return (
      <Parent>
        <div className="childA"></div>
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render(){
    //console.log(this.props.children)
    // let items = React.Children
    //    .forEach(this.props.children,
    //    child => console.log(child.props.className))
    //let items = React.Children.toArray(this.props.children)
    let items = React.Children.only(this.props.children)
    console.log(items)
    return null
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);






// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {currentEvent: '---'}
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({currentEvent: npm run e.type})
//   }
//   render(){
//     return (
//       <div>
//         <textarea
//           onKeyPress={this.update}
//           onCopy={this.update}
//           onCut={this.update}
//           onPaste={this.update}
//           onFocus={this.update}
//           onBlur={this.update}
//           onDoubleClick={this.update}
//           onTouchStart={this.update}
//           onTouchMove={this.update}
//           onTouchEnd={this.update}
//           cols="30"
//           rows="10" />
//         <h1>{this.state.currentEvent}</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );