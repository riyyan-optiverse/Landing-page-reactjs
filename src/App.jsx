import Card from "./components/card";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { PropertyListing } from "./components/propertyListing";
import { PostProperty } from "./components/postProperty";
import { Blog } from "./components/blog";
import { ContactUs } from "./components/contactUs";
import { LoginPage } from "./components/loginPage";
import { SignUpPage } from "./components/signUpPage";
import Navbar from "./components/navbar/navbar-content";

const App = () => {
  return (
      
 <>
 <Navbar/>
    <Routes>
      <Route path="/property-listing" element={<Home />} />
      <Route path="/post-property" element={<PropertyListing />} />
      <Route path="/blog" element={<PostProperty />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/login" element={<LoginPage />} />
       <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/home" element={<Card />} />
    </Routes>
    </>
   
  );
};

export default App;
