import React from 'react';
import { Button } from 'antd';

const BigButton = (props) => {
    return (
        <Button {...props} size="large">
          {props.children}
        </Button>
    )
}

export default BigButton;