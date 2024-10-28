export interface Product {
  name: string;
  price: number
}

export function createProduct(name: string): Product {
  return {
    name,
    price: 0
  };
}
