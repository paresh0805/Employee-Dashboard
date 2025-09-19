const App = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6 p-4">
    {/* Heading above carousel */}
    <h1 className="text-3xl font-bold font-sans text-gray-800 text-center">
      Employee Dashboard jaldi se banado yaar 😭
    </h1>

    {/* Carousel */}
    <div className="carousel w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
      
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.imgflip.com/8vge7k.jpg"
          className="w-full h-auto max-h-[500px] object-contain"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW64gLh7EU65cBU9HrtWwLdFyEeudZ1A0Ewg&s"
          className="w-full h-auto max-h-[500px] object-contain"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.pinimg.com/236x/11/d6/fe/11d6fe63d45ac8330a291f7e07300b6c.jpg"
          className="w-full h-auto max-h-[500px] object-contain"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxx4bUTdWAAEZ6JiKWTYTi4LRrsBf9EE7g94p7BOZNv9o4ee4xBIZW4fbOOMbDDJojtAc&usqp=CAU"
          className="w-full h-auto max-h-[500px] object-contain"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
  </div>
);

export default App;
