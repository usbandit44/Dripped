import { db } from "./firebase";

const users = db.collection("users");

export async function testDB() {
  const snapshot = await users.get();
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
}
