import React from "react";
import { useEffect, useState } from "react";
function Factory() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("url").then((result) => {
      result.json().then((resp) => {
        //console.warn("result",resp)
        setData(resp);
        setId(resp[0].id);
        setTitle(resp[0].title);
      });
    });
    getlist();
  }, []);
  console.warn(data);

  function getlist() {
    fetch("http://localhost:4000/todo/${id}", {
      // /${id} is used for delete user via id
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
  }

  function deleteUser() {
    // for delete user via user id
    fetch("http://localhost:4000/todo/${id}", {
      // /${id} is used for delete user via id
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getlist();
      });
    });
  }

  function selectUser() {
    console.warn(data[id-1])
    let item = data[id - 1];
    setId(item.id);
    setTitle(item.title);
  }
  return (
    <>
      <h1>Get the data</h1>
      <center>
        <table border="3">
          <tbody>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Operation</td>
            </tr>
            {data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <button onClick={() => deleteUser(item.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => selectUser(item.id)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
      <br />
      <form>
        <input type="text"></input>
        <br />
        <input type="text"></input>
        <br />
        <button>Update</button>
      </form>
    </>
  );
}

export default Factory;
