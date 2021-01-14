import './App.css';
import Categorie from './components/Categorie'
import RestoInfo from './components/RestoInfo'
import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './assets/images/logo.png'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from "react-loader-spinner";

function App() {
  const [restoInfo, setRestoInfo] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const fetchData = async () => {
    const result = await axios.get('https://deliveroo-backend-pegasus.herokuapp.com/')
    setRestoInfo(result.data)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="logo" ><img src={logo} alt="logo" /></div>
        </div>
      </header>
      {!isLoading && <RestoInfo data={restoInfo.restaurant} />}
      <div className="categories">
        {!isLoading && restoInfo.categories.map((categorie) => {
          return <Categorie key={categorie.name} name={categorie.name} meals={categorie.meals} />
        })}
      </div>
      {isLoading && <div className='overlay-loader'>
        <Loader
          type="Circles"
          color="#FFFFFF"
          height={100}
          width={100}
        />
      </div>}
    </div>
  );
}

export default App;
