import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainLayout from "./layout/MainLayout";
import Home from "./component/Home";

const Routing = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home/>} />
        </Route>
      </Route>
    </Routes>
  )
};

export default Routing;
