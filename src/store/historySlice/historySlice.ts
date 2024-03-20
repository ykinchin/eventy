import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HistoryType } from '../../shared/types/historyTypes';

type InitialState = {
    history: HistoryType[];
};

const initialState: InitialState = {
    history: [],
};

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        getHistoryList: (state, action: PayloadAction<HistoryType[]>) => {
            state.history = action.payload;
        },
    },
});

export const { getHistoryList } = historySlice.actions;
export const historyReducer = historySlice.reducer;
