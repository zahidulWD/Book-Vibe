import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('booksData.json')
          .then(res => res.json())
          .then(data => setBooks(data))
    },[])

    return (
        <div>
            <h2 className="text-[rgb(19,_19,_19)] text-[40px] font-bold leading-[53px] tracking-[0px] text-center">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                 {
                     books.map(book => <Book book={book} key={book.bookId}></Book>)
                 }
            </div>
        </div>
    );
};

export default Books;