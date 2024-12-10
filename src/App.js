import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import AboutUs from './components/About.js'
import Product from './components/Products.js'
import Search from './components/Search.js'

function App(){
return(
    <div>
  <Navbar></Navbar>
  <Search></Search>
  <Product></Product>
  <AboutUs></AboutUs>
  <Footer></Footer>
</div>
)
}

export default App