import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchPopular =  createAsyncThunk(
    'top/fetchPopular',
    async function({name}, {rejectWithValue}) {
        try {    
            let response = await fetch(name, {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });

            if(!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
            return data;   
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const popularSlice = createSlice({
    name: 'popular',
    initialState: {
        popularList: [],
        status: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [fetchPopular.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchPopular.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.popularList = action.payload;
        },
        [fetchPopular.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

// export const {} = premierSlice.actions;

export default popularSlice.reducer;