import { doc } from "@firebase/firestore";
import clothingSchema from "../front-end/schemas/clothingSchema";
import { db } from "./firebase.config";
import { getDoc, setDoc } from "firebase/firestore";
import { ClothingItem } from "../front-end/schemas/ClothingItem";

export async function getClothingItem() {
  const docRef = doc(
    db,
    "users",
    "fmq9AjWRbZzH2XLHmxFw",
    "clothing",
    "4FGDSAkstxGoS8fp8MUv"
  );
  const docSnap = (await getDoc(docRef)).data();
  const item = ClothingItem.fromDB(docSnap);
  console.log(item);
}

export async function postClothingItem(input: ClothingItem) {
  const docRef = doc(
    db,
    "users",
    "fmq9AjWRbZzH2XLHmxFw",
    "clothing",
    "4FGDSAkstxGoS8fp8MUv"
  );
  const result: clothingSchema = {
    category: input.category,
    subCategory: input.subCategory,
    color: "blue",
    createTime: 1,
    updateTime: 1,
  };
  //type data = ReturnType<typeof input.addToDb>;
  //const data2 = data as const;
  await setDoc(docRef, result);
}
