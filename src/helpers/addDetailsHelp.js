export const handleIncrement = (quantity, setQuantity) => {
  setQuantity(quantity + 1);
};

export const handleDecrement = (quantity, setQuantity) => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};
