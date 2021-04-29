import './home.scss';
import Product from '../Product';
const Home = () => {
    return(
        <div className="home">
           
<img className="home__image" src="https://cdn.pixabay.com/photo/2020/02/25/13/44/brush-4878910_1280.jpg" alt=""/>
    <div className="content">
       <div className="home__row">
                <Product 
                id="1"
                title="Make up"
                price={11.50}
                rating={4}
                image="https://cdn.pixabay.com/photo/2017/01/16/14/17/make-up-1984115__480.jpg"
                />

               <Product 
                id="2"
                title="Make up kit"
                price={18.50}
                rating={5}
                image="https://cdn.pixabay.com/photo/2017/07/06/21/57/makeup-2479611__480.jpg"
                />

            <Product 
                id="3"
                title="New brand"
                price={13.50}
                rating={2}
                image="https://cdn.pixabay.com/photo/2014/01/12/13/54/makeup-set-242806__480.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                id="4"
                title="Make up"
                price={11.50}
                rating={4}
                image="https://cdn.pixabay.com/photo/2017/01/16/14/17/make-up-1984115__480.jpg"
                />

               <Product 
                id="5"
                title="Make up kit"
                price={18.50}
                rating={5}
                image="https://cdn.pixabay.com/photo/2017/07/06/21/57/makeup-2479611__480.jpg"
                />

            <Product 
                id="6"
                title="New brand"
                price={13.50}
                rating={2}
                image="https://cdn.pixabay.com/photo/2014/01/12/13/54/makeup-set-242806__480.jpg"
                />

            <Product 
                id="7"
                title="New brand"
                price={13.50}
                rating={2}
                image="https://cdn.pixabay.com/photo/2014/01/12/13/54/makeup-set-242806__480.jpg"
                />
            </div>
          </div>  
           
    </div>
    )
}

export default Home;