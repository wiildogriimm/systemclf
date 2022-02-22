import { useState } from "react";
import styled from "@emotion/styled";
import Delete from "../public/img/delete.svg";
import Edit from "../public/img/edit.svg";
import Layout from "./Layout/Layout";
import { Contenedor, Tabla } from "../components/helpers/ViewHelpers";

const Accion = styled.img`
  cursor: pointer;
  margin-left: 0.5rem;
  margin-top: auto;
`;

const Panel = () => {
  /* State local de administradores */
  const alumnos = [
    {
      nombre: "Sergio",
      paterno: "Guadarrama",
      materno: "Santillán",
      id: 1,
      correo: "correo4@correo.com.mx",
      semestre: "2",
      estatus: false,
      cuenta: "123",
    },
    {
      nombre: "Emily",
      paterno: "Guadarrama",
      materno: "Payan",
      id: 2,
      correo: "correo3@correo.com.mx",
      semestre: "3",
      cuenta: "123",
    },
    {
      nombre: "Angelica",
      paterno: "Hernandez",
      materno: "Muñiz",
      id: 3,
      correo: "correo2@correo.com.mx",
      semestre: "1",
      cuenta: "123",
    },
    {
      nombre: "Brandon",
      paterno: "Alcantara",
      materno: "Ruiz",
      id: 4,
      correo: "correo1@correo.com.mx",
      semestre: "5",
      cuenta: "123",
    },
  ];

  const [activar, setActivar] = useState(false);
  /* Funcion que cammbia el status */
  const cambiarEstatus = (id) => {
    console.log(id);
  };

  const editarAlumno = () => {
    console.log("editando");
  };
  const eliminarAlumno = () => {
    console.log("eliminando");
  };

  return (
    <Layout>
      <Contenedor>
        {/* <h1>Bienvenido(a): Sergio</h1> */}
        <h1>Alumnos</h1>
        <Tabla>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Paterno</th>
              <th scope="col">Materno</th>
              <th scope="col">Correo</th>
              <th scope="col">Semestre</th>
              <th scope="col">Cuenta</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Iteracion por cada admin */}
            {alumnos.map((alumno) => (
              <tr key={alumno.id}>
                <td scope="col">{alumno.nombre}</td>
                <td scope="col">{alumno.paterno}</td>
                <td scope="col">{alumno.materno}</td>
                <td scope="col">{alumno.correo.slice(0, 7)}...</td>
                <td scope="col">{alumno.semestre}</td>
                <td scope="col">{alumno.cuenta}</td>
                <td scope="col">
                  {/* Status */}
                  <button onClick={() => cambiarEstatus(alumno.id)}>
                    {alumno.estatus ? "Activo" : "Inactivo"}
                  </button>
                  <Accion alt="" src={Edit} onClick={() => editarAlumno()} />
                  <Accion
                    alt=""
                    src={Delete}
                    onClick={() => eliminarAlumno()}
                  />
                </td>
                {/* Botons de acciones */}
              </tr>
            ))}
          </tbody>
        </Tabla>
      </Contenedor>
    </Layout>
  );
};

export default Panel;
