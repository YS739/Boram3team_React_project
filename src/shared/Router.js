import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import EditPage from "../pages/EditPage";
import UploadPage from "../pages/UploadPage";
import SignUpPage from "../pages/SignUpPage";
import MyPage from "../pages/MyPage";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {<Route path="/" element={<HomePage />} />}
          {<Route path="/:id" element={<DetailPage />} />}
          {<Route path="/edit/:id" element={<EditPage />} />}
          {<Route path="/upload" element={<UploadPage />} />}
          {<Route path="/login" element={<SignUpPage />} />}
          {<Route path="/my" element={<MyPage />} />}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;