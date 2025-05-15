import { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);

  const decrement = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const increment = () => {
    if (num < 10) {
      setNum(num + 1);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg">
        <button
          onClick={decrement}
          className="px-4 py-2 text-2xl font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none"
        >
          -
        </button>
        <p className="text-3xl font-semibold">{num}</p>
        <button
          onClick={increment}
          className="px-4 py-2 text-2xl font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
