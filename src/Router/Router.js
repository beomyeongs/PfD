import React from 'react'
import Cover from '../Pages/Cover'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Cover />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
