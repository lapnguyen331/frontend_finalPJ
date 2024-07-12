import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PATH } from "./untils/path";
import MasterLayout from "./layout/masterLayout"
import HomePage from "./pages/homepage/home"
import ContactPage from "./pages/contact/contact"
import AboutPage from "./pages/about/about"
import PolicyPage from "./pages/policy/policy"

const renderRouter =() =>{
    const userRouters = [
        {
            path: "/",
            component: <HomePage/>
        },
        {
            path :PATH.USER.HOME,
            component: <HomePage/>
        },
        {
            path :PATH.USER.ABOUT,
            component: <AboutPage/>
        },
        {
            path :PATH.USER.POLICY,
            component: <PolicyPage/>
        },
        {
            path:PATH.USER.CONTACT,
            component:<ContactPage/>
        },
    ];
    return (
        <MasterLayout>
            <Routes>
            {userRouters.map((item, key) => (
                <Route key={key} path={item.path} element={item.component} />
            ))}
            </Routes>
        </MasterLayout>
    );
}
const RouterCustom  = () =>{
    return renderRouter();
}
export default RouterCustom;