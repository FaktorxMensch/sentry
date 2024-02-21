import React from "react";
import { useState } from "react";

const DefaultSelect = ({ value, values, action, type }) => {
  const [input, setInput] = useState(value);

  return (
    <select
      value={input}
      onChange={(data) => {
        setInput(data.currentTarget.value);
        if (type === "int") {
          action(parseInt(data.currentTarget.value));
        } else if (type === "double") {
          action(parseFloat(data.currentTarget.value));
        } else {
          action(data.currentTarget.value);
        }
      }}
    >
      {values.map((element) => {
        //before
        //this use case in which we use <option> with a component inside
        //is not supported by react
        //fixed in version 18: https://github.com/facebook/react/issues/13699

        // return (
        //   <option value={element} key={element}>
        //     <Translator tid={element} />
        //   </option>
        // );

        //after
        return (
          <option value={element} key={element}>
            {element}
          </option>
        );
      })}
    </select>
  );
};

export default DefaultSelect;
