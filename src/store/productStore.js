import  create  from "zustand";
import { persist, devtools } from "zustand/middleware"

const productStore = (set) => ({
    products: [],
    addItem: (product) => {
        set((state) => ({
            products: [product, ...state.products],
        }))
    },
    removeItem: (productId) => {
        set((state) => ({
            products: state.products.filter((prod) => prod.id !== productId)
        }))
    },
})

const useProductStore = create(
    devtools(
        persist(productStore, {
            name: "products"
        })
    )
);

export default useProductStore;