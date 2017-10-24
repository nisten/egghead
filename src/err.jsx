const Todos = () => (
    <ul>
        <li>Stuff</li>
    </ul>
);

const Todos = () => (
    React.createElement("ul", null,
    React.createElement("li", null,
    "Test"  
        ),
    );
);

// Notes 
// DOM is slow   
//React docs "reads are slow"
function updateNode(node, value) {
    if(node.innerText !==value) {
        node.innerText = value;
    }
}
//devtools speedcheck how to do it
//Read & Write

console.time();
for(i = 0; i<100; i++) {updateNode(item, i); }
console.timeEnd(); 
//output#
default: 5.326ms   //for 1<1000  default:36.155ms

//for 60fps   Time per frame: 16.6ms
//Time for 1000 read/write cycles: 36.15ms

//Read then write  >
console.time();
for(i = 0; i < 1000; i++) {item.innerText; }
for(i = 0; i < 1000; i++) {item.innerText = i; }

console.timeEnd();
//default: 3.368ms

//     Pre cache
// 1. Call render() to build "Future Treee"
// 2. Compare each element to "Current Tree"
// 3. Change DOM when needed
// 4. Save "Future Tree" as "Current Tree"    

//How to split the process into 2 parts

Initial Render
// 1. Call render() to build tree
// 2. Save as "Current Tree"
// 3. Create initial DOM

Updates
// 1. Call render() to build "Future Tree"
// 2. Compare each element to "Current Tree"
// 4. Change DOM when needed
// 5. Save "Future Tree" as "Current Tree"

Todos.setState({ todos: ['Uno', 'Two'] });
// now lets start again and go to the console

todos = document.getElementById('app').children[0].children[1];
todos.removeChild(todos.childNodes[0]); //circumventing react completely and deleting an element

Todos.setState({ todos: ['Uno', 'Dos'] });    //react wont rebuild the dom, it's not going to read it
//this means if you try to use jQuery together where react is playing you're gonna have a lot of weird shit
//because it will never update

<body>
    <div id="app"></div>
</body>

render(
    React.createElement(App),
    document.getElementById(a)
)

//// Event Handers
<Component onClick={} />

<Header onClick={} />  //it's no gonna run on native because react doesnt know if its a click or press event
<Header onPress={} />
// ::::: What will cause React to render again? //to update the view
// ...update the props update, state changes , events

//What's bad about angular is that angular listens to everything, an ajax call, a  timeout a click whatever happens
//React doesnt, react doesnt care, nothing will update. Only 2 things will cause react to update itself:
// a call to
setState()
//or a call to
forceUpdate()

//if we call setState on a component react will only update that component

// when you call a function it skips to it, after
// after it reaches the bottom  






