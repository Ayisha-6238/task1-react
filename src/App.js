// import logo from './logo.svg';
import Theme from './Components/ThemeProvider/Theme';
import './App.css';
import UserDetails from "./Components/UserDetails"
import {Route,Routes} from 'react-router-dom'
import UserList from './Components/UserList';

function App() {

  return (
    <div>
     <Theme>
      <Routes>
        <Route path="/" element={<UserList />}/>
        <Route path='/details/:id' element={<UserDetails/>}/>

       
      </Routes>
     </Theme>
     </div>
    
  );
}

export default App;
