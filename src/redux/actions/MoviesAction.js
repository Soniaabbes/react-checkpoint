import { ADDMOVIE, DELETEMOVIE } from "../types/type";

export const addMOVIE =(newMovie)=>{
    return {
        type: ADDMOVIE,
        payload:newMovie,
    }

};
export const deleteMovie =(title)=>{
    return {
        type:DELETEMOVIE,
        payload:title,
    }
}