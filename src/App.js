import './App.css';
import Form from './Form.js'
import Person from './Person.js'
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

        {/* <Person test="artist" color="aquamarine"  list = "one,two,three" /> */}

        <Select options="Value1,Value2,Value3,Value4" />

{/* <ul>
      {list(['a','b','c', 'x', 'y', 'z'])}
</ul>

<ol>
      {list(['1','2','3'])}
</ol> */}



{/*         <Person test="ninja" type="UI/UX" /> */}
        <br /><hr />
{/*         <Form name="Pete" surname="Black" hair="Grey" eyes="Green" /> 
        <Person test="artist" color="aquamarine"  name="Pearl" age="9" gender="female" telephone="0123"/> */}
    </div>
    
  );
}

export default App;
