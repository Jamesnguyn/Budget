import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);

  return (
    <div>
      Editing {props.match.params.id}
      This is from my edit expense component
    </div>
  );
};

export default EditExpensePage;