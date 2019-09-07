import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({label, value, name, placeholder}) => {
    let wrapperClass = "form-group";

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className={'field'}>
                <input
                    type={'text'}
                    className={'form-control'}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
}

export default TextInput;