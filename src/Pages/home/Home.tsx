import { useEffect } from 'react'
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

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchCategories())
    dispatch(fetchProductsByCategory(1, 'all'))
    dispatch(fetchProductsByCategory(2, 'all'))
  }, [])

  return (
    <div>
      <Slider />
      <Category categories={categories} status={categoryStatus} />
    </div>
  )
}
