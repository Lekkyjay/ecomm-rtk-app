import { sliderImages } from '../../utils/images'
import './Slider.scss'

export default function Slider() {
  return (
    <div className = "hero-slider">
      <div className='hero-slider-item'>
        <img src = {sliderImages[1]} alt = "" />
      </div>
    </div>
  )
}
