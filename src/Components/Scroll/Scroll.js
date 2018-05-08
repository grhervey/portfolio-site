import React from 'react';

const Scroll = (props) => {
    return (
        <div  style={{display:'flex', flexDirection: 'row', width:'75vw', overflowX: 'scroll', border:'1px solid black', height: '500px'}}>
            { props.children }
        </div>
        );
};

export default Scroll;
