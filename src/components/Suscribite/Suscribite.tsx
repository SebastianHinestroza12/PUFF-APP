import { useState } from "react";
import "./Suscirbite.css";
import { useAppDispatch } from "../../Store/hooks";
import rightArrow from "../../assets/rightArrow.png";
import { sendEmail } from "../../slice/email";
import Swal from "sweetalert2";

function validator(input: any) {
  let errors = "";

  if (!input) {
    errors = "El email es requerido";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
    errors = "El correo es invalido, verifique";
  }

  return errors;
}

const Suscribite = () => {
  const dispatch: any = useAppDispatch();
  const [input, setInput] = useState({ email: "" });
  const [errors, setErrors] = useState("");

  function handleChange(e: any) {
    setInput({
      email: e.target.value,
    });
    setErrors(validator(e.target.value));
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (input.email !== "") {
      dispatch(sendEmail(input));

      Swal.fire({
        title: " Suscripción Exitosa",
        icon: "success",
        timer: 3000,
        showCancelButton: false,
        showConfirmButton: false,
      });
      setInput({
        email: "",
      });
    } else {
      Swal.fire({
        title: "🙂",
        icon: "error",
        timer: 2000,
        text: "Ingresa tu correo electronico",
        showCancelButton: false,
        showConfirmButton: false,
      });
    }
  }
  return (
    <div className="container-suscribite">
      <div className="newsletter">
        <p>NEWSLETTER</p>
        <p>SUSCRIBITE</p>
        <p>Y enterate de todas las novedades</p>
      </div>

      <div>
        <form className="form">
          <input
            required
            name="email"
            type="email"
            placeholder="Ingresa tu email"
            value={input.email}
            onChange={(e) => handleChange(e)}
          />
          {/* <button type="submit">→</button> */}
          <button
            disabled={errors ? true : false}
            onClick={(e) => handleSubmit(e)}
          >
            <img src={rightArrow} alt="subscribe" />
          </button>
        </form>
        <div>{errors && <p className="errors">{errors}</p>}</div>
      </div>
    </div>
  );
};

export { Suscribite };
