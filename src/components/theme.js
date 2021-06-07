import React from 'react';

const colors = (stylesProvider, Comp) => {
    const Component = (props) => {
      const theme = {mainColor: 'red'}
      return <Comp {...props} styles={stylesProvider(theme)}></Comp>
    };
    return Component;
  }


export default colors;