import { useEffect, useState } from 'react'
import Count from './Counter'

const Panier = ({data, handleAdd, handleRemove}) => {

    const [subtotal, setSubtotal] = useState(0)
    
    useEffect(() => {
        const calculTotal = () => {
            let total = 0
            for (let i = 0; i <  data.length; i++) {
                total += (Number(data[i].price) * Number(data[i].quantity))
            }
            setSubtotal(total)
        }
        calculTotal()
      }, [data])

      const shipCost = 2.5
 
    return (
        <div className="panier">
            <div className="card" >
                <button disabled={data.length > 0 ? false : true} >Valider</button>
                <div className="articles">
                    {!data.length > 0 && <div className="empty-message">Panier vide</div>}
                    {data.map(item => {
                    return (
                        <div className="detail" key={item.id}>
                            <Count value={item.quantity} id={item.id} setAdd={handleAdd} setRemove={handleRemove}/>
                            {item.title} {item.price} 
                        </div>
                    )
                }
                )}
            </div>
            {data.length > 0 && <div className="sub-cost">
                    Sous-total: {subtotal} €
            </div>}
            
            {data.length > 0 && <div className="ship-cost">
                    Frais de livraison: {shipCost} €
            </div>}
            {data.length > 0 && <div className="total-cost">
                    Total: {subtotal + shipCost} €
            </div>}
            </div>
        </div>
    )
}

export default Panier