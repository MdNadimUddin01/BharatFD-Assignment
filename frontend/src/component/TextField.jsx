import React from "react";
// import {} from "@mui/materia"
function Textfield({question, setQuestion}) {
  return (
    <div className="w-full">
      <textarea
        id="faqQuestion"
        className="w-full min-h-[150px] rounded-lg border border-gray-200 p-4 text-base placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-y bg-white shadow-sm"
        placeholder="Enter FAQ Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
    </div>
  );
}

export default Textfield;
