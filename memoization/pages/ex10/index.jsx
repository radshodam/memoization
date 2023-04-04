// Importing necessary packages and hooks from React
import React, { useEffect, useState } from "react";

// Defining the component as a default export
export default function Index() {
  // Initializing state variables using the useState hook
  const [todos, setTodos] = useState([]); // To store the fetched todo items
  const [currentPage, setCurrentPage] = useState(1); // To keep track of the current page number
  const [paginatedTodos, setPaginatedTodos] = useState([]); // To store the subset of todos that should be displayed on the current page

  // Defining some constants
  let pageSize = 10; // To define the number of items to display per page
  let pagesNumbers; // To store an array of page numbers for pagination

  // Using the useEffect hook to fetch data from an external API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((datas) => {
        setTodos(datas); // Setting the fetched data to the todos state variable
      });
  }, []); // [] as second parameter ensures that the effect only runs once, when the component mounts

  // Defining a function to update the current page number
  const changePaginate = (newPage) => {
    setCurrentPage(newPage);
  };

  // Calculating the total number of pages for pagination
  const pagesCount = Math.ceil(todos.length / pageSize);
  pagesNumbers = Array.from(Array(pagesCount).keys()); // Generating an array of page numbers using the keys() method
  console.log("pagesCount", pagesCount);
  console.log("pagesNumbers", pagesNumbers);

  // Returning the JSX to be rendered
  return (
    <div>
      {/* Conditionally rendering a "Loading" message or a table of todo items based on the state of the todos variable */}
      {!todos ? (
        "Loading"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {/* Mapping over the todos array to render each todo item as a row in the table */}
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td>{todo.title}</td>
                <td>
                  <p
                    className={
                      todo.completed ? "btn btn-success" : "btn btn-danger"
                    }
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* Rendering the pagination bar with clickable page numbers */}
      <nav className="d-flex justify-content-center">
        <ul className="pagination" aria-current="page">
          {/* Mapping over the pagesNumbers array to generate the page numbers */}
          {pagesNumbers.map((pageNumber) => (
            <li
              // Setting the className based on whether the current page matches the page number
              className={
                pageNumber + 1 === currentPage
                  ? "page-item active"
                  : "page-item"
              }
              key={pageNumber + 1}
              // Calling the changePaginate function when a page number is clicked
              onClick={() => changePaginate(pageNumber + 1)}
            >
              {/* Displaying the page number as a clickable link */}
              <span className="page-link">{pageNumber + 1}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
