import './App.css';
import Form from './Form.js'
import Person from './Person.js'

function App() {
  return (
    <div className="App">
        <Person test="ninja" type="UI/UX" name="Dave" age="20" gender="male" telephone="04444"/>
        {/* <Form />
        <br /><hr /><br />
        <Form name="Pete" surname="Black" hair="Grey" eyes="Green" /> */}
        <Person test="artist" color="aquamarine"  name="Pearl" age="9" gender="female" telephone="0123"/>
    </div>
    
  );
}

export default App;
