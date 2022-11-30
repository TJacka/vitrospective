import piecesbracelets from '../data/JewelryDetailsBracelets'
import { BsFillTrashFill } from 'react-icons/bs' 

const Cart = () => {
  
  let total = 0
  
  return (
    <div className="beads-container">
      <h1>Cart</h1>
      <hr/>
      <div className="category-container cart" id="featured-3">
          <div className="cart-products">
              {piecesbracelets.map((piece) =>
                <div key={piece.name} className="product">
                  <img className="item-image" src={piece.image} alt="item image" style={{width:"250px"}} />
                  <div className='item-info'>
                    <h5 style={{fontWeight:"bold"}}>{piece.title}</h5>
                    <p style={{fontSize:"1rem"}}>${piece.price}.00</p>
                    <button className='btn btn-primary cart-btn' style={{borderRadius:"8px", backgroundColor:'darkred', border: "none", fontSize:"0.9rem"}} >
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