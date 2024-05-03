import React from 'react';

interface props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}


const Container:React.FC<props> = ({children,className, ...props }) => {
    return (
        <div className={`${className ? className :''} bg-gray-300 py-5 min-h-screen select-none` } {...props} >
            {children}
        </div>
    );
};

export default Container;
