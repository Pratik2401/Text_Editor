import React from 'react';

export default function Alert(props) {
  const capitalize = () => {
    
    const word = props.alert.type;
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
     props.alert && (
      <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize()}</strong>!{props.alert.msg}
        </div>
      </div>
    )
  );
}
