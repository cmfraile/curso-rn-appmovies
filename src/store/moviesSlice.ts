import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token:string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGUzMWY5MjQ4ZmE5M2FkZmM2MWY0ZTJhOThjYmY1ZSIsInN1YiI6IjY0OTU5ZTY1ODgwNTUxMDBhZTFkYjc5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqJBj3YqeXVPFwcJPzIk78zqHbUQx7iPQBJOD2M7148';

const moviesApi = createApi({
    reducerPath:'movies',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://api.themoviedb.org/3/movie',
        headers:{
            'Content-Type': 'application/json',
            ...{Authorization:`Bearer ${token}`}
        },
    }),
    endpoints:(builder) => ({
        nowPlaying:builder.query({
            query:() => ({url:'/now_playing&language=es-ES'})
        })
    })
});

export default moviesApi