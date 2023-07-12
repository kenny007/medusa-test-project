import { CreateProductInput } from '@medusajs/medusa/dist/types/product';

export type ProductExtentionInput = {
  id: string;
  product: CreateProductInput;
  batch_no: string;
};
