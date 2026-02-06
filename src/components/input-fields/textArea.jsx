import React, { Component } from "react";

class TextArea extends Component {
  render() {
    return (
      <div className="mt-3 flex flex-col gap-1 ">
        <label className="text-lg font-semibold">Message*</label>
        <textarea
          rows="5"
          className=" w-full max-w-xl border outline-none border-gray-300 rounded-md px-3 "
          placeholder="Message*"
        />
      </div>
    );
  }
}
export default TextArea;