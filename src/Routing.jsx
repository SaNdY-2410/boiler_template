import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Service from "./pages/Service";
import Settings from "./pages/Settings";
import Tools from "./pages/Tools";
import Database from "./pages/Database";
import Analytics from "./pages/Analytics";

const Routing = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/service" element={<Service />}>
            <Route path="tools" element={<Tools />} />
            <Route path="database" element={<Database />} />
            <Route path="analytics" element={<Analytics />} />

          </Route>
          <Route path="/settings" element={<Settings />} />

        </Route>
      </Route>
    </Routes>
  )
};

export default Routing;
