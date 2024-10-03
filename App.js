import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



// Create a new image element 
const img = document.createElement('img'); 
 
// Set the source and other attributes 
img.src = 'Music notes.jpg'; // Specify the path to your image 
img.alt = 'Music notes with blue and pink'; // Alt text for accessibility 
img.width = 300; // Optional: set width 
img.height = 200; // Optional: set height 
 
// Append the image to a specific element in the document 
document.body.appendChild(img); // This will add the image to the body 

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, this is your backend!');
});

app.listen(port, () => {
    console.log(`Server running on https://www.billboard.com/charts/billboard-global-200/${port}`);
});

const cors = require('cors');
app.use(cors());


app.get('/api/data', (req, res) => {
  res.json({ message: 'Here is your data!' });
});

const MyButton = () => {
  return (
    <div>
      <a href="https://www.google.com/">
       <button onClick={addNote}>
          View Music Chart Table
        </button>
      </a>
    </div>
  );
}
function App() {
    
  const [notes, setNotes] = useState()
  
    const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  
  }
  return (


    <div className="App">
      <header className="App-header">
        <img src={"https://cdn-icons-png.flaticon.com/512/9448/9448086.png"} className="App-logo" alt="logo" />
        <h1>
          200 BILLBOARDS CHART
        </h1>
        <a href="https://www.billboard.com/charts/billboard-global-200/">Link to Billboard Music</a>
        <button onClick={addNote}>
      View Music Chart Table
    </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}



export default App;


