import React, { useEffect } from "react";
import { Form, Button, FormControl, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getClient } from "../states/singleClient";
import { getAllClients } from "../states/Clients";
import { useInput } from "../hooks/useInput";
import { useNavigate } from "react-router-dom";


const Clients = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchClient = useInput();

  const clients = useSelector((state) => state.clients);
  const client = useSelector((state) => state.client)

  useEffect(() => {
    dispatch(getAllClients());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("searchClient => ", searchClient.value)
    dispatch(getClient(searchClient.value));
    console.log("client => ",client)
    navigate(`/clients/${client.id}`)
  };

  const handleClient = (id) => {
    navigate(`/clients/${id}`);
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="d-flex"
        style={{ width: "40%", margin: "0 auto", marginTop: "60px" }}
      >
        <FormControl
          {...searchClient}
          type="search"
          placeholder="Buscar Clientes.."
          className="me-2"
          aria-label="Search"
        />
        <Button 
        type="input"
         variant="outline-success">
          Buscar
        </Button>
      </Form>

      <Table
        striped
        bordered
        hover
        size="sm"
        style={{ width: "50%", margin: "0 auto", marginTop: "60px" }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>CUIT</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {clients?.map((client) => (
            <tr key={client.id} onClick={() => handleClient(client.id)}>
              <td>{client.id}</td>
              <td>{client.bussinessName}</td>
              <td>{client.CUIT}</td>
              <td>{client.legalAddress}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Clients;
