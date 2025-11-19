import styles from './PaymentSection.module.css'; // Adjust this based on your actual styles path

const PaymentSection = () => {
  return (
    <div className="col-md-4">
      <div className={`card ${styles.card}`}>
        <div
          className="card-header"
          style={{ backgroundColor: '#6050DC', color: 'white' }}
        >
          <h5>Payment Options</h5>
        </div>
        <div className="card-body">
          {/* PayPal Button */}
          
          <button
            className={`btn btn-primary w-100 mb-3 ${styles.paypalButton}`}
            id="paypal-button"
          >
            <i className="bi bi-razorpay"></i> Pay with Flutterwave
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
