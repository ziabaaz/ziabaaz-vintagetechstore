// helper functions

//import url from "./URL";

export function flattenProducts(data) {
    return data.map(item=>{

        let image = (item.image && item.image.url) || null;

        //let image = `${url}${item.image.url}`;

        return {...item, image};
    });
}

export function featuredProducts(data) {
    return data.filter(item=> {
        return item.featured === true;
    })
}

export function paginate(products){
    const itemsPerPage = 4;
    const numberOfPages = Math.ceil(products.length / itemsPerPage); //Round a number upward to its nearest integer.

    //length:numberOfPages Items per page
    // const newProducts = Array.from({length:numberOfPages}, ()=>{
    //     return products.splice(0,itemsPerPage); //splice mutates original array
    // });

    // _ ommits the actual item 
     const newProducts = Array.from({length:numberOfPages}, ( _, index)=>{
         const start= index * itemsPerPage;
        return products.slice(start,start + itemsPerPage); 
     });

    return newProducts;   //Returns array of arrays
}
