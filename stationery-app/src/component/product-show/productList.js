import {memo} from 'react';
import Product from './product';

function ProductList(props){
    const { productList } = props;

    return (
        <div className='productList'>
            {productList.map((element,index) => {
            return (
                <div key ={index} className='productList'>
                    <Product product = {element} />
                </div>
            );
            })}
        </div>
    );
}
export default memo(ProductList);