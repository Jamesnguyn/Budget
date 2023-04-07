import React from 'react';

const ItemPage = (props) => {
  return(
    <div>
      <h1>A thing ive done</h1>
      Item {props.match.params.id}
    </div>
  );
};

export default ItemPage;