import './home.scss';
import Product from '../Product';
const Home = () => {
    return(
        <div className="home">
           
<img className="home__image" src="https://cdn.pixabay.com/photo/2017/09/07/19/46/soap-2726394_1280.jpg" alt=""/>
    <div className="content">
       <div className="home__row">
                <Product 
                id={15436}
                title="Caramel et fleur de sel"
                price={4.50}
                rating={4}
                image="https://cdn.pixabay.com/photo/2016/07/11/15/45/soap-1509963_1280.jpg"
                />

               <Product 
                id={26536423}
                title="Trio de fleurs"
                price={4.50}
                rating={5}
                image="https://cdn.pixabay.com/photo/2020/05/08/10/22/soap-5145054_1280.jpg"
                />

            <Product 
                id={36532652}
                title="Rose/Bois de santal"
                price={4.50}
                rating={4}
                image="https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_1280.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                id={46532}
                title="Abricot et huile d'amande douce"
                price={4.50}
                rating={4}
                image="https://cdn.pixabay.com/photo/2017/05/22/07/34/soap-2333391_1280.jpg"
                />

               <Product 
               id={56532}
                title="Senteur Marine"
                price={4.50}
                rating={5}
                image="https://cdn.pixabay.com/photo/2014/09/15/23/34/soap-447656_1280.jpg"
                />

            <Product 
                id={66532}
                title="Exfoliant café"
                price={4.50}
                rating={4}
                image="https://cdn.pixabay.com/photo/2018/04/03/03/37/coffee-3285819_1280.jpg"
                />

            <Product 
                 id={65327}
                title="Miel et Cannelle"
                price={4.50}
                rating={5}
                image="https://cdn.pixabay.com/photo/2020/03/13/03/58/handmade-soap-4926842_1280.jpg"
                />
            </div>
          </div>  
           
    </div>
    )
}

export default Home;