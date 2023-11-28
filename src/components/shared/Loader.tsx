
import Load from '../../../public/assets/icons/loader.svg';
const Loader = () => {
  return (
    <div className="flex-center w-full">
      <img
      src={Load}
      alt="loader"
      width={24}
      height={24}
      />
    </div>
  )
}

export default Loader