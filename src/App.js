import './App.css';
import Categorie from './components/Categorie'
import RestoInfo from './components/RestoInfo'
import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './assets/images/logo.png'

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
        <div className="logo" ><img src={logo} alt="logo" /></div>
      </header>
      {!isLoading && <RestoInfo data={restoInfo.restaurant}/>}
      <div className="categories">
        {!isLoading &&  restoInfo.categories.map( (categorie) => {
          console.log('categorie', categorie)
          return <Categorie key={categorie.name} name={categorie.name} meals={categorie.meals} />
        })}
      </div>
    
    </div>
  );
}

export default App;
