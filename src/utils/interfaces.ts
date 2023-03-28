export interface IProduct {
  id: string
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: ICat
  thumbnail: string
  images: string[]
}

export interface ICart {
  id: string
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
  quantity: number 
  totalPrice: number 
  discountedPrice: number
}

export interface ICat {
  id: string
  name: string
  image: string
}

export interface ICatState {
  data: ICat[],
  status: string
  catProductAll : IProduct[][],
  catProductAllStatus: string
  catProductSingle : [],
  catProductSingleStatus: string
}

export interface IModalState {
  data: IProduct,
  isModalVisible: boolean
}

export interface IProductState {
  data: IProduct[]
  status: string
}