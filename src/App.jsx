import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "./components/signUpPage";
import { LoginPage } from "./components/loginPage";
import DashBoard from "./components/dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/dash-board" element={<DashBoard/>} />
    </Routes>
  );
};

export default App;
