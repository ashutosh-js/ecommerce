import React from "react";
import Cards from "./Card";
import { useGetCategoryByIdQuery, useGetProductsByCategoryQuery } from "../../services/categoryApi";

const FashionCard: React.FC = () => {
  const categoryId = 1

  const { data: singleCategory, error: categoryError, isLoading: categoryLoading } = useGetCategoryByIdQuery(categoryId);

  const { data: products, error: productsError, isLoading: productsLoading } = useGetProductsByCategoryQuery(categoryId);

  if (categoryLoading || productsLoading) {
    return <p>Loading...</p>;
  }

  if (categoryError || productsError) {
    return <p>Error loading data</p>;
  }

  return <Cards title={`Best of ${singleCategory?.name}`} items={products} />;
};

export default FashionCard;
