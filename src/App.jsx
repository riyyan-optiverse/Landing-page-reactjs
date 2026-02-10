import Card from "./components/card";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { PropertyListing } from "./components/propertyListing";
import { PostProperty } from "./components/postProperty";
import { Blog } from "./components/blog";
import { ContactUs } from "./components/contactUs";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/property-listing" element={<PropertyListing />} />
      <Route path="/post-property" element={<PostProperty />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/" element={<Card />} />
    </Routes>
  );
};

export default App;
