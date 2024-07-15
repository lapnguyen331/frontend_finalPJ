import React from 'react';
import './ProductsTypes.scss'
import InputCheckBox from "../inputCheckBox/InputCheckBox";

function ProductsTypes({handleChange}) {

    const typesOptions = [
        {classnames: "pens", value: "pens", title: "Bút"},
        {classnames: "books", value: "books", title: "Sách"},
        {classnames: "notes", value: "notes", title: "Sổ"},
        {classnames: "papers", value: "papers", title: "Giấy"},
        {classnames: "others", value: "others", title: "Khác"},
    ];

    return (
      <div className="productsType_container">
          <h2> Danh mục</h2>
<div className="checkbox_wrap">

    <label className="label_sidebar">
        <input type="checkbox" className="allTypes" name="types" value="all" onChange={handleChange}/>
        <span className="choose"> </span> Tất cả
    </label>

    {typesOptions.map((type) => (
        <InputCheckBox
            key={type.value}
            classnames={type.classnames}
            name="types"
            value={type.value}
            title={type.title}
            handleChange={handleChange}
        />
    ))}
</div>

      </div>
    );
}

export default ProductsTypes;