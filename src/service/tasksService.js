import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firestore"

export const addTask = async (task) => {
  try {
   

    console.log(task,"task")

    const coll = collection(db, "tasks");
    const data = await addDoc(coll, task);
    return data;
  } catch (error) {
    console.log(error, "error");
    throw error;
  }
};

export const getTasks = async () => {
  try {

   const data=(await getDocs(collection(db,"tasks")))

   let d=[]
   data.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  d.push({...doc.data(),id:doc.id});
  console.log(doc.id, " => ", doc.data());
});

return  d
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (taskId, task) => {
  try {
    const docRef = doc(db, "tasks",taskId);

    const data= updateDoc(docRef,task)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const docRef = await db.collection("tasks").doc(taskId).delete();
    return docRef;
  } catch (error) {
    console.log(error);
  }
};
