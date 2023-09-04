import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import clothingSchema from "./clothingSchema";

export class ClothingItem {
  category: string;
  subCategory: string;
  color: string | undefined;
  image: File;
  createTime: number | undefined;
  updateTime: number | undefined;

  constructor() {
    this.category = "";
    this.subCategory = "";
    this.color = "";
    this.image = new File([], "");
    this.createTime = 0;
    this.updateTime = 0;
  }

  public static fromDB(data: DocumentData | undefined): ClothingItem {
    const item = new ClothingItem();
    if (data != undefined) {
      item.category = data.category;
      item.color = data.color;
      item.subCategory = data.subCategory;
      item.image = new File([], "");
      item.updateTime = data.updateTime;
      item.createTime = data.createTime;
    }
    return item;
  }

  public static fromNewItemForm(data: clothingSchema): ClothingItem {
    const item = new ClothingItem();
    item.category = data.category;
    item.color = data.color;
    item.subCategory = data.subCategory;
    item.image = new File([], "");
    item.updateTime = data.updateTime;
    item.createTime = data.createTime;
    return item;
  }

  public addToDb(): clothingSchema {
    const result: clothingSchema = {
      category: this.category,
      subCategory: this.subCategory,
      color: this.color,
      createTime: this.createTime,
      updateTime: this.updateTime,
      image: this.image,
    };
    return result;
  }
}
