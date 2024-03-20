import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../firebase/firebase';
import { HistoryType } from '../../shared/types/historyTypes';

interface AddHistoryParams {
    email?: string | null;
    searchValue: string;
}

interface RemoveHistoryParams {
    email?: string | null;
    historyId: string;
    history?: HistoryType[];
}

export const historyApi = createApi({
    reducerPath: 'historyApi',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['History'],
    endpoints: (builder) => ({
        addHistory: builder.mutation<null, AddHistoryParams>({
            async queryFn({ email, searchValue }) {
                if (!email) {
                    return { data: null };
                }

                const userRef = doc(db, 'user', email);

                await updateDoc(userRef, {
                    history: arrayUnion({
                        id: uuidv4(),
                        searchValue,
                    }),
                });

                return { data: null };
            },
            invalidatesTags: ['History'],
        }),
        removeHistory: builder.mutation<null, RemoveHistoryParams>({
            async queryFn({ email, historyId, history }) {
                if (!email) {
                    return { data: null };
                }

                const userRef = doc(db, 'user', email);
                const filteredHistory = history?.filter(
                    (item) => item.id !== historyId,
                );

                await updateDoc(userRef, {
                    history: filteredHistory,
                });

                return { data: null };
            },
            invalidatesTags: ['History'],
        }),
        getHistory: builder.query<HistoryType[], string | null>({
            async queryFn(email) {
                if (!email) return { data: [] };

                const historyRef = doc(db, 'user', email);
                const historySnap = await getDoc(historyRef);
                const history = historySnap.exists()
                    ? historySnap.data()?.history
                    : [];

                return { data: history };
            },
            providesTags: ['History'],
        }),
    }),
});

export const {
    useGetHistoryQuery,
    useAddHistoryMutation,
    useRemoveHistoryMutation,
} = historyApi;
