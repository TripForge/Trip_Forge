import React from 'react';
// import 'ionicons/dist/ionicons.css';
const index = () => {
  return (
    <div className="bg-gray-950 flex justify-center items-center min-h-screen p-10">
      <div className="md:w-3/5 w-3/4 px-10 flex flex-col gap-2 p-5 bg-white-800 text-white">
        <h1 className="py-5 text-lg">Reviews</h1>
        <div className="flex bg-gray-600 bg-opacity-20 border border-gray-200 rounded-md">
          <ion-icon className="py-4 p-3" name="search-outline"></ion-icon>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Search Review"
            className="p-2 bg-transparent focus:outline-none"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 w-full py-2">
          <span className="cursor-pointer px-2 p-1 hover:bg-blue-400 bg-gray-950 bg-opacity-30">Experience</span>
          <span className="cursor-pointer px-2 p-1 hover:bg-blue-400 bg-gray-950 bg-opacity-30">Quality</span>
          <span className="cursor-pointer px-2 p-1 hover:bg-blue-400 bg-gray-950 bg-opacity-30">Ease Of Use</span>
          <span className="cursor-pointer px-2 p-1 hover:bg-blue-400 bg-gray-950 bg-opacity-30">Features</span>
        </div>

        {/* Item Container */}
        <div className="flex flex-col gap-3 mt-14">
          {/* Review 1 */}
          <div className="flex flex-col gap-4 bg-gray-700 p-4">
            {/* Profile and Rating */}
            <div className="flex justify justify-between">
              <div className="flex gap-2">
                <div className="w-7 h-7 text-center rounded-full bg-red-500">J</div>
                <span>Jess Hopkins</span>
              </div>
              <div className="flex p-1 gap-1 text-orange-300">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
              </div>
            </div>

            <div>
              Gorgeous website! Trip Booking is quite easy and best hotel recommendations.
            </div>

            <div className="flex justify-between">
              <span>Feb 13, 2024</span>
              <button className="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
                <ion-icon name="share-outline"></ion-icon> Share
              </button>
            </div>
          </div>

          {/* Review 2 */}
          <div className="flex flex-col gap-4 bg-gray-700 p-4">
            {/* Profile and Rating */}
            <div className="flex justify justify-between">
              <div className="flex gap-2">
                <div className="w-7 h-7 text-center rounded-full bg-yellow-500">A</div>
                <span>Alice Banks</span>
              </div>
              <div className="flex p-1 gap-1 text-orange-300">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
            </div>

            <div>
              Best Experience! This website showed me the best hotels nearby and best experience during trips.
            </div>

            <div className="flex justify-between">
              <span>Feb 13, 2024</span>
              <button className="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
                <ion-icon name="share-outline"></ion-icon> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
