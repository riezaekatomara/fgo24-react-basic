import React, { useState } from "react";

const brandsList = ["Gudang Garam Filter", "Lucky Strike", "Marlboro", "Esse"];
const genders = ["Laki-laki", "Perempuan"];
const smokerOptions = [
  { val: "yes", label: "Ya" },
  { val: "no", label: "Tidak" },
];

const SurveyForm = ({ onSubmit }) => {
  const [data, setData] = useState({
    name: "",
    age: "",
    gender: "",
    isSmoker: "",
    brands: [],
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "brands") {
      setData((d) => ({
        ...d,
        brands: checked
          ? [...d.brands, value]
          : d.brands.filter((b) => b !== value),
      }));
    } else {
      setData((d) => ({
        ...d,
        [name]: value,
        ...(name === "isSmoker" && value === "no" ? { brands: [] } : {}),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    setData({ name: "", age: "", gender: "", isSmoker: "", brands: [] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Siapa nama anda?
          <br />
          <input
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Berapa umur anda?
          <br />
          <input
            type="number"
            name="age"
            value={data.age}
            onChange={handleChange}
            min="0"
            required
          />
        </label>
      </div>
      <fieldset>
        <legend>Apa jenis kelamin anda?</legend>
        {genders.map((g) => (
          <label key={g}>
            <input
              type="radio"
              name="gender"
              value={g}
              checked={data.gender === g}
              onChange={handleChange}
              required
            />
            {g}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>Apakah anda perokok?</legend>
        {smokerOptions.map((o) => (
          <label key={o.val}>
            <input
              type="radio"
              name="isSmoker"
              value={o.val}
              checked={data.isSmoker === o.val}
              onChange={handleChange}
              required
            />
            {o.label}
          </label>
        ))}
      </fieldset>
      {data.isSmoker === "yes" && (
        <fieldset>
          <legend>Jika anda perokok, rokok apa yang pernah anda coba?</legend>
          {brandsList.map((b) => (
            <label key={b}>
              <input
                type="checkbox"
                name="brands"
                value={b}
                checked={data.brands.includes(b)}
                onChange={handleChange}
              />
              {b}
            </label>
          ))}
        </fieldset>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyForm;
