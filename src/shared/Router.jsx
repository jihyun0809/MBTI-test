import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRouter";
import Profile from "../pages/Profile";
import Test from "../pages/Test";
import Layout from "./Layout";
import UserProvider from "../components/UserProvider";
import TestResult from "../pages/testResult";
import Signup from "../pages/Signup";


const Router = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {/* 보호 경로 */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/test" element={<Test />} />
              <Route path="result" element={<TestResult />} />
            </Route>
            {/* 일반 경로 */}
          </Route>

          {/* 404페이지 */}
          <Route path="*" element={<>없는 페이지 입니다.</>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default Router;
