import React from 'react';

const TextInput = () => {
    let wrapperClass = "form-group";

    return (
        <div className={wrapperClass}>
            <div className={'field'}>
                <input
                    type={'text'}
                    className={'form-control'}
                />
            </div>
        </div>
    )
};

export default TextInput;