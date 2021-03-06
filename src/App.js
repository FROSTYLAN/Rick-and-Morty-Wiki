import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import LocationInfo from './components/LocationInfo';
import SearchBox from './components/SearchBox';
import ResindentsList from './components/ResindentsList';
import titleIntro from './images/titleIntro.svg'

function App() {

  const [location, setLocation] = useState({})

  useEffect(() =>{
    const random = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setLocation(res.data));
  }, []);

  //console.log(location);

  return (
    <div className="App">
      <div className='imgIntro'><img src={titleIntro} alt="" /></div>
      <SearchBox setLocation={setLocation} />
      <LocationInfo location={location}/>
      <ResindentsList residents={location.residents} />
    </div>
  );
}

export default App;
