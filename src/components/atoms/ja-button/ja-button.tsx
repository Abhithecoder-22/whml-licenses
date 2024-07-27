import React from 'react';
import { Button, ButtonProps, buttonVariants } from '../../ui/button';
import './ja-button.styles.css';

const JAButton = (props: ButtonProps) => {
  return (
    <div
      className={`btn-container btn-container-${props.variant} ${props.className}`}
    >
      <Button
        {...props}
        className={`ja-button ${props.className}`}
      ></Button>
    </div>
  );
};

export default JAButton;
