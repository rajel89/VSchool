// With React, it is possible to write HTML lines inside the JS file. for example the <h1>Hello, Everyone</h1> is an HTML that is inside the index.js.
// the first action is in the ReactDom.render is telling the code what is to be rentered (h1)
// and where to render the (h1). In this case it is being intructed to renders inside the root





// ReactDOM.render(<h2>Hello, Everyone!</h2>, document.getElementById("root")) //<<---- note, the "root" in the the getElementById is the ID in the index.html that is inside the div tag.




//practice 1
// ReactDOM.render(<p>this is getElementById</p>, document.getElementById("root"))



//Another method is using query selector
// ReactDOM.render(<h3>This is using query selector</h3> , document.querySelector("#root"))





//Try to write that 1-liner of React code again! This time,
//see if you can figure out how to render an <ul> with 2+ <li>s inside*/</li>

ReactDOM.render(
  <ul>
    Header<li>1st item</li>
    <li>2nd Item</li>
  </ul>,
  document.getElementById("root")
);
