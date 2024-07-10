import React, {useState} from 'react';
import productsData from "../../../data/Product/productData";
import './ProductsDetailsImgsStyles.scss'
function ProductsDetailsImgs({ productId }) {
    // Tìm sản phẩm trong danh sách dựa vào productId
    const product = productsData.find(item => item.id === productId);


    // Lấy mảng các hình ảnh của sản phẩm
    const images = product.images;

    const [image, setImage] = useState({
        img1: images[0].url,
        img2: images[1].url,
        img3: images[2].url,
        img4: images[3].url,
    });

    const [activeImg, setActiveImg] = useState(image.img1);
    return (
        <div className="imgs_container">
            <div className="img_large">
                <div className="large_imgDetail">
                    <img className="imgDetail_large" src={activeImg} alt=""/>
                </div>
            </div>

            <div className="list_imgs">
                <div className="img1">
                    <img className="imglist" src={image.img1} alt="" onClick={() =>
                        setActiveImg(image.img1)}/>
                </div>
                <div className="img2">
                    <img className="imglist" src={image.img2} alt="" onClick={() =>
                        setActiveImg(image.img2)}/>
                </div>
                <div className="img3">
                    <img className="imglist" src={image.img3} alt="" onClick={() =>
                        setActiveImg(image.img3)}/>
                </div>
                <div className="img4">
                    <img className="imglist" src={image.img4} alt="" onClick={() =>
                        setActiveImg(image.img4)}/>
                </div>
            </div>
        </div>
    );
}

export default ProductsDetailsImgs;
