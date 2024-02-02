import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Product = {
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  model: string | undefined;
  price: number;
  image: string | undefined;
};

export interface CartItem extends Product {
  count: number;
}

type CartStore = {
  cart: CartItem[];
  count: () => number;
  totalIndividualPrice: (id: string) => number;
  totalCartPrice: () => number;
  add: (product: Product) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  remove: (id: string) => void;
  removeAll: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      count: () => {
        const { cart } = get();
        if (cart.length)
          return cart
            .map((item) => item.count)
            .reduce((prev, curr) => prev + curr);
        return 0;
      },
      // count: () => {
      //   const { cart } = get();
      //   let totalCount = 0;
      //   for (const item of cart) {
      //     totalCount += item.count;
      //   }
      //   return totalCount;
      // },
      totalIndividualPrice: (id: string) => {
        const { cart } = get();
        const item = cart.find((item) => item.id === id);
        return item ? item.price * item.count : 0;
      },
      totalCartPrice: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.price * item.count, 0);
      },
      add: (product: Product) => {
        const { cart } = get();
        const updatedCart = updateCart(product, cart);
        set({ cart: updatedCart });
      },
      increase: (id: string) => {
        const { cart } = get();
        const updatedCart = updateQuantity(id, cart, 1);
        set({ cart: updatedCart as CartItem[] });
      },
      decrease: (id: string) => {
        const { cart } = get();
        const updatedCart = updateQuantity(id, cart, -1, true);
        set({ cart: updatedCart as CartItem[] });
      },
      remove: (id: string) => {
        const { cart } = get();
        const updatedCart = removeCart(id, cart);
        set({ cart: updatedCart });
      },
      removeAll: () => set({ cart: [] }),
    }),
    { name: "cartGlobal", storage: createJSONStorage(() => sessionStorage) }
  )
);

function updateCart(product: Product, cart: CartItem[]): CartItem[] {
  const cartItem = { ...product, count: 1 } as CartItem;

  const productOnCart = cart.map((item) => item.id).includes(product.id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.id === product.id)
        return { ...item, count: item.count + 1 } as CartItem;
      return item;
    });
  }

  return cart;
}

function removeCart(idProduct: string, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) => {
      if (item.id === idProduct) return { ...item, count: 0 };
      return item;
    })
    .filter((item) => {
      return item.count > 0;
    });
}

function updateQuantity(
  id: string,
  cart: CartItem[],
  delta: number,
  removeIfZero: boolean = false
): (CartItem | null)[] {
  const updatedCart = cart.map((item) => {
    if (item.id === id) {
      const newCount = item.count + delta;
      if (newCount > 0) {
        return { ...item, count: newCount };
      } else if (removeIfZero) {
        // Return null if the item needs to be removed from the cart
        return null;
      }
    }
    return item;
  });

  // Filter out null values if an item needs to be removed from the cart
  return removeIfZero
    ? updatedCart.filter((item) => item !== null)
    : updatedCart;
}
