import { spinner } from '../../utils/images'
import './Loader.scss'

export default function Loader() {
  return (
    <div className='container'>
      <div className="flex flex-center loader">
        <img src={spinner} alt="loader" />
      </div>
    </div>
  )
}
