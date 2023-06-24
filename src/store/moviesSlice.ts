import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Result as movie } from "../interfaces/NowPlaying";

const token:string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGUzMWY5MjQ4ZmE5M2FkZmM2MWY0ZTJhOThjYmY1ZSIsInN1YiI6IjY0OTU5ZTY1ODgwNTUxMDBhZTFkYjc5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqJBj3YqeXVPFwcJPzIk78zqHbUQx7iPQBJOD2M7148';

//https://api.themoviedb.org/3/movie/now_playing?language=es-ES

const defaultQueryParams = (url:string) => `${url}?language=es-ES`

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
        nowPlaying:builder.query<movie[],void>({
            query:() => ({url:defaultQueryParams('/now_playing')}),
            transformResponse: ({results}:any) => results,
        })
    })
});

const { useNowPlayingQuery } = moviesApi;

export { moviesApi , useNowPlayingQuery }