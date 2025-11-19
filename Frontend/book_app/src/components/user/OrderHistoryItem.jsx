import styles from "./OrderHistoryItem.module.css"

const OrderHistoryItem = () => {
  return (
    <div className='card-body'>
        <div className={`order-item mb-3 ${styles.orderItem}`}>
            <div className='row'>
                <div className='col-md-2'>
                    <img
                        src=""
                        alt="order item"
                        className='img-fluid'
                        style={{borderRadius: '5px'}}
                    />
                </div>
                <div className='col-md-6'>
                    <h5>Book name:</h5>
                    <h5>Order Date:</h5>
                    <h5>Order ID:</h5>
                </div>
                <div className='col-md-2 text-center'>
                    <h5 className='text-muted'>Quantity: 1</h5>
                </div>
                <div className='col-md-2 text-center'>
                    <h5 className='text-muted'>100.00</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderHistoryItem
