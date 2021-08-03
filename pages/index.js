import React, {useContext} from 'react'
import {DataContext} from '../context/DataProvider'
import {Link} from 'next/link'
import Carousel from "react-elastic-carousel";
import Header from '../components/Header';


  function Home() {
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    return (
      <>
      <div>
        <Header />
      
        <div className="home">
          <Carousel >
            <img className="image" alt=" " src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fonline-shopping-cart.html&psig=AOvVaw1nELCNL19hM8u6PDJydG_f&ust=1628050513405000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjqivr-k_ICFQAAAAAdAAAAABAD" />
            <img className="image" alt=" " src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fonline-shopping-cart.html&psig=AOvVaw1nELCNL19hM8u6PDJydG_f&ust=1628050513405000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjqivr-k_ICFQAAAAAdAAAAABAD" />
            <img className="image" alt=" " src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fonline-shopping-cart.html&psig=AOvVaw1nELCNL19hM8u6PDJydG_f&ust=1628050513405000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjqivr-k_ICFQAAAAAdAAAAABAD" />
            
          </Carousel>
          <div className="products">
            {
                products.map(product =>(
                    <div className="card" key={product.partId}>
                        <Link href={`/products/${product.partId}`}>
                            <a><img src={product.image1} alt="" width="9/12"/></a>
                        </Link>
                        <div className="box">
                        <h3 title={product.title}>
                            <Link href={`/products/${product.partId}`}>
                            <a>{product.title}</a>
                            </Link>
                        </h3>
                        <p>{product.partType}</p>
                        <h4>{product.priceValue}</h4>
                        <button onClick={() => addCart(product.partId)}>
                            Add to cart 
                        </button>
                        </div>
                    </div>
                ))
            }
          
          
        </div>
        </div>
        </div>
      </>
    );
  }
  
export default Home;