import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  console.log(location);

  const queryParms = new URLSearchParams(location.search);
  const query = queryParms.get("query");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4080/product/search?query=${query}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        // const filterData = res.data.allProduct.filter((item) =>
        //   item.name.toLowerCase().includes(id.toLowerCase())
        // );

        setProduct(res.data.product);
      } catch (err) {}
    };
    fetchProduct();
  }, [query]);

  return (
    <div>
      <h2>Search Result for "{query}"</h2>
      {product.lenght == 0 ? (
        <p>Product Not Found</p>
      ) : (
        <ul>
          {product.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;
