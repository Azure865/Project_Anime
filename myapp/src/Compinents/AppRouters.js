import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Signup_Login from "./Signup_Login/Signup_Login";
import Search from "./Search/Search";
import Episodes from "./Home/Episodes/Episodes";
import Videos from "./Home/Episodes/Videos";

export default [
  { path: "/", component: Home, exact: true },
  { path: "/about", component: About, exact: true },
  { path: "/contact", component: Contact, exact: true },
  { path: "/signup_login", component: Signup_Login, exact: true },
  { path: "/search", component: Search, exact: true },
  { path: "/episodes/:id", component: Episodes, exact: true },
  { path: "/videos", component: Videos, exact: true },
];
