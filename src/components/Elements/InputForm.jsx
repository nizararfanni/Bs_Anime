import React from "react";

const InputForm = ({ error, tittle, field }) => {
  return (
    <div className="flex flex-col w-full max-w-[350px] items-start">
      <p className="text-red-600 min-h-[20px] flex justify-center items-center w-full">
        {error}
      </p>
      <label
        htmlFor={field.name}
        className="text-white font-semibold  w-full"
      >
        <span>{tittle}</span>
        <input
          //   buset spreak operator ini nerima semua props field yg di kirm {{}}
          {...field}
          className="w-full mt-1 py-1 px-2 ring-1 ring-gray-400 focus:outline-none focus:ring-blue-400 rounded-md"
        />
      </label>
    </div>
  );
};

export default InputForm;
