import {
  BrowserRouter,
  Routes as RouterWrapper,
  Route,
} from "react-router-dom";
import { Home } from "../components/home";
import Layout from "../components/Layout";
import { GenericPageLayout } from "../components/Generic";
import {
  BlogBuilder,
  Blogs,
  Gallery,
  GalleryBuilder,
  ReviewBuilder,
  ServiceBuilder,
  Services,
} from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterWrapper>
        <Route Component={Layout} path="/">
          <Route index Component={Home} />
          <Route Component={Services} path="/services" />
          <Route Component={ServiceBuilder} path="/services/:pageName" />
          <Route
            element={<ServiceBuilder param={"patient-stories"} />}
            path="/patient-stories"
          />
          <Route
            element={<ServiceBuilder param={"our-office"} />}
            path="/our-office"
          />
          <Route element={<ServiceBuilder param={"map"} />} path="/contact" />
          <Route element={<ServiceBuilder param={"travel"} />} path="/travel" />
          <Route element={<ServiceBuilder param={"wink"} />} path="/wink" />
          <Route
            element={<ReviewBuilder param={"reviews"} />}
            path="/reviews"
          />
          <Route
            element={<ServiceBuilder param={"in-the-media"} />}
            path="/in-the-media"
          />

          <Route Component={Gallery} path="gallery" />
          <Route Component={GalleryBuilder} path="gallery/:pageName" />
          <Route Component={Blogs} path="blog" />
          <Route Component={BlogBuilder} path="blog/:pageName" />
        </Route>
      </RouterWrapper>
    </BrowserRouter>
  );
};

export default Routes;
