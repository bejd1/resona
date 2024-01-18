export type dataT = {
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  model: string | undefined;
  prize: number | undefined;
  image?: string | undefined;
  picture?: Buffer | null;
};

export interface EditProps {
  productData: {
    id: string;
    title: string;
    model: string;
    description: string;
    prize: number;
    image?: string | null;
    picture?: Buffer | null;
  } | null;
  id: string | undefined;
}
