// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = {
  USER: "users",
  POST: "posts",
  ALBUM: "albums",
  PHOTO: "photos",
  COMMENT: "comments",
};

export const socialMediaApi = createApi({
  reducerPath: "socialMediaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => API.USER,
    }),
    getPostAndAlbum: builder.query({
      query: ({ type, userId }) => `${API[type]}?userId=${userId}`,
    }),
    getComment: builder.query({
      query: ({ type, postId }) => `${API[type]}?postId=${postId}`,
    }),
    getPhoto: builder.query({
      query: ({ albumId }) => `${API.PHOTO}?albumId=${albumId}`,
    }),
    deleteComment: builder.mutation({
      query: ({ type, commentId }) => ({
        url: `${API[type]}/${commentId}`,
        method: 'DELETE',
      }),
      // Invalidates the tag for this Post `id`, as well as the `LIST` tag,
      // causing the `listPosts` query to re-fetch if a component is subscribed to the query.
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
    addPostAndAlbum: builder.mutation({
      query: ({ type, body }) => ({
        url: `${API[type]}`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const useQuery = socialMediaApi;

export const socialMediaMiddleware = socialMediaApi.middleware;
export const socialMediaApiReducer = {
  [socialMediaApi.reducerPath]: socialMediaApi.reducer,
};

