import { useEffect } from 'react'
import Categories from '../../components/categories/Categories'
import Category from '../../components/category/Category'
import Products from '../../components/products/Products'
import Slider from '../../components/slider/Slider'
import { 
  fetchCategories, fetchProductsByCategory, selectAllCategories, selectProductsAllCat, selectStatusAllCat, selectCategoryStatus 
} from '../../redux/categorySlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchProducts } from '../../redux/productSlice'
import './Home.scss'

export default function Home() {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(selectAllCategories)
  const categoryStatus = useAppSelector(selectCategoryStatus)
  const productsAllCategory = useAppSelector(selectProductsAllCat)
  const catProductAllStatus = useAppSelector(selectStatusAllCat)
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
        { productsAllCategory[0] && <Category products={productsAllCategory[0]} status={catProductAllStatus} /> }
      </section>
      <section>
        { productsAllCategory[1] && <Category products={productsAllCategory[1]} status={catProductAllStatus} /> }
      </section>
    </div>
  )
}
