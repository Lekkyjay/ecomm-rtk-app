import { useEffect } from 'react'
import Categories from '../../components/categories/Categories'
import Category from '../../components/category/Category'
import Slider from '../../components/slider/Slider'
import { 
  fetchCategories, fetchProductsByCategory, selectAllCategories, selectAllProductsByCategory, selectCategoryAllStatus, selectCategoryStatus 
} from '../../redux/categorySlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import './Home.scss'

export default function Home() {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(selectAllCategories)
  const categoryStatus = useAppSelector(selectCategoryStatus)
  const productsByCategory = useAppSelector(selectAllProductsByCategory)
  const catProductAllStatus = useAppSelector(selectCategoryAllStatus)

  useEffect(() => {
    // dispatch(fetchProducts())
    dispatch(fetchCategories())
    dispatch(fetchProductsByCategory(1, 'all'))
    dispatch(fetchProductsByCategory(2, 'all'))
  }, [])

  return (
    <div>
      <Slider />
      <Categories categories={categories} status={categoryStatus} />
      <section>
        { productsByCategory[0] && <Category products={productsByCategory[0]} status={catProductAllStatus} /> }
      </section>
      <section>
        { productsByCategory[1] && <Category products={productsByCategory[1]} status={catProductAllStatus} /> }
      </section>
    </div>
  )
}
