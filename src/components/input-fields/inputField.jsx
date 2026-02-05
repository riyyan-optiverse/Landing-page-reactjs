import React, { Component } from "react";
import fields from "../../static/static-data";
import TextArea from "./textArea";
class InputFields extends Component {
  render() {
    return (
      <>
        <div className="mt-6 flex flex-wrap gap-5">
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col gap-1">
              <label className="text-lg font-semibold">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className={`${field.width} h-10 border outline-none border-b-gray-300 rounded-md px-5`}
              />
            </div>
          ))}
        </div>
         <TextArea/>
         
      </>
    );
  }
}
export default InputFields;
