import Home from "../layouts/LayoutAdmin/Home";
import PageList from "../pages/backend/Page";
import PageEdit from "../pages/backend/Page/PageEdit";
import PageNew from "../pages/backend/Page/PageNew";
import Brand from "../pages/backend/brand";
import BrandDetail from "../pages/backend/brand/BrandDetail";
import BrandEdit from "../pages/backend/brand/BrandEdit";
import BrandNew from "../pages/backend/brand/BrandNew";
import Category from "../pages/backend/category";
import CategoryDetail from "../pages/backend/category/CategoryDetail";
import CategoryEdit from "../pages/backend/category/CategoryEdit";
import CategoryNew from "../pages/backend/category/CategoryNew";
import Contact from "../pages/backend/contact";
import ContactDetail from "../pages/backend/contact/ContactDetail";
import ContactReply from "../pages/backend/contact/ContactReply";
import Menu from "../pages/backend/menu";
import MenuDetail from "../pages/backend/menu/MenuDetail";
import MenuEdit from "../pages/backend/menu/MenuEdit";
import MenuNew from "../pages/backend/menu/MenuNew";
import Order from "../pages/backend/order";
import OrderDetail from "../pages/backend/order/OrderDetail";
import Post from "../pages/backend/post";
import PostDetail from "../pages/backend/post/PostDetail";
import PostEdit from "../pages/backend/post/PostEdit";
import PostNew from "../pages/backend/post/PostNew";
import Product from "../pages/backend/product";
import AddSale from "../pages/backend/product/AddSale";
import AddStock from "../pages/backend/product/AddStock";
import ProductDetail from "../pages/backend/product/ProductDetail";
import ProductEdit from "../pages/backend/product/ProductEdit";
import ProductNew from "../pages/backend/product/ProductNew";
import Slider from "../pages/backend/slider";
import SliderDetail from "../pages/backend/slider/SliderDetail";
import SliderEdit from "../pages/backend/slider/SliderEdit";
import SliderNew from "../pages/backend/slider/SliderNew";
import TopicList from "../pages/backend/topic";
import TopicDetail from "../pages/backend/topic/TopicDetail";
import TopicEdit from "../pages/backend/topic/TopicEdit";
import TopicNew from "../pages/backend/topic/TopicNew";
import User from "../pages/backend/user";
import UserDetail from "../pages/backend/user/UserDetail";
import UserEdit from "../pages/backend/user/UserEdit";
import UserNew from "../pages/backend/user/UserNew";

const RouterPrivate = [
  /* Dashboard & Login */
  { path: "/admin", component: Home },

  /* Brand */
  { path: "/admin/brand/:page", component: Brand },
  { path: "/admin/brand/new", component: BrandNew },
  { path: "/admin/brand/detail/:id", component: BrandDetail },
  { path: "/admin/brand/edit/:id", component: BrandEdit },

  /* Category */
  { path: "/admin/category/:page", component: Category },
  { path: "/admin/category/new", component: CategoryNew },
  { path: "/admin/category/edit/:id", component: CategoryEdit },
  { path: "/admin/category/detail/:id", component: CategoryDetail },

  /* Contact */
  { path: "/admin/contact/:page", component: Contact },
  { path: "/admin/contact/detail/:id", component: ContactDetail },
  { path: "/admin/contact/edit/:id", component: ContactReply },

  /* Menu */
  { path: "/admin/menu/:page", component: Menu },
  { path: "/admin/menu/new", component: MenuNew },
  { path: "/admin/menu/edit/:id", component: MenuEdit },
  { path: "/admin/menu/detail/:id", component: MenuDetail },

  /* Order */
  { path: "/admin/order/:page", component: Order },
  { path: "/admin/order/detail/:id", component: OrderDetail },

  /* Post */
  { path: "/admin/post/:page", component: Post },
  { path: "/admin/post/new", component: PostNew },
  { path: "/admin/post/detail/:id", component: PostDetail },
  { path: "/admin/post/edit/:id", component: PostEdit },

  /* Product */
  { path: "/admin/product/:page", component: Product },
  { path: "/admin/product/new", component: ProductNew },
  { path: "/admin/product/detail/:id", component: ProductDetail },
  { path: "/admin/product/edit/:id", component: ProductEdit },
  { path: "/admin/product/sale", component: AddSale },
  { path: "/admin/product/stock", component: AddStock },

  /* Slider */
  { path: "/admin/slider/:page", component: Slider },
  { path: "/admin/slider/new", component: SliderNew },
  { path: "/admin/slider/detail/:id", component: SliderDetail },
  { path: "/admin/slider/edit/:id", component: SliderEdit },

  /* User */
  { path: "/admin/user/:roles/:page", component: User },
  { path: "/admin/user/new", component: UserNew },
  { path: "/admin/user/edit/:id", component: UserEdit },
  { path: "/admin/user/detail/:id", component: UserDetail },

  /* Topic */
  { path: "/admin/topic/:page", component: TopicList },
  { path: "/admin/topic/new", component: TopicNew },
  { path: "/admin/topic/edit/:id", component: TopicEdit },
  { path: "/admin/topic/detail/:id", component: TopicDetail },

  /* page */
  { path: "/admin/page/:page", component: PageList },
  { path: "/admin/page/new", component: PageNew },
  { path: "/admin/page/edit/:id", component: PageEdit },
];

export default RouterPrivate;
