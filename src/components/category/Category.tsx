import Error from '../error/Error'
import Loader from '../loader/Loader'
import { STATUS } from '../../utils/status'
import { formatPrice } from '../../utils/helpers'
import { IProduct } from '../../utils/interfaces'
import './Category.scss'

interface IProps {
  products: IProduct[]
  status: string
}

export default function Category({ products, status }: IProps) {
  if(status === STATUS.ERROR) return (<Error />)
  if(status === STATUS.LOADING) return (<Loader />)


  return (
    <section className='cat-single py-5 bg-ghost-white'>
      {/* { isModalVisible && <SingleProduct />} */}

      <div className='container'>
        <div className='cat-single-content'>
          <div className='section-title'>
            <h3 className='text-uppercase fw-7 text-regal-blue ls-1'>{products[0].category.name}</h3>
          </div>
          <div className='product-items grid'>
            {
              products.map(product => (
                <div className='product-item bg-white' key = {product.id}>
                  <div className='product-item-img'>
                    <img src = {product.images[0]} alt = "" />
                    <div className = "product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">{product.category.name}</div>
                  </div>
                  <div className='product-item-body'>
                    <h6 className = "product-item-title text-pine-green fw-4 fs-15">{product.title}</h6>
                    <div className = "product-item-price text-regal-blue fw-7 fs-18">{formatPrice(product.price)}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
