import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PATH } from "./untils/path";
import HomePage from "./pages/homepage/home"
import ContactPage from "./pages/contact/contact"
import MasterLayout from "./layout/masterLayout"

const renderRouter =() =>{
    const userRouters = [
        {
            path: PATH.USER.HOME,
            component: <HomePage/>
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