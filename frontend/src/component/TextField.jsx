import React from "react";
// import {} from "@mui/materia"
function Textfield() {
  return (
    <div>
      <div className="space-y-2">
      <label 
        htmlFor="faqWuestion" 
        className="text-sm font-medium text-gray-700 flex flex-start px-2"
      >
        Qyestion
      </label>

      <textarea
        id="faqWuestion"
        className="w-full min-h-[100px] rounded-lg border border-gray-200 p-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-y"
        placeholder="Enter FAQ Question"
      />
    </div>

    </div>
  );
}

export default Textfield;
