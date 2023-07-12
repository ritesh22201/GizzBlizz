import { Box, Input } from '@chakra-ui/react';
import React from 'react'

const TodoInput = () => {
    return (
        <Box>
            <form>
                <Input type='text' placeContent={'Add a todo...'} />
            </form>
        </Box>
    )
}

export default TodoInput;