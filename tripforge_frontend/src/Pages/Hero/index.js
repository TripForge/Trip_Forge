export default function Hero() {
  return <div className="flex flex-row">
    <div className="flex flex-col md:flex-row w-full">
      {/* border-dashed  my-2 md:mx-2 rounded-md */}
      <div className="column-2 w-full md:w-5/12 h-full border-2">

      </div>
      <div className="column-3 w-full md:w-7/12 h-full border-2">
        {/* map */}
        <div style={{ height: "85vh" }}></div>
      </div>
    </div>
  </div>
}