import { Box } from '@mui/material'
import React from 'react'

const GradientBox = ({ children, height, width }) => {
    return (
        <Box className={`${height || "h-fit"} ${width || "w-full"} bg-black rounded-2xl p-8`}
            style={{ boxShadow: "rgba(46, 189, 230, 0.75) 0px 0px 15px 3px" }}>
            {children}
        </Box>
    )
}

export default GradientBox