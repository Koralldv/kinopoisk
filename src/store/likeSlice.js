import {createSlice} from '@reduxjs/toolkit'

const likeSlice = createSlice({
    name: 'likes',
    initialState: {
        likeList: [1405968, 4527628, 1309570],
    },
    reducers: {
        addFilm(state, action){
            if (state.likeList.includes(action.payload)) {
            let mass1 = state.likeList.slice();
            mass1 = mass1.filter((item) => item !== action.payload);
            state.likeList = mass1.slice();
        } else {
            let mass2 = state.likeList.slice();
            mass2.push(action.payload);
            state.likeList = mass2.slice();
        }
        },
        deleteFilm(state, action){
            let mass3 = state.likeList;
            let index = mass3.indexOf(action.payload); 
            mass3.splice([index], 1);
            state.likeList = mass3.slice();
        }
    }
})

export const {addFilm, deleteFilm} = likeSlice.actions;

export default likeSlice.reducer;