import Navbar from "../../components/Navbar";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://www.iiswbm.edu/wp-content/themes/iiswbm/images/placement_banner.jpg" },
    { url: "https://res.cloudinary.com/pretto-fr/image/upload/q_auto,ar_16:9,c_fill/website/highlight/placement-achat-immobilier" },
    { url: "https://img.freepik.com/free-photo/man-handshaking-his-employer-after-being-accepted-his-new-office-job_23-2149034565.jpg?w=2000" },
  ];



const Home = () => {
    return (
        
        <div className="banner">
       <SimpleImageSlider
        width="100%"
        height="100%"
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
       <Navbar/>
              
        </div>
    )
}


export default Home;