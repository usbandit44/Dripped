import axios from "axios";
import ClothingSchema from "../Schemas/ClothingSchema.ts";

const apiURL = "http://localhost:3000/";

const client = axios.create({ baseURL: apiURL });

export default {
  Clothing: {
    postClothing: async (clothingItem: ClothingSchema) => {
      return await client.post("/clothing", clothingItem);
    },
  },
};
