export interface ProductT {
  category: CategoryT
  description: string
  id: number
  image: string
  price: number
  rating: RatingT
  title: string
}

export enum CategoryT {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface RatingT {
  count: number
  rate: number
}
