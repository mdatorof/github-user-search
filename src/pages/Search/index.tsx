import React, { useState } from "react";
import Button from "core/components/Button";
import ShowProfile from "./components/ShowProfile";
import "./styles.css";

type FormState = {
  name: string;
};

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Form = () => {
  const [formData, setFormData] = useState<FormState>({ name: "" });
  const [isShowProfile, setIsShowProfile] = useState(false);

  const handleOnChange = (event: FormEvent) => {
    setIsShowProfile(false);
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.name !== "") {
      setIsShowProfile(true)
    };
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <p className="form-input-title">Encontre um perfil Github</p>
          <div className="row">
            <input
              className="form-input-box"
              name="name"
              type="text"
              onChange={handleOnChange}
              placeholder="Usuário Github"
            />
          </div>
          <div className="form-btn-position">
            <Button text="Encontrar" />
          </div>
        </div>
      </form>
      { isShowProfile && <ShowProfile user={formData.name} />}
    </>
  );
};

export default Form;