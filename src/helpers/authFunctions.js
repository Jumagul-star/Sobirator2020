export const isAuthUser = ()=>{
    const row = localStorage.getItem("token");
    return !!row;
}