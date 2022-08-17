import { getDocs, query, collection} from "firebase/firestore";
import { db } from "../firebase/config";

const getCollection = async (col) => {
    const q = query(collection(db, col));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });

    return products;
}

export default getCollection;
