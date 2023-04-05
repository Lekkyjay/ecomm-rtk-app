import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useEffect } from 'react'
import { fetchProductsByCategory, selectStatusSingleCat, selectProductsSingleCat } from '../../redux/categorySlice'
import Products from '../../components/products/Products'

export default function Category() {
  const dispatch = useAppDispatch()
  const {id} = useParams()
  const status = useAppSelector(selectStatusSingleCat)
  const products = useAppSelector(selectProductsSingleCat)

  useEffect(() => {
    dispatch(fetchProductsByCategory(parseInt(id!), 'single'))
  }, [id])

  return (
    <div className = "category-page">
      <div className = "container">
        <div className = "breadcrumb">
          <ul className = "breadcrumb-items flex">
            <li className = "breadcrumb-item">
              <Link to = "/">
                <i className = "fas fa-home"></i>
                <span className = "breadcrumb-separator">
                  <i className = "fas fa-chevron-right"></i>
                </span>
              </Link>
            </li>
            <li>
              Category
              <span className = "breadcrumb-separator">
                <i className = "fas fa-chevron-right"></i>
              </span>
            </li>
            <li>
              { products[0] && products[0].category.name}
            </li>
          </ul>
        </div>
      </div>
      <Products products={products} status={status} id={id} />
    </div>
  )
}
