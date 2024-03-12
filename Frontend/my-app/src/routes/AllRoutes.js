
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ProCategories from "../pages/ProCategories";
import Productss from "../pages/Productss";
import AddToCard from "../pages/AddToCard";
import Home from "../pages/Home";


const allRoutes = [
    { Name: "home", path: '/', components: <Home/> },
    { Name: "Signup", path: '/signup', components: <Signup/> },
    {Name: "Login", path: '/login', components: <Login/>},
    {Name: "Products", path: '/products/:selectedProCatId', components: <Login/>},
    {Name: "Add to cart", path: '/addtocart', components: <AddToCard/>},
    {Name: "Orders", path: '/order', components: <Orders/>},
]
export default allRoutes;

// <Route path='/' element={<Home />} />
//       <Route path='/products/:selectedProCatId' element={<Productss />} />
//       <Route path='/signup' element={<Signup />} />
//       <Route path='/login' element={<Login />} />