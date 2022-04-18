export const inStockItems = (data) => {
  const filteredItems = data.filter(
    (item) => item.stocked || typeof item === "string"
  );
  return filteredItems;
};

export const searchedItems = (data, keyword) => {
  const filteredItems = data.filter((item) => {
    return (
      item?.name?.toLowerCase().includes(keyword.toLowerCase()) ||
      typeof item === "string"
    );
  });
  return filteredItems;
};

export const filterItems = (data, keyword, inStock) => {
  if (keyword && inStock) return searchedItems(inStockItems(data), keyword);
  if (keyword) return searchedItems(data, keyword);
  if (inStock) return inStockItems(data);
};
