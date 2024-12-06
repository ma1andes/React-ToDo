import React from 'react';

function TodoButton({ classString, children, onClick }) {

    return (
        <button type='button' onClick={onClick} className={classString}>
            {children}
        </button>
    );
}

export default TodoButton;