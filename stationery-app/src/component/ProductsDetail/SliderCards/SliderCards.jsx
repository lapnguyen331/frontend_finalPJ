import React, {useMemo} from 'react';
import './SliderCardsStyles.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { formatPercentage, formatPrices } from "../../../utils";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import productsData from "../../../data/Product/productData";
import { Button } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

// Hàm tiện ích để lấy một tập hợp ngẫu nhiên các ID sản phẩm
function getRandomProductIds(products, num) {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num).map(product => product.id);
}


function SliderCards() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
    };
    // Sử dụng useMemo để ghi nhớ các ID sản phẩm đã chọn để tránh tính toán lại mỗi lần render
    const selectedProductIds = useMemo(() => getRandomProductIds(productsData, 6), []);

    // Lọc các sản phẩm dựa trên các ID đã chọn
    const selectedProducts = productsData.filter(product => selectedProductIds.includes(product.id));

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {/*{productsData.map((product) => (*/}
                {selectedProducts.map((product) => (
                    <div className="card" key={product.id}>
                        <div className="card_top">
                            <div className="wrapImgs">
                                <img className="img_other" src={product.images[0].url} alt={product.images[0].alt} />
                            </div>
                            <h3 className="titleProduct">{product.title}</h3>
                        </div>
                        <div className="card_bottom">
                            <div className="price_container">
                                <span className="prices">
                                    {formatPrices(product.price)}
                                </span>
                                {product.discount > 0 && (
                                    <span className="sale_price">{formatPrices(product.salePrice)}</span>
                                )}
                            </div>
                            <div className="others">
                                <div className="others_discounts">
                                    {product.discount > 0 && (
                                        <span className="discounts_price">
                                    -{formatPercentage(product.discount)}
                                            <LocalOfferIcon className="idiscount"/>

                            </span>
                                    )}
                                </div>
                                <div className="others_btns">
                                    <Button className="ivisible"><VisibilityIcon/></Button>
                                    <Button className="iaddCart"><AddShoppingCartIcon /></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

    );
}

export default SliderCards;
