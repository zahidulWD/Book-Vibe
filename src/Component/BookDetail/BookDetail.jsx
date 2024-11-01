import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find((book) => book.bookId === id);

    // Check if book exists
    if (!book) {
        return <p>Book not found.</p>;
    }

    const { bookId: currentBookId, image,author,review,category } = book;
    console.log("Book found:", book);
    console.log("Image URL:", image);

    return (
        <div>
            <div className="hero bg-base-200 w-[1170px] h-[711px] left-[135px] right-[135px] top-[155px] bottom-[164px] mb-4">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-[573px] h-[711px] left-[135px] top-[155px] ">
                    <img src={image} alt="Book Cover" className="max-w-sm rounded-lg shadow-2xl w-[425px] h-[564px] left-[209px] top-[228px]" />
                    </div>
                    <div>
                        <h1 className="text-[rgb(19,_19,_19)] text-[40px] font-bold leading-[53px] tracking-[0px] text-left">The Catcher in the Rye</h1>
                        <p className="text-[rgba(19,_19,_19,_0.8)] text-[20px] font-medium leading-[23px] tracking-[0px] text-left mt-4">
                          By: {author}
                        </p>
                        <div className="divider"></div>
                        <p className="text-[rgba(19,_19,_19,_0.8)] text-[20px] font-medium leading-[23px] tracking-[0px] text-lleft">{category}</p>
                        <div className="divider"></div>
                        <p className="py-6">
                          <span className="text-bold text-2xl">Review :</span> {review}
                        </p>
                        <div className="flex space-x-4 ml-5">
                           <button className="btn btn-outline btn-accent">Read</button>
                           <button className="btn btn-active btn-accent">Wishlist</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
