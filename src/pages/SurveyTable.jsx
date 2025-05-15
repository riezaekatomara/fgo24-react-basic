import React from "react";

const SurveyTable = ({ data }) => {
  if (data.length === 0) {
    return <div>Belum ada data survey.</div>;
  }

  return (
    <table border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Jenis Kelamin</th>
          <th>Perokok</th>
          <th>Merk Rokok</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, idx) => (
          <tr key={idx}>
            <td>{d.name}</td>
            <td>{d.age}</td>
            <td>{d.gender}</td>
            <td>{d.isSmoker === "yes" ? "Ya" : "Tidak"}</td>
            <td>{d.isSmoker === "yes" ? d.brands.join(", ") : "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SurveyTable;
