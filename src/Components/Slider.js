import banner1 from './Images/banner1.jpg'
import Header from './Header'
const Slider = () => {
    return <div>
        <Header />
        <img src={banner1} className="banner" />
      </div>;
}

export default Slider