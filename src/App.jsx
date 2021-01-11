import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import NavBar from './Components/NavBar';
import TrackerScreen from './Screens/TrackerScreen'

function App() {
  return (
   <BrowserRouter>
     <div className="App">
      <NavBar/>
        <Route path="/" component={HomeScreen} exact/>
        <Route path="/TrackerApps" component={TrackerScreen}/>
     </div>
   </BrowserRouter>
  );
}

export default App;
