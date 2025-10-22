import React from 'react';

const Slider = () => {
   return (
    <div className="">
      

      <div className="carousel w-full rounded-3xl shadow-lg">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full h-96">
          <img
            src="https://www.kinder.com/au/sites/kinder_au/files/cover_1920_2.png?t=1759807559"
            className="w-full object-cover bg-blue-400"
            alt="Toy Car"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-pink-400 border-none">❮</a>
            <a href="#slide2" className="btn btn-circle bg-pink-400 border-none">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full h-96">
          <img
            src="https://media.istockphoto.com/id/1322274556/photo/collection-of-different-toys-on-wooden-table.jpg?s=612x612&w=0&k=20&c=DrcAYB7zglqgD3GuICJFLuxE9cBOvSJIlFAdOwrYZEE="
            className="w-full object-cover"
            alt="Doll"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-pink-400 border-none">❮</a>
            <a href="#slide3" className="btn btn-circle bg-pink-400 border-none">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full h-96">
          <img
            src="https://thumbs.dreamstime.com/b/diverse-group-holds-various-toys-line-event-enthusiastic-people-joyfully-holding-their-hands-showcasing-favorites-379947279.jpg"
            className="w-full object-cover"
            alt="Stuffed Animal"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-pink-400 border-none">❮</a>
            <a href="#slide1" className="btn btn-circle bg-pink-400 border-none">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;