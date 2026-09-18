import React from 'react';

const WithDark = (Componets) => {
   const styls = {
        backgroundColor: 'black',
        color:'white'
    }
    return (props) =>{
        return React.createElement(
            'div',
            { style: styls },
            React.createElement(Componets, props)
        );
    }
}

export default WithDark;