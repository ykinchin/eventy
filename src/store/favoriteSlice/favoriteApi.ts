import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    arrayRemove,
    arrayUnion,
    doc,
    getDoc,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase/firebase';

type FavoriteParams = {
    email: string;
    eventId?: string;
};

type EventId = {
    eventId: string;
};

export const favoriteApi = createApi({
    reducerPath: 'favorite',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Favorite'],
    endpoints: (builder) => ({
        fetchFavorite: builder.query<EventId[] | null, string | null>({
            async queryFn(email) {
                if (!email) return { data: null };

                try {
                    const favoriteRef = doc(db, 'user', email);
                    const favoriteSnap = await getDoc(favoriteRef);
                    const favorite: EventId[] = favoriteSnap.exists()
                        ? favoriteSnap.data()?.favorite
                        : [];
                    return { data: favorite };
                } catch (error) {
                    return { error };
                }
            },
            providesTags: ['Favorite'],
        }),

        addFavorite: builder.mutation<null, FavoriteParams>({
            async queryFn(data) {
                if (!data.email) return { data: null };

                try {
                    const ref = doc(db, 'user', data.email);
                    await updateDoc(ref, {
                        favorite: arrayUnion({
                            eventId: data.eventId,
                        }),
                    });
                    return { data: null };
                } catch (error) {
                    return { error };
                }
            },
            invalidatesTags: ['Favorite'],
        }),
        removeFavorite: builder.mutation<null, FavoriteParams>({
            async queryFn(data) {
                if (!data.email) return { data: null };

                try {
                    const ref = doc(db, 'user', data.email);
                    await updateDoc(ref, {
                        favorite: arrayRemove({
                            eventId: data.eventId,
                        }),
                    });
                    return { data: null };
                } catch (error) {
                    return { error };
                }
            },
            invalidatesTags: ['Favorite'],
        }),
    }),
});

export const {
    useAddFavoriteMutation,
    useFetchFavoriteQuery,
    useRemoveFavoriteMutation,
} = favoriteApi;
