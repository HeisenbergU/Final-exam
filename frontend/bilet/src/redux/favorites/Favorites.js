import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fav: JSON.parse(localStorage.getItem('fav')) || [],
}

export const FavSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addFav: (state,action) => {
    let elem = state.fav.find((elem)=>elem._id == action.payload._id)
      if(!elem){
        state.fav = [...state.fav,{...action.payload}]
      }else{
        state.fav = state.fav.filter((elem)=>elem._id !== action.payload._id)
      }
      localStorage.setItem('fav',JSON.stringify(items))
    },
    
  },
})


export const {  } = FavSlice.actions

export default FavSlice.reducer