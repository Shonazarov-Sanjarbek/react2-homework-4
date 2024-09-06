import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Auth from "./pages/Auth/Auth";



function App() {
  return (
    <>
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Auth />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </>
  );
}

export default App;
