
const DEFAULT_PAGE_LIMIT = 0; 
const DEFAULT_PAGE_NUMBER = 1; 


function getPagination(query) {
    const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
    const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT; //Si le pasas un numeor entero te pasa de vuelta el mismo numero, si le pasas un numero negativo te devuelvo el numero entero positivo. 
    const skip = (page - 1) * limit;
    
    return {
        skip,
        limit,
    };

}

module.exports = {
    getPagination,
}