import { error } from '../../utils/images'
import './Error.scss'

export default function Error() {
  return (
    <div className='container'>
        <div className="flex flex-center error">
            <img src={error} alt = "error" />
        </div>
    </div>
  )
}
