import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:3001/' });

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ['Post, User'],
	endpoints: (builder) => ({}),
});