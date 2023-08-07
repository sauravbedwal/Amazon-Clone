import React, { useContext, useEffect, useState } from "react";
import "./RightSide.css";
import Product from "./Product";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { CartContext } from "../../../CartContext";
import Loader from "../../Loader/Loader";
// import { Link } from "react-router-dom";

const RightSidePanel = () => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const { result, searchFilter } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  const [api, setApi] = useState(1);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=${api}`
        );

        if (!response.ok) {
          throw new Error(`API failed status : ${response.status}`);
        }
        const data = await response.json();
        // console.log(data);
        setProducts(data);
      } catch (e) {
        setError(e.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [api]);

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

  const changeTheProducts = () => {
    if (api == 1) {
      setApi(2);
    } else if (api == 2) {
      setApi(1);
    }
  };

  if (loading) {
    //useState loading
    return <Loader />;
  }

  return (
    <div>
      <div className="RightSide__main">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
          // <Link to={"/place-order"}>
          //   <Product product={product} />;
          // </Link>;
        })}
      </div>
      <Stack spacing={2}>
        <Pagination
          sx={{ margin: "auto", marginBottom: "40px" }}
          count={2}
          variant="outlined"
          shape="rounded"
          onClick={changeTheProducts}
        />
      </Stack>
    </div>
  );
};
export default RightSidePanel;
