import { Box, Input } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';

const Movies = () => {
    const [movieData, setMovieData] = useState('');
    const dispatch = useDispatch();
    const timeRef = useRef();

    useEffect(() => {
        clearTimeout(timeRef.current);
        timeRef.current = setTimeout(() => {
            timeRef.current = movieData;
        }, 1000)
        console.log(movieData)
        return () => clearTimeout(timeRef.current);
    }, [movieData])

    

    return (
        <Box>
            <Input type='text' ref={timeRef} value={movieData} onChange={(e) => setMovieData(e.target.value)} placeholder='Search a movie...' />
        </Box>
    )
}

export default Movies;