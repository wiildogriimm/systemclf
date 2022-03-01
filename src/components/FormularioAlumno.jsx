import Layout from "./Layout/Layout";
import {
  Contenedor,
  Label,
  CampoForm,
  Boton,
} from "./helpers/FormularioHelpers";
import { useState } from "react";
import styled from "@emotion/styled";
import Error from "./Layout/Error";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { agregarAlumnos } from "../actions/alumnoActions";

/* Estilos de Campos */
const Campoinput = styled.input`
  border-radius: 10px;
  height: 2rem;
`;
/* Estilos de formulario */
const Formulario = styled.form`
  display: block;
  width: 100%;
`;

const FormularioAlumno = () => {
  const dispatch = useDispatch();
  /* Usar hook de useNavigate */
  const navigate = useNavigate();

  const token = useSelector((state) => state.token.token);
  const errorReducer = useSelector((state) => state.materias.error);
  const errorMsg = useSelector((state) => state.materias.msg);

  /* State local de materias */
  const grados = [
    { id: 1, nombre: "1" },
    { id: 2, nombre: "2" },
    { id: 4, nombre: "4" },
    { id: 5, nombre: "5" },
    { id: 6, nombre: "6" },
    { id: 7, nombre: "7" },
    { id: 8, nombre: "8" },
    { id: 9, nombre: "9" },
  ];
  /* State local para profesor */
  const [alumno, setAlumno] = useState({
    nombre: "",
    paterno: "",
    materno: "",
    grado: "",
    cuenta: "",
  });

  /* Estate de Error */
  const [error, setError] = useState(false);

  /* Destructuring profesor */
  const { nombre, paterno, materno, grado, cuenta } = alumno;
  /* Agrega lo escrito en el state */
  const handleChange = (e) => {
    setAlumno({
      ...alumno,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Valida que nada este vacio */
    if ([nombre, paterno, materno, grado, cuenta].includes("")) {
      setError(true);

      return null;
    }
    setError(false);
    /* Agregar el alumno */
    dispatch(agregarAlumnos(alumno, token));

    /* Alerta de sweetalert */
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El registro fue agregado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    /* Redireccionar */
    setTimeout(() => {
      navigate("/escuela/alumnos");
    }, 1500);
  };

  return (
    <Layout>
      {/* Contenedor */}
      <Contenedor>
        <h1>Alta de Alumnos</h1>

        {/* Formulario */}
        <Formulario onSubmit={handleSubmit}>
          <CampoForm>
            <Label>Nombre:</Label>
            <Campoinput
              type="text"
              id="nombre"
              name="nombre"
              onChange={(e) => handleChange(e)}
              placeholder="Nombre"
            />
          </CampoForm>
          <CampoForm>
            <Label>Apellido paterno:</Label>
            <Campoinput
              type="text"
              id="paterno"
              name="paterno"
              onChange={(e) => handleChange(e)}
              placeholder="Apellido Paterno"
            />
          </CampoForm>
          <CampoForm>
            <Label>Apellido materno:</Label>
            <Campoinput
              type="text"
              id="materno"
              name="materno"
              onChange={(e) => handleChange(e)}
              placeholder="Apellido Materno"
            />
          </CampoForm>

          {/* Grados */}
          <CampoForm>
            <Label>Grado:</Label>
            <select onChange={(e) => handleChange(e)} name="grado">
              <option value="">-- Seleccione Semestre --</option>
              {/* Iteracion de cada Semestre */}
              {grados.map((grado) => (
                <option key={grado.id}>{grado.nombre}</option>
              ))}
            </select>
          </CampoForm>

          {/* # de cuenta */}
          <CampoForm>
            <Label># de Cuenta:</Label>
            <Campoinput
              type="text"
              id="cuenta"
              name="cuenta"
              onChange={(e) => handleChange(e)}
              placeholder="Número de Cuenta"
            />
          </CampoForm>
          {/* Error */}
          {error && <Error errorMsg={"Todos los campos son obligatorios"} />}
          {errorMsg && <Error errorMsg={errorMsg} />}
          {/* Boton de agregar */}
          <Boton value="Agregar">
            <input type="Submit" />
          </Boton>
        </Formulario>
      </Contenedor>
    </Layout>
  );
};

export default FormularioAlumno;
