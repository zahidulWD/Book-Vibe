import { Link } from "react-router-dom";

const Book = ({book}) => {

    const {bookId,image,bookName,author,tags,category,rating} = book;
    return (
       <Link to={`/books/${bookId}`}>
           <div className="card bg-base-100 shadow-xl w-[374px] gap-[24] h-[550px] p-[24px]">
           <figure className="bg-[rgb(243,_243,_243)] rounded-xl py-6">
             <img
               src={image}
               className="h-[166px] order-none self-stretch flex-grow-0 mx-0 my-[24px] mb-4"
               alt={bookName } />
           </figure>
           <div className="card-body">
            <div className="flex justify-start gap-4">
                {
                   tags.map((tag,index) =><button 
                   key={index}
                   class="btn btn-xs items-center bg-green-200 text-green-600">{tag}</button>)
                }
            </div>
             <h2 className="card-title">
               {bookName}
               <div className="badge badge-secondary">NEW</div>
             </h2>
             <p>By: {author}</p>
             <div className="border-t-2 border-dashed"></div>
             <div className="card-actions justify-between mt-4">
               <div className="text-[rgba(19,_19,_19,_0.8)] text-[16px] font-medium leading-[19px] tracking-[0px] text-center">{category}</div>
               <div className="flex justify-center gap-4">
                <div>
                    {rating}
                </div>
               <div className="rating">
                  <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-300"
                      defaultChecked />
               </div>
               </div>
               </div>
             </div>
           </div>
       </Link>
    );
};

export default Book;