import './App.css';
import Form from './Form.js'
import Person from './Person.js'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ReactDOM from "react-dom/client"
import Content from './content1.js'


import Select from './select.js'

// function list() {

//   /* If item is greater than b then return it in a list, else return nothing: */

//   return ['a','b','c', 'x', 'y', 'z'].map((item)=>{
//     return item > 'b' ? <li>{item}</li> : ""

//   /*         {['apple','banana','carrot'].map((fruit)=>(`I like to eat: ${fruit}s `))} */
//   })

// }

// ----------------------------------------------------------------------------

// function list(data) {

//   return data.map((item)=>{
//     return item > 'b' ? <li>{item}</li> : <li>**{item}**</li>

//   })

// }

function App() {
  return (
    <div className="App">
{/* 
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hello: Page 1</h1>} />
           <Route path="a">
              <Route index element={<h1>Bonjour: Page 2</h1>} />
              <Route path="new" element={<h1>EXTRA BONJOUR</h1>} />
          </Route>
          <Route path="content" element={<Content1 />} />
          <Route path="c" element={<h1>Guten Tag: Page 4</h1>} />
          <Route path="d" element={<><Person test="ninja" /><hr /></>} />
        </Routes>
      </BrowserRouter> */}

      <Select value="Option1,Option2,Option3,Option4,Option5" />

<br /><br /><hr />
<Content />
<br /><br /><hr />
        <Person test="artist" color="aquamarine"  list = "one,two,three" />


{/* <ul>
      {list(['a','b','c', 'x', 'y', 'z'])}
</ul>

<ol>
      {list(['1','2','3'])}
</ol> */}



        {/* <Person test="ninja" type="UI/UX" />
        <br /><hr /> */}
{/*         <Form name="Pete" surname="Black" hair="Grey" eyes="Green" /> 
        <Person test="artist" color="aquamarine"  name="Pearl" age="9" gender="female" telephone="0123"/> */}
    </div>
    
  );
      }

export default App;
