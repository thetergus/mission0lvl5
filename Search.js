import './Search.css';
import logo from './media/Indie_World_Logo_custom.png'

function SearchSection() {
  return (  <>      {/* <!-- Search Section --> */}
    <div className="search">
        <div className="search__container">

            <div className="search__container__top">
                <span className="search__container__toplefttext">   When you live on an </span>
                <img src={logo} alt="Indie World Logo" className="search__container--img"        />
                <span className="search__container__toprighttext"> There's always more.</span>
            </div>

            <div className="search__container__bottom">
                <form className='search__container__bottom--form'> 
                  <input className='search__container__bottom--input' type="search" id="query" name="q" placeholder="Search..."/>
                <button className='search__container__bottom--button'>Search</button>
                </form>

            </div>
        </div>                
    </div>
    </>  );}
export default SearchSection;