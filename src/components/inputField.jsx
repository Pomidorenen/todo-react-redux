import React from 'react';

const InputField = ({text,setText, handleSubmit}) => {

    return (
        <div>
            <label className='text-field'>
                <input
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                />
                <button
                    onClick={handleSubmit}
                >
                    add todo
                </button>
            </label>
        </div>
    );
};

export default InputField;