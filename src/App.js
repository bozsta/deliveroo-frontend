import './App.css';
import Categorie from './components/Categorie'
import RestoInfo from './components/RestoInfo'
import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './assets/images/logo.png'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from "react-loader-spinner";
import Panier from './components/Panier'

function App() {
  const [restoInfo, setRestoInfo] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const result = await axios.get('https://deliveroo-backend-pegasus.herokuapp.com/')
    setRestoInfo(result.data)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const handleAddArticle = (e) => {
    let  product = JSON.parse(e.currentTarget.dataset.value)
    const newProducts = [...products]
    let isFound = false;

    for (let i = 0; i < newProducts.length; i++) {
      if (newProducts[i].id === product.id) {
        newProducts[i].quantity = newProducts[i].quantity + 1;
        isFound = true;
        break;
      }
    }
    if (isFound === false) {
      product.quantity = 1;
      newProducts.push(product);
    }
    setProducts(newProducts)
  }

  const handleCountAdd = (id) => {
    const newProducts = [...products]
    for (let i = 0; i < newProducts.length; i++) {
      if (newProducts[i].id === id) {
        newProducts[i].quantity = newProducts[i].quantity + 1;
        break;
      }
    }
    setProducts(newProducts)
  }

  const handleCountRemove = (id) => {
    const newProducts = [...products]
    console.log('newProducts', newProducts)
    for (let i = 0; i < newProducts.length; i++) {
      if (newProducts[i].id === id) {
        if (newProducts[i].quantity > 1) {
          newProducts[i].quantity = newProducts[i].quantity - 1;
        } else {
          newProducts.splice(i, 1)
        }    
        break;
      }
    }
    setProducts(newProducts)
  }

  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="logo" ><img src={logo} alt="logo" /></div>
        </div>
      </header>
      {!isLoading && <RestoInfo data={restoInfo.restaurant} />}
      <div className="content" >
        <div className="categories">
          {!isLoading && restoInfo.categories.map((categorie) => {
            return <Categorie key={categorie.name} name={categorie.name} meals={categorie.meals} addArticle={handleAddArticle}/>
          })}
          
        </div>
        <div className="leftSide">
        {!isLoading && <Panier data={products} handleAdd={handleCountAdd} handleRemove={handleCountRemove} />}

        </div>
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
