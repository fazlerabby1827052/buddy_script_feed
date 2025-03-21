export const setToLocalStorage=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value));
}

export const getFromLocalStorage=(key)=>{
    
    const value=localStorage.getItem(key);
    if(value){
        return JSON.parse(value);
    }
    return [];
}

export const getFromLocalStoragetwo=(key)=>{
    
    const value=localStorage.getItem(key);
    if(value){
        return JSON.parse(value);
    }
    return null;
}


export const AlluserFetch=()=>{
    const user=getFromLocalStorage("user");
    if(user){
        return user;
    }
    return [];
}




