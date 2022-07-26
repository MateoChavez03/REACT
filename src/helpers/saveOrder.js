import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { db } from "../firebase/config";
import Swal from "sweetalert2";

const saveOrder = (cart, order) => {
    
    const batch = writeBatch(db)
    const outOfStock = []

    cart.forEach((productInCart) => {
        getDoc(doc(db, 'products', productInCart.id))
        .then(async (documentSnapshot) => {
            const product = {...documentSnapshot.data(), id: documentSnapshot.id};

            if (product.stock >= productInCart.quantity) {
                batch.update(doc(db, 'products', product.id) ,{
                    stock: product.stock - productInCart.quantity
                })
            } else {
                outOfStock.push(product)
            }
        })
    })

    setTimeout(() => {   
        if (outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), order).then(({ id }) => {
                batch.commit().then(() => {
                    Swal.fire(`Order generated with id: ${id}`);
                })
            }).catch((err) => {
                console.log(`Error: ${err.message}`);
            })
        } else {
            let msg = ''
            for (const product of outOfStock) {
                msg += `${product.name} `
            }
            Swal.fire(`Products out of stock: ${msg}`);
        }
    }, 1000);
}

export default saveOrder;