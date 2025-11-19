import RelatedProducts from './RelatedProducts';
import ProductPagePlaceHolder from './ProductPagePlaceholder';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../api';
import api from '../../api';
import { toast } from 'react-toastify';

const ProductPage = ({setNumberCartItems}) => {

  const {slug}= useParams()
  const [product, setProduct] = useState({})
  const [similarBook, setSimilarBook] = useState([])
  const [loading, setLoading] = useState(false)
  const [inCart, setInCart] = useState(false)
  const cart_code = localStorage.getItem("cart_code")

  useEffect(function(){
    if(product.id){
      api.get(`product_in_cart?cart_code=${cart_code}&product_id=${product.id}`)
      .then(res => {
        console.log(res.data)
        setInCart(res.data.product_in_cart)
      })
  
      .catch(err => {
        console.log(err.message)
      })
  
    }

  },[cart_code, product.id])


  const newItem = {cart_code:cart_code, product_id:product.id}


  function add_item(){
    api.post("add_item/", newItem)
    .then(res => {
      console.log(res.data)
      setInCart(true)
      toast.success("Book added to your cart")
      setNumberCartItems(curr => curr + 1 )
    })

    .catch(err => {
      console.log(err.message)
    })
  }


  useEffect(function(){
    setLoading(true)
    api.get(`product_detail/${slug}`)
    .then(res => {
      console.log(res.data)
      setProduct(res.data)
      setSimilarBook(res.data.similar_book)
      setLoading(false)
    })
    .catch(err => {
      console.log(err.message)
      setLoading(false)
    })
  },[slug])

  if(loading){
    return  <ProductPagePlaceHolder />
  }

  return (
    <div>
     

      <section className="py-3">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0 rounded shadow-sm"
                src={`${BASE_URL}${product.image}`}
                alt="Product"
              />
            </div>

            <div className="col-md-6">
              <div className="small text-muted mb-2">Category: Books</div>
              
              <h1 className="display-5 fw-bold mb-3">{product.name}</h1>
              
              <div className="fs-5 mb-4">
  
                <span>{`${product.price}`}/-</span>
              </div>
              
              <p className="lead mb-4">
               {product.description}
              </p>

              <div className="d-flex">
               
                <button className="btn btn-dark flex-shrink-0" type="button" onClick={add_item} disabled={inCart}>
                  <i className="bi bi-cart-fill me-2"></i>
                  {inCart ? "Book added to cart":"Add to cart"}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <RelatedProducts products={similarBook}/>
    </div>
  );
};

export default ProductPage;
