import { apiSlice } from './apiSlice'
const url = 'auth'

export const authEndpoint = apiSlice.injectEndpoints({
	endpoints: builder => ({
		register: builder.mutation({
			query: data => ({
				url: `${url}/`,
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['User']
		})
	})
})

export const { useRegisterMutation } = authEndpoint
