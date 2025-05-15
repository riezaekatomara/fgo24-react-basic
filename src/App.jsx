import React, { useState } from "react";
import SurveyForm from "./pages/SurveyForm";
import SurveyTable from "./pages/SurveyTable";

const App = () => {
  const [allData, setAllData] = useState([]);

  const addData = (newData) => setAllData((prev) => [...prev, newData]);

  return (
    <div>
      <SurveyForm onSubmit={addData} />
      <SurveyTable data={allData} />
    </div>
  );
};

export default App;
