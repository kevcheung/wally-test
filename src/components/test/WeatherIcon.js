import React from 'react';

export default function weatherIcon(props){
    const { obj } = props;
    return (
        <div>
          <p>
            {obj.main}
          </p>
          <img
            src={`http://openweathermap.org/img/w/${obj.icon}.png`}
            alt={`${obj.description}`}
          />
        </div>
      );
}