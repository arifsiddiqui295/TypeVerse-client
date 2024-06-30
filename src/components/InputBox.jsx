import React, { forwardRef } from 'react';

const InputBox = forwardRef((props, ref) => {

    return (
        <div className='flex items-center justify-center pr-5 pl-5 mt-10'>
        <div className='max-w-screen-lg w-full mx-auto'>
            <div className='mt-10 sm:mt-20'>
                <textarea
                    onPaste={(e) => e.preventDefault()} 
                    disabled={props.disabled}
                    className='outline-none rounded-lg p-3 text-xl sm:text-2xl h-52 sm:h-80 w-full md:w-4/5 lg:w-3/4 xl:w-2/3'
                    value={props.value}
                    onKeyDown={props.onKeyDown}
                    onChange={props.onChange}
                    ref={ref}
                />
            </div>
        </div>
         </div>
    );
});

export default InputBox;
