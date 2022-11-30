import { useSelector, useDispatch } from 'react-redux'
import { BsFillTrashFill } from 'react-icons/bs' 
import productList from '../data/ProductList'

const Cart = () => {
  
  // const { cartProductIds } = useSelector((state) => state.cart)
  // const cartProductData = productList.products.filter((product) => cartProductIds.includes(product.Id) )

  let total = 0
  
  return (
    <div className="beads-container">
      <h1>Cart</h1>
      <hr/>
      <div className="category-container cart" id="featured-3">
          <div className="cart-products">
              {productList.map((product) =>
                <div key={product.name} className="product">
                  <img className="item-image" src={product.image} alt="item image" style={{maxHeight:"100px"}} />
                  <div className='item-info'>
                    <h5 style={{fontWeight:"bold"}}>{product.title}</h5>
                    <p style={{fontSize:"1rem"}}>${product.price}.00</p>
                    <button className='btn btn-primary cart-btn' style={{borderRadius:"8px", backgroundColor:'darkred', border: "none", fontSize:"0.9rem", fontWeight:"bold"}} >
                      <BsFillTrashFill style={{paddingBottom:"1px"}} /> Remove Item
                    </button>
                  </div>
                </div>
              )}
          </div>
          <div className='checkout'>
            <p className='total'>Total: ${total}</p>
            <button className='total btn btn-primary checkout-btn'>Checkout</button>
          </div>

          <div className="text-center empty-cart">
            <p>Your cart is empty!</p>
            <p>You have not added any items to your cart.</p>
          </div>
        </div>
    </div>
  )
}

export default Cart