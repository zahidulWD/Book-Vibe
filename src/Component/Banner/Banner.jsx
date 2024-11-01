import BannerImage from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 max-w-6xl h-auto md:h-[454px] mx-auto mb-5 items-center rounded-[24px]">
            <div className="hero-content flex-col md:flex-row-reverse p-5 md:p-28">
                <img
                    src={BannerImage}
                    className="w-full max-w-xs md:max-w-sm rounded-lg shadow-2xl"
                    alt="Books Banner"
                />
                <div className="text-center md:text-left mt-4 md:mt-0">
                    <h1 className="text-3xl md:text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn w-full md:w-[190px] h-[50px] md:h-[65px] flex-row justify-center items-center gap-[10px] px-[20px] py-[10px] md:py-[15px] rounded-[8px] bg-[rgb(35,_190,_10)] text-white font-bold mt-4 md:mt-8">
                        View The List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
