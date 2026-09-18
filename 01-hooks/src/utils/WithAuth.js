import React from 'react';

const withAurth = (Componets) => {
    const isAurthcation = true;
    return function (props) {
        if(isAurthcation){
            return React.createElement(Componets, props);
        }else{
            return React.createElement('p', null, 'Place Login');
        }
        
    }
}

export default withAurth;