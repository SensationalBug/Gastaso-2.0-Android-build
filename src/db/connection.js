import { getDatabase, ref, set } from "firebase/database";
import firebaseConfig from "../firebaseConfig/firebaseConfig";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
