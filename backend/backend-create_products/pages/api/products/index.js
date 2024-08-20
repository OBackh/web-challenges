import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  try {
    if (request.method === "GET") {
      const products = await Product.find();
      return response.status(200).json(products);
    }

    if (request.method === "POST") {
      // Create a new Product
      const productData = new Product(request.body);
      // Add it to the databases
      await Product.create(productData);
      response.status(201).json({ status: "Product created" });
    }
  } catch (error) {
    console.error(error);
    response.status(400).json({ status: error.message });
  }
}
