import {
  BrowserRouter,
  Routes as RouterWrapper,
  Route,
} from "react-router-dom";
import { Home } from "../components/home";
import Layout from "../components/Layout";
import { GenericPageLayout } from "../components/Generic";
import { Services } from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterWrapper>
        <Route Component={Layout} path="/">
          <Route index Component={Home} />
          <Route Component={Services} path="/services" />
          <Route Component={GenericPageLayout} path="/services/:pageName" />
        </Route>
      </RouterWrapper>
    </BrowserRouter>
  );
};

export default Routes;
