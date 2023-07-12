import { Request, Response } from 'express';

class ProductController {
  async fetch(req: Request, res: Response) {
    const productsService = req.scope.resolve('productService');
    res.json({
      status: 200,
      products: await productsService.getProducts(req),
    });
  }

  async fetchProduct(req: Request, res: Response) {
    const productsService = req.scope.resolve('productService');
    const id = req.params.batch_no;
    res.json({
      status: 200,
      product: await productsService.getProduct(id)
    })
  }

  async addProduct(req: Request, res: Response) {
    const data = req.body;
    const productsService = req.scope.resolve('productService');
    const product = await productsService.addProducts(req, data);
    res.json({
      status: 201,
      product,
    });
  }
}

export const productController = new ProductController();
