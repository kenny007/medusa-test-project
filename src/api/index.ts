import { Router } from 'express';
import bodyParser from 'body-parser';
import { productController } from '../controller/product.controller';

const router = Router();
export default () => {
  router.use('', bodyParser.json());

  router.get('/store/custom-fetch', productController.fetch);
  router.get('/store/custom-fetch-product/:batch_no', productController.fetchProduct)
  router.post('/store/custom-add', productController.addProduct);

  return router;
};
