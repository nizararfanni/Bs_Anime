import React from "react";

const InputForm = ({ error, tittle, field }) => {
  return (
    <div className="flex flex-col  max-w-[350px] items-center">
      <p className="text-red-600 min-h-[20px] flex justify-center items-center">{error}</p>
      <label htmlFor={field.name} className="text-white font-semibold py-2">
        <div className="flex justify-between items-center">
          <span>{tittle}</span>
          <input
        //   buset spreak operator ini nerima semua props field yg di kirm {{}}
            {...field}
            className="ml-3 px-2 py-1 ring-1 ring-gray-400 focus:outline-none focus:ring-blue-400 rounded-md flex-grow"
          />
        </div>
      </label>
    </div>
  );
};

export default InputForm;
