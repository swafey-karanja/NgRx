export interface Product {
  id: number;
  title: String;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}