import { useSelector, useDispatch } from 'react-redux'
import cartSlice from '../data/cartSlice'
import { BsFillTrashFill } from 'react-icons/bs' 
import productList from '../data/productList'

const Cart = () => {
  
  const { cartProductIds } = useSelector((state) => state.cart)
  const cartProductData = productList.filter((product) => cartProductIds.includes(product.id))

  const { removeFromCart, clearAllItems } = cartSlice.actions
  const dispatch = useDispatch()

  let total = 0
  const findTotal = cartProductData.forEach((product) => total += product.price)

  return (
    <div className="beads-container">
      <h1>Cart</h1>
      <hr/>
      {cartProductData.length > 0 && (<div className="category-container cart" id="featured-3">
         <div className="cart-products">
              {cartProductData.map((product) =>
                <div key={product.id} className="product">
                  <img className="item-image" src={product.image} alt="item" style={{maxHeight:"100px"}} />
                  <div className='item-info'>
                    <h5 style={{fontWeight:"bold"}}>{product.title}</h5>
                    <p style={{fontSize:"1rem"}}>${product.price}.00</p>
                    <button className='btn btn-primary cart-btn' style={{borderRadius:"8px", backgroundColor:'darkred', border: "none", fontSize:"0.9rem", fontWeight:"bold", padding:"8px 0 9px"}} onClick={() => dispatch(removeFromCart(product.id))}>
                      <BsFillTrashFill style={{paddingBottom:"1px"}} /> Remove Item
                    </button>
                  </div>
                </div>
              )}
          </div>

          <div className='checkout'>
            <span style={{fontFamily:"Open sans", fontWeight:"bold"}}>Total: ${total}</span>
            <button className='btn btn-primary checkout-btn' onClick={() => dispatch(clearAllItems())}>Checkout</button>
          </div>
        </div>)}

          {cartProductData.length < 1 && (<div className="text-center empty-cart">
            <p>You have not added any items to your cart.</p>
          </div>)}
        </div>
  )
}

export default Cart