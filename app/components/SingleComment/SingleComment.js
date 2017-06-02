import React from 'react';

export default (props) => {
  let styleObj = {
    backgroundColor: "white",
    width: "50%",
    marginLeft: "5%"
  };
  return (
  <div>
    <p style={styleObj}>{props.singleComment.message}</p>
  </div>
)
}
