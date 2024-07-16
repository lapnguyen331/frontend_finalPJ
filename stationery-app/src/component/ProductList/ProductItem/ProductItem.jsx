import React from "react";
import './ProductItemStyles.scss'
import {formatPercentage, formatPrices} from "../../../utils";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {Button} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import productsData from "../../../data/Product/productData";

function ProductItem({ productid }) {
    const product = productsData.find(item => item.id === productid);
    return (
        <div className="card" key={product.id}>
            <div className="card_top">
                <div className="wrapImgs">
                    <img className="img_other" src={product.images[0].url} alt={product.images[0].alt}/>
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
                        <Button className="iaddCart"><AddShoppingCartIcon/></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;