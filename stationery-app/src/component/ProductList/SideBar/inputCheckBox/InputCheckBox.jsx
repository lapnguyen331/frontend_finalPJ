import React from 'react';
import './InputCheckBox.scss'
function InputCheckBox({classnames, name, value, handleChange, title}) {

    return (
        <label className={`label_sidebar`}>
            <input className={classnames} type="checkbox"  name={name}
                   value={value} onChange={handleChange} />
            <span className="choose"> </span>  {title}
        </label>
    );
}
export default InputCheckBox;