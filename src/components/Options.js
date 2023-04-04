import React from "react";
import Option from "./Option";

const Options = (props) => (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__link">YOUR OPTIONS</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          REMOVE ALL
        </button>
      </div>
      
      {props.options.length === 0 && <p className="widget__message">PLEASE ADD OPTIONS</p>}
        {
          props.options.map( (option) => (
            <Option
              key={option} 
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }

    </div>
);

export default Options;