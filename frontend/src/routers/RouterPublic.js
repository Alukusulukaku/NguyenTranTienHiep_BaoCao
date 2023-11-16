import Home from "../layouts/LayoutSite/Home";
import Detail from "../pages/frontend/product/Detail";
import Cart from "../pages/frontend/cart/Cart";
import Content from "../pages/frontend/Content";
import Register from "../pages/frontend/user/Register";
import CategoryList from "../pages/frontend/category/CategoryList";
import Account from "../pages/frontend/profile";
import Search from "../pages/frontend/product/ProductSearch";
import Contact from "../pages/frontend/contact";
import Category from "../pages/frontend/category/Category";
import NewList from "../pages/frontend/news/NewList";
import LoginAndRegister from "../pages/frontend/user/LoginAndRegister";
import SearchResult from "../pages/frontend/product/SearchResult";
import Payment from "../pages/frontend/cart/Payment";
import NewDetail from "../pages/frontend/news/NewDetail";

const RouterPublic = [
  { path: "/", component: Home },
  { path: "/san-pham/:category/:slug", component: Detail },
  { path: "/products-search/:slug", component: Search },
  { path: "/account/:chucnang", component: Account },
  { path: "/cart", component: Cart },
  { path: "/cart/checkout", component: Payment },
  { path: "/user-auth", component: LoginAndRegister },
  { path: "/register", component: Register },
  { path: "/mycart", component: Cart },
  { path: "/category/:parent/:children/:page", component: CategoryList },
  { path: "/category", component: Category },
  { path: "/content", component: Content },
  { path: "/contact-us", component: Contact },
  { path: "/post-detail/:topic/:slug", component: NewDetail },
  { path: "/news/:slug/:page", component: NewList },
  { path: "/search-result/:search/:page", component: SearchResult },
  { path: "/company/:slug", component: Content },
];
export default RouterPublic;
