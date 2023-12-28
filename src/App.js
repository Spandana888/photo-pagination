import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const itemsPerPage = 100;
  const allItems = [...data];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Color Picker</h1>
      {currentItems.map((list) => {
        return <img src={list.url} alt={list.title} key={list.id} />;
      })}
      <br />
      {/* Pagination Button */}
      {Array.from({
        length: Math.ceil(allItems.length / itemsPerPage),
      }).map((_, index) => (
        <button key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default App;
