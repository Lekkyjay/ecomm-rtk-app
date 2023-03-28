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

export interface ICart extends IProduct {
  quantity: number
  totalPrice: number
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

export interface ICartState {
  data: ICart[]
  totalItems: number
  totalAmount: number
  deliveryCharge: number
}