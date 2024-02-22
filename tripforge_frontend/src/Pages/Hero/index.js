import Map from "../../Components/Map";

export default function Hero() {
  return <div className="flex flex-row">
    <div className="flex flex-col md:flex-row w-full">
      {/* border-dashed  my-2 md:mx-2 rounded-md */}
      <div className="column-2 w-full md:w-5/12 h-full border-2">

      </div>
      <div className="column-3 w-full md:w-7/12 h-full border-2">
        <Map></Map>
        {/* <div style={{ height: "90vh", width: "100%" }}></div> */}
      </div>
    </div>
  </div>
}