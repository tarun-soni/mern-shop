import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Loader, Message } from "../components";

import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import { LinkContainer } from "react-router-bootstrap";

const UserListScreen = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);

  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  const deleteHandler = (id) => {
    console.log("delete");
  };

  return (
    <>
      <h3>Users</h3>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead className="text-center">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>isAdmin</td>
              <td>Delivered</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="text-center">
                <td>{user.name}. . .</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>

                <td>
                  {user.isAdmin ? (
                    <i
                      className="fas fa-check "
                      style={{ color: "##43BE31   " }}
                    ></i>
                  ) : (
                    <i
                      className="fas fa-times "
                      style={{ color: "#eb5a46" }}
                    ></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/user/${user._id}/edit`}>
                    <Button className="btn-sm" variant="light">
                      <i className="fas fa-edit"></i>{" "}
                    </Button>
                  </LinkContainer>
                  <Button
                    className="btn-sm"
                    variant="danger"
                    onClick={() => {
                      deleteHandler(user._id);
                    }}
                  >
                    <i className="fas fa-trash"></i>{" "}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
