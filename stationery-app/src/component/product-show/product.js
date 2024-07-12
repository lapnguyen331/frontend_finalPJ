import {memo} from 'react';

import "./product.scss"
function Product(){
    return(
        <>
        <section className='card-container'>
            <form action='/cart/add' method='post' className='product-card'>
                <div className='image-wrap'>
                    <a className='image-thumb' href="/item1">
                        <img  className="card-image" src='https://product.hstatic.net/1000230347/product/9ac7baecb3d8064564a0a447b7ff574d_615ef97d9c524b42bea384538e662832_large.jpg'/>
                    </a>
                </div>
                <div className='card-detail'>
                    <h3 className='card-name'>
                        <span className='new-label'>New</span>
                        <a className='card-title'>LIFE (BRE) (2 ED.) (VN ED.) A1-A2: STUDENT BOOK WITH CODE ONLINE</a>
                    </h3>
                    <section className='card-price'>
                        <div className='price'>5000đ</div>
                        <del className='compare-price'>700000đ</del>

                    </section>
                    <section className='card-bottom'>
                        <div className='discount-label'>
                            <div className='discount-num'>10%</div>
                        </div>
                        <div className='card-action'>
                            <i className='material-icons' style={{color:"red"}}>Liked</i>
                            <i className='material-icons' style={{color:"red"}}>cart</i>
                        </div>
                    </section>
                </div>
            </form>
        </section>
        </>
    );
}
export default memo(Product);