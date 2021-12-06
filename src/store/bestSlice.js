import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchBest =  createAsyncThunk(
    'best/fetchBest',
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

const bestSlice = createSlice({
    name: 'best',
    initialState: {
        bestList: [],
        status: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [fetchBest.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchBest.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.bestList = action.payload;
        },
        [fetchBest.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

// export const {} = premierSlice.actions;

export default bestSlice.reducer;