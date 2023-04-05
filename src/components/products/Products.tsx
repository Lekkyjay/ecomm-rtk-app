import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setModalData, setIsModalVisible } from '../../redux/modalSlice'
import { formatPrice } from '../../utils/helpers'
import { STATUS } from '../../utils/status'
import Loader from '../loader/Loader'
import Error from '../error/Error'
import ProductDetails from '../product/ProductDetails'
import { IProduct } from '../../utils/interfaces'
import './Products.scss'

interface IProps {
  products: IProduct[]
  status: string
  id?: string
}

export default function Products({products, status, id}: IProps) {
  const dispatch = useAppDispatch()
  const {isModalVisible} = useAppSelector((state) => state.modal)

  const viewModalHandler = (data: IProduct) => {
    dispatch(setModalData(data))
    dispatch(setIsModalVisible(true))
  }

  if(status === STATUS.ERROR) return (<Error />)
  if(status === STATUS.LOADING) return (<Loader />)

  const title = id ? products[0].category.name : 'Our Products'

  return (
    <section className='product py-5 bg-ghost-white' id = "products">
      { isModalVisible && <ProductDetails />}

      <div className='container'>
        <div className='product-content'>
          <div className='section-title'>
            <h3 className='text-uppercase fw-7 text-regal-blue ls-1'>{title}</h3>
          </div>
          <div className='product-items grid'>
            {
              products.slice(0, 20).map(product => (
                <div className='product-item bg-white' key = {product.id} onClick = {() => viewModalHandler(product)}>
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
