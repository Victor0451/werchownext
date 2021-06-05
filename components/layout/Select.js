import React from "react";

const Select = ({ label, listado, ref }) => {
  return (
    <div className="col-md-4">
      <label>
        <strong>
          <u>{label}</u>
        </strong>
      </label>
      <select className="custom-select" ref={ref}>
        <option selected>Selecciona un {label}</option>
        {listado ? (
          <>
            {listado.map((list) => (
              <option value={list.value}>{list.label}</option>
            ))}
          </>
        ) : null}
      </select>
    </div>
  );
};

export default Select;
