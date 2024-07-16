import { memo } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Button } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import "./product.scss";
function Product(props) {
  // return(
  //     <>
  //     <section className='card-container'>
  //         <form action='/cart/add' method='post' className='product-card'>
  //             <div className='image-wrap'>
  //                 <a className='image-thumb' href="/item1">
  //                     <img  className="card-image" src='https://product.hstatic.net/1000230347/product/9ac7baecb3d8064564a0a447b7ff574d_615ef97d9c524b42bea384538e662832_large.jpg'/>
  //                 </a>
  //             </div>
  //             <div className='card-detail'>
  //                 <h3 className='card-name'>
  //                     <span className='new-label'>New</span>
  //                     <a className='card-title'>LIFE (BRE) (2 ED.) (VN ED.) A1-A2: STUDENT BOOK WITH CODE ONLINE</a>
  //                 </h3>
  //                 <section className='card-price'>
  //                     <div className='price'>5000đ</div>
  //                     <del className='compare-price'>700000đ</del>

  //                 </section>
  //                 <section className='card-bottom'>
  //                     <div className='discount-label'>
  //                         <div className='discount-num'>10%</div>
  //                     </div>
  //                     <div className='card-action'>
  //                         <i className='material-icons' style={{color:"red"}}>Liked</i>
  //                         <i className='material-icons' style={{color:"red"}}>cart</i>
  //                     </div>
  //                 </section>
  //             </div>
  //         </form>
  //     </section>
  //     </>
  // );
  const {product} = props;
  
  return (
    <div className="card" key={product.id}>
      <div className="card_top">
        <div className="wrapImgs">
          <img
            className="img_other"
            src={product.images[0].url}
            alt={product.images[0].alt}
          />
        </div>
        <h3 className="titleProduct">{product.title}</h3>
      </div>
      <div className="card_bottom">
        <div className="price_container">
          <span className="prices">{formatPrices(product.price)}</span>
          {product.discount > 0 && (
            <span className="sale_price">
              {formatPrices(product.salePrice)}
            </span>
          )}
        </div>
        <div className="others">
          <div className="others_discounts">
            {product.discount > 0 && (
              <span className="discounts_price">
                -{formatPercentage(product.discount)}
                <LocalOfferIcon className="idiscount" />
              </span>
            )}
          </div>
          <div className="others_btns">
            <Button className="ivisible">
              <VisibilityIcon />
            </Button>
            <Button className="iaddCart">
              <AddShoppingCartIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
function  formatPrices(){
    return "hehe"
}
function formatPercentage(){

}
export default memo(Product);
