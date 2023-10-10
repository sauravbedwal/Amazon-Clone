import React, { useContext, useEffect, useState } from "react";
import "./RightSide.css";
import Product from "./Product";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { CartContext } from "../../../CartContext";
import Loader from "../../Loader/Loader";
// import { Link } from "react-router-dom";

const RightSidePanel = () => {
  const { result, searchFilter } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [page, setPage] = useState(1);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const res = await fetch(
          `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=${page}`
        );

        if (!res.ok) {
          throw new Error(`API failed status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data);

        // console.log(data);
      } catch (e) {
        setError(e.message);
        // console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [page]);

  useEffect(() => {
    if (result.length > 0) {
      setProducts(result);
    }
  }, [result]);

  useEffect(() => {
    if (searchFilter.length > 0) {
      setProducts(searchFilter);
    }
  }, [searchFilter]);

  const clicked = () => {
    if (page === 1) {
      setPage(2);
    } else {
      setPage(1);
    }
  };

  if (loading) {
    return <Loader />;
  }

  // console.log("right", result.length);
  return (
    <div>
      <div className="rightSide_main">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <Stack spacing={2}>
        <Pagination
          count={2}
          variant="outlined"
          shape="rounded"
          onClick={clicked}
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "40px",
          }}
        />
      </Stack>
    </div>
  );
};

export default RightSidePanel;
