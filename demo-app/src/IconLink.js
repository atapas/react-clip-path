import React from 'react';

const IconLink = props => {

    return(
        <a href={props.info.link} target="_blank">
            <img 
                src={props.info.icon} 
                alt={props.info.title} 
                style={{height: props.info.height}}
                title={props.info.title} />
        </a>
    )
};

export default IconLink;