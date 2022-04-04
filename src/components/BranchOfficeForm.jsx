import React from "react";
import { useInput } from "../hooks/useInput";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { postBranch } from "../states/singleBranch";

const BranchOfficeForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const branch = useSelector((state) => state.branch);

  const name = useInput();
  const address = useInput();
  const city = useInput();
  const openHour = useInput();
  const closeHour = useInput();
  const provincie = useInput();
  const owner = useInput();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      postBranch({
        provincie: provincie.value,
        owner: owner.value,
        name: name.value,
        address: address.value,
        city: address.value,
        openHour: openHour.value,
        closeHour: closeHour.value,
      })
    );
    navigate(`/branch/${branch.id}`);
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right"></div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right" style={{ color: "grey" }}>
                ALTA DE SUCURSAL
              </h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <Form.Label className="labels">Nombre</Form.Label>
                <Form.Control
                  size="ms"
                  placeholder="Nombre"
                  className="position-relative"
                  name="bussinessName"
                  variant="outlined"
                  value={name.value}
                  onChange={name.onChange}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-12">
                <Form.Label className="labels">Dirección</Form.Label>
                <Form.Control
                  size="ms"
                  placeholder="Dirección"
                  className="position-relative"
                  name="legalAddress"
                  variant="outlined"
                  value={address.value}
                  onChange={address.onChange}
                />
              </div>

              <div className="col-md-12">
                <Form.Label className="labels">Ciudad</Form.Label>
                <Form.Control
                  size="ms"
                  placeholder="Ciudad"
                  className="position-relative"
                  name="email"
                  variant="outlined"
                  value={city.value}
                  onChange={city.onChange}
                />
              </div>

              <div className="col-md-12">
                <Form.Label className="labels">Cliente</Form.Label>
                <Form.Control
                  size="ms"
                  placeholder="Cliente"
                  className="position-relative"
                  name="email"
                  variant="outlined"
                  value={owner.value}
                  onChange={owner.onChange}
                />
              </div>
              {/* 
              <div className="col-md-12">
                <Form.Label className="labels">Provincia</Form.Label>
                <Form.Control
                  size="ms"
                  placeholder="Provincia"
                  className="position-relative"
                  name="email"
                  variant="outlined"
                  value={provincie.value}
                  onChange={provincie.onChange}
                />
              </div> */}

              <div className="col-md-12">
                <Form.Label className="labels">Provincia</Form.Label>

                <Form.Control
                  as="select"
                  size="ms"
                  placeholder="Provincia"
                  className="position-relative"
                  name="email"
                  variant="outlined"
                  value={provincie.value}
                  onChange={provincie.onChange}
                >
                  <option>Buenos Aires</option>
                  <option>Córdoba</option>
                  <option>San Luis</option>
                  <option>Catamarca</option>
                  <option>Tierra Del Fuego</option>
                  <option>Santa Cruz</option>
                  <option>Río Negro</option>
                  <option>Neuquén</option>
                  <option>La Pampa</option>
                  <option>Santa Fé</option>
                  <option>La Rioja</option>
                  <option>Tucumán</option>
                  <option>Corrientes</option>
                  <option>Entre Ríos</option>
                  <option>Misiones</option>
                  <option>Chaco</option>
                  <option>Formosa</option>
                  <option>Jujuy</option>
                  <option>San Juan</option>
                  <option>Salta</option>
                  <option>Mendoza</option>
                  <option>Santiago del Estero</option>
                  <option>Chubut</option>
                </Form.Control>
              </div>

              <div className="row mt-2">
                <div className="col-md-6">
                  <Form.Label className="labels">Hoario de apertura</Form.Label>
                  <Form.Control
                    // type="date"
                    size="ms"
                    placeholder="Horario de apertura"
                    className="position-relative"
                    name="openHour"
                    variant="outlined"
                    value={openHour.value}
                    onChange={openHour.onChange}
                  />
                </div>

                <div className="col-md-6">
                  <Form.Label className="labels">Horario de cierre</Form.Label>
                  <Form.Control
                    // type="time"
                    size="ms"
                    placeholder="Horario de cierre"
                    className="position-relative"
                    name="closeHour"
                    variant="outlined"
                    value={closeHour.value}
                    onChange={closeHour.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <Button
                variant="warning"
                onClick={handleClick}
                className="btn btn-primary profile-button"
                type="button"
              >
                AGREGRAR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchOfficeForm;