export type dataT = {
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  model: string | undefined;
  prize: number | undefined;
  image?: string | undefined;
};

export interface EditProps {
  productData: {
    id: string;
    title: string;
    model: string;
    description: string;
    prize: number;
    image?: string | null;
  } | null;
  id: string | undefined;
}
