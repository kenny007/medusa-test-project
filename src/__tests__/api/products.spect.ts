import { ContainerRegister } from '../../types/tests';
import { testDatabase } from '../../test-helpers/test-database';
import ProductService from '../../services/product';
import { Product } from '../../models/product';
import { setupTestServer } from '../../test-helpers/setup-test-server';

jest.setTimeout(60000)

describe('API: CustomProduct', () => {
  async function containerRegisters(): Promise<ContainerRegister[]> {
    const productRepository = await testDatabase
      .getConnection()
      .getRepository(Product);

    const productService = new ProductService({ productRepository });

    return [
      {
        name: 'productService',
        instance: productService,
      },
    ];
  }

  beforeAll(async () => {
    await testDatabase.setup();
    const registers = await containerRegisters();
    await setupTestServer.setup(registers);
  });

  afterAll(async () => {
    await setupTestServer.destroy()
    await testDatabase.destroy()
  })

  describe('GET /store/custom-fetch', () => {

    describe('when there is no custom product', () => {
      it('returns an empty array', async () => {
        const api = setupTestServer.getApi();
        const res = await api.get(`/store/custom-fetch`);
        const data = res.data.products;
        JSON.stringify(data)
        expect(res.status).toEqual(200);
        expect(data.length).toEqual(7);
      });
    });
  });
});
