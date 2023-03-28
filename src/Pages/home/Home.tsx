import { useEffect } from 'react'
import Categories from '../../components/categories/Categories'
import Category from '../../components/category/Category'
import Products from '../../components/products/Products'
import Slider from '../../components/slider/Slider'
import { 
  fetchCategories, fetchProductsByCategory, selectAllCategories, selectAllProductsByCategory, selectCategoryAllStatus, selectCategoryStatus 
} from '../../redux/categorySlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchProducts } from '../../redux/productSlice'
import './Home.scss'

export default function Home() {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(selectAllCategories)
  const categoryStatus = useAppSelector(selectCategoryStatus)
  const productsByCategory = useAppSelector(selectAllProductsByCategory)
  const catProductAllStatus = useAppSelector(selectCategoryAllStatus)
  const {data: products, status: productStatus} = useAppSelector((state) => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
    dispatch(fetchProductsByCategory(1, 'all'))
    dispatch(fetchProductsByCategory(2, 'all'))
  }, [])

  return (
    <div>
      <Slider />
      <Categories categories={categories} status={categoryStatus} />
      <Products products={products} status={productStatus} />
      <section>
        { productsByCategory[0] && <Category products={productsByCategory[0]} status={catProductAllStatus} /> }
      </section>
      <section>
        { productsByCategory[1] && <Category products={productsByCategory[1]} status={catProductAllStatus} /> }
      </section>
    </div>
  )
}
