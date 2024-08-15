import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from "axios";
import { Link } from "react-router-dom"
import { getBook } from '../../../Backend/controlar/book.controlar';
//import { getBook } from '../../../Backend/controlar/book.controlar.js';

function Course() {

    const [book, setBook] = useState([])

    useEffect(() => {
        const getBook = async () => {
            try {

                const res = await axios.get("http://localhost:4000/book");
                console.log(res.data);
                setBook(res.data);

            } catch (error) {
                console.log(error);

            }
        }
        getBook();


    }, []);


    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:pd-20 px-4'>
                <div className='mt-40 item-center justify-center text-center'> <h1 className="text-3xl    md:text5xl text-bold">we are delighted to have you <span className='text-pink-500'>Here!</span></h1>


                    <p className='mt-12'>Many books have a table of contents, which lists the book's sections and chapters in the order they will appear. A table of contents includes page numbers so readers can quickly locate a specific section of the main text. Some tables of contents also include chapter titles and titles for larger portions of the book.</p>

                    <Link to="/">
                        <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded:md hover:bg-pink-700 duration-300'>Back</button>

                    </Link>

                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Course
