const addToDb =(id)=>{

    const exists = getDb();
    let shopping_cart = {};

    if (!exists){
        shopping_cart[id] = 1;
    }
    else{
        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]){
            shopping_cart[id]++;
        }
        else{
            shopping_cart[id] = 1;
        }
    }
    updateDb(shopping_cart);
}
const updateDb = (shopping_cart) =>localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
const getDb = () => localStorage.getItem('shopping_cart');
const removeFromDb = (id) => {
    const exists = getDb();
    
    if (exists){
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }
    
}
export {addToDb, removeFromDb as deleteFromDb};