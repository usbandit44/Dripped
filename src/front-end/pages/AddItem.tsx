import React, { useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { set, useForm } from "react-hook-form";
import clothingSchema from "../schemas/clothingSchema";
import { db } from "../../services/firebase.config";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { getClothingItem, postClothingItem } from "../../services/database";
import { ClothingItem } from "../schemas/ClothingItem";

const AddItem = () => {
  const { register, handleSubmit, reset, formState, setValue } =
    useForm<clothingSchema>({
      defaultValues: {
        name: "",
        category: "",
        subCategory: "",
        image: new File([], ""),
      },
    });

  const category = ["Tops", "Bottoms", "Shoes", "Outerwear"];
  const topSubcategory = [
    "T-Shirts",
    "Sweatshirts",
    "Button-Ups",
    "Dress Shirts",
    "Polos",
    "Tank Tops",
    "Sweaters",
  ];
  const bottomSubcategory = [
    "Jeans",
    "Cargos",
    "Shorts",
    "Sweatpants",
    "Skirts",
    "Dress Pants",
  ];
  const shoeSubcategory = [
    "Sneakers",
    "Boots",
    "Sandals",
    "Dress Shoes",
    "Heels",
  ];
  const outerwearSubcategory = ["Jackets", "Coats", "Hoodies", "Vests"];
  const [imageSelected, setImageSelected] = useState<File>();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string[]>([
    "",
  ]);
  const [test, setTest] = useState<{ id: string }[]>();
  const collectionRef = collection(db, "users");

  const subcategoryOptions = (category: string) => {
    switch (category) {
      case "Tops":
        return topSubcategory;
      case "Bottoms":
        return bottomSubcategory;
      case "Shoes":
        return shoeSubcategory;
      case "Outerwear":
        return outerwearSubcategory;
      default:
        return [""];
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedSubcategory(subcategoryOptions(event.target.value));
  };

  const onSubmit = async (data: clothingSchema) => {
    // const querySnapshot = await getDocs(collection(db, "users"));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
    //getClothingItem();
    //console.log(data);
    //console.log(imageSelected);
    const item = ClothingItem.fromNewItemForm(data);
    postClothingItem(item);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        category: "",
        subCategory: "",
        image: new File([], ""),
      });
      setImageSelected(undefined);
      setValue("category", "");
    }
  }, [formState, reset]);

  return (
    // <>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <Stack spacing={2} alignItems={"center"}>
    //       <TextField
    //         id="name"
    //         label="Name"
    //         variant="outlined"
    //         fullWidth
    //         {...register("name", { required: true })}
    //       />
    //       <FormControl fullWidth>
    //         <InputLabel id="category-label">Category</InputLabel>
    //         <Select
    //           labelId="category-label"
    //           id="category"
    //           label="category"
    //           {...register("category", {
    //             required: true,
    //             onChange: handleChange,
    //           })}
    //         >
    //           {category.map((category) => (
    //             <MenuItem value={category}>{category}</MenuItem>
    //           ))}
    //         </Select>
    //       </FormControl>
    //       <FormControl fullWidth>
    //         <InputLabel id="subCategory-label">Subcategory</InputLabel>
    //         <Select
    //           labelId="subCategory-label"
    //           id="subCategory"
    //           label="subCategory"
    //           {...register("subCategory", { required: true })}
    //         >
    //           {selectedSubcategory.map((subcategory) => (
    //             <MenuItem value={subcategory}>{subcategory}</MenuItem>
    //           ))}
    //         </Select>
    //       </FormControl>
    //       {imageSelected && (
    //         <div>
    //           <img
    //             alt="not found"
    //             width={"250px"}
    //             src={URL.createObjectURL(imageSelected)}
    //           />
    //         </div>
    //       )}
    //       <Button variant="contained" component="label">
    //         Upload Image
    //         <input
    //           type="file"
    //           hidden
    //           {...register("image", {
    //             required: true,
    //             onChange(event) {
    //               setImageSelected(event.target.files[0]);
    //             },
    //           })}
    //         />
    //       </Button>
    //       <Button type="submit" variant="contained">
    //         Submit
    //       </Button>
    //     </Stack>
    //   </form>
    // </>
    <div></div>
  );
};

export default AddItem;
