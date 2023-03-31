import React from "react";
import Option from "./Option";

const Options = (props) => (
    <div>
      <button onClick={props.handleDeleteOptions}>REMOVE ALL</button>
      <ol>
        {
          props.options.map( (option) => (
            <Option
              key={option} 
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </ol>
    </div>
);

export default Options;