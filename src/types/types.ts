export type dataT = {
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  model: string | undefined;
  price: number | undefined;
  image: string | undefined;
  category?: string | undefined;
};

export type EditPropsT = {
  productData: {
    id: string;
    title: string;
    model: string;
    description: string;
    price: number;
    category?: string;
    image: string | null;
  } | null;
  id: string | undefined;
};

export type CartProduct = dataT & {
  quantity: number;
};

export interface Product {
  id: string;
  title: string;
  description: string;
  model: string;
  price: number;
  image: string;
}

export type SiteConfigT = {
  name: string;
  url: string;
  description: string;
  links: { github: string };
};
