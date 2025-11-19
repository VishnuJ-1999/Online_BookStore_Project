import CartItem from '../cart/CartItem';
import OrderItem from './OrderItem';
import styles from './OrderSummary.module.css'

const OrderSummary = ({cartitems, cartTotal}) => {

  const total = (cartTotal + 0).toFixed(2)

  return (
    <div className="col-md-8">
      <div className={`card mb-4 ${styles.card}`}>
        <div
          className="card-header"
          style={{ backgroundColor: '#6050DC', color: 'white' }}
        >
          <h5>Cart Summary</h5>
        </div>
        <div className="card-body">
          <div
            className="px-3"
            style={{ height: '300px', overflow: 'auto' }}
          >

            {cartitems.map(cartitem => <OrderItem key={cartitem.id} cartitem={cartitem} />)}

            
           
          </div>
          <div className='d-flex justify-content-between'>
            <h5>Total</h5>
            <h5>{`${total}`}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
