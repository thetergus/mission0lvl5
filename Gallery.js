import './Gallery.css';
function GallerySection() {
  return ( <>
  {/* <!-- Gallery Section --> */}
    <div className='gallery'>
        
        <div className="Video"><img src="https://www.shutterstock.com/image-vector/url-shortener-man-pushes-address-600w-2201694049.jpg" alt="image"/>
            <div className ="videoText">
            <h5>Sample Tittle</h5>
            <p> Sample descriptor</p>
            </div>
        </div>

        <div className="Video"><img src="https://www.shutterstock.com/image-vector/url-shortener-man-pushes-address-600w-2201694049.jpg" alt="image"/>
        <div className ="videoText">
            <h5>Sample Tittle</h5>
            <p> Sample descriptor</p>
            </div>
        </div>

        <div className="Video"><img src="https://www.shutterstock.com/image-vector/url-shortener-man-pushes-address-600w-2201694049.jpg" alt="image"/>
        <div className ="videoText">
            <h5>Sample Tittle</h5>
            <p> Sample descriptor</p>
            </div>
        </div>

     </div>    
</>  
);}

  export default GallerySection;