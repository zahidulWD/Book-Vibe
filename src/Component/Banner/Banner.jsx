import BannerImage from '../../assets/books.jpg'

const Banner = () => {
    return (
         <div className="hero bg-base-200 max-w-6xl h-[454px] left-[135px] top-[155px] mb-5 items-center rounded-[24px]">
          <div className="hero-content flex-col lg:flex-row-reverse p-28">
             <img
               src={BannerImage}
               className="max-w-sm rounded-lg shadow-2xl" />
             <div>
               <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
               <button className="btn w-[190px] h-[65px] flex-row justify-center items-center gap-[10] px-[20px] py-[15px] rounded-[8px] bg-[rgb(35,_190,_10)] text-white font-bold mt-8">View The List</button>
             </div>
           </div>
         </div>
    );
};

export default Banner;