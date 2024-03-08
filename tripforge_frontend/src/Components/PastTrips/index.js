import React from "react";
const previousTrips = [
  {
    albumId: 1,
    id: 1,
    title: "Hotel De Sidhant",
    url: "https://wallpapercave.com/wp/wp3598832.jpg",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    ratings: "4.5",
  },
  {
    albumId: 1,
    id: 2,
    title: "Hotel Africa",
    url: "https://i.pinimg.com/originals/20/07/d6/2007d6dd4ca8f4b527d19c7baaefab7e.jpg",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
    ratings: "4.1",
  },
  {
    albumId: 1,
    id: 3,
    title: "Modi Bhavan",
    url: "https://3dzip.org/wp-content/uploads/2021/07/3D-Exterior-Hotel-Scene-Model-3dsmax-Free-Download-By-Vu-Huy-Hung-1-scaled.jpg",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
    ratings: "4.2",
  },
  {
    albumId: 1,
    id: 4,
    title: "Ayodhya Hotel",
    url: "https://i.pinimg.com/originals/66/a3/b2/66a3b23d9d51618b41b85933444139a5.jpg",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
    ratings: "4.3",
  },
  {
    albumId: 1,
    id: 5,
    title: "Hotel Pakshi",
    url: "https://backiee.com/static/wpdb/wallpapers/1920x1080/170477.jpg",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
    ratings: "4.7",
  },
  {
    albumId: 1,
    id: 6,
    title: "Hotel Suar",
    url: "https://tse3.mm.bing.net/th?id=OIP.o22uDEaPma5J-FBzqUzAaAHaEo&pid=Api&P=0&h=180",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
    ratings: "3.8",
  },
  {
    albumId: 1,
    id: 7,
    title: "Hotel Vrindavan",
    url: "https://wallpapercave.com/wp/wp4611912.jpg",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    ratings: "3.6",
  },
  {
    albumId: 1,
    id: 8,
    title: "Hotel Georgia",
    url: "https://digital.ihg.com/is/image/ihg/even-hotels-eugene-5405616297-4x3",
    thumbnailUrl: "https://via.placeholder.com/150/54176f",
    ratings: "4.5",
  },
  {
    albumId: 1,
    id: 9,
    title: "Hotel Sidhant",
    url: "https://wallpapercave.com/wp/wp9914115.jpg",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97",
    ratings: "4.9",
  },
  {
    albumId: 1,
    id: 10,
    title: "Hotel Shri Ram",
    url: "https://images7.alphacoders.com/345/345182.jpg",
    thumbnailUrl: "https://via.placeholder.com/150/810b14",
    ratings: "5",
  },
];
function PastTrips() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Your Previous Trips
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {previousTrips.map((trip) => (
            <div key={trip.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                <img
                  src={trip.url}
                  alt={trip.thumbnailUrl}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:opacity-85"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={trip.href}>
                      {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                      {trip.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Rating: {trip.ratings}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {trip.price}
                </p>
                <div>
                  <button
                    type="button"
                    // className="bg-blue-700 hover:bg-red-800 text-white font-medium rounded-full text-sm px-5 py-2.5"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:hover:bg-blue-700  dark:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Default
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PastTrips;
