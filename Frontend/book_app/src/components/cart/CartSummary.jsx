
import { Link } from 'react-router-dom';

const CartSummary = ({cartTotal}) => {
  
  const subTotal = cartTotal.toFixed(2)
 

  return (
    <div className="col-md-4 align-self-start">
      <div className="card shadow-sm rounded-4">
        <div className="card-body">
          <h5 className="card-title fw-bold mb-3">Cart Summary</h5>
          <hr />
          
          <div className="d-flex justify-content-between">
            <span>Total:</span>
            <strong>{`${subTotal}`}</strong>
          </div>

    
       
          <Link to="/checkout">
            <button
              className="btn btn-primary w-100"
              style={{
                backgroundColor: '#6050DC',
                borderColor: '#6050DC',
              }}
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
