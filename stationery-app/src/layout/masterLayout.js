import { memo } from "react";
import Footer from "../component/footer/footer";
import Header from "../component/header/header";
const MasterLayout =({ children, ...props}) =>{
    return (
        <div {...props}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};
export default memo(MasterLayout);