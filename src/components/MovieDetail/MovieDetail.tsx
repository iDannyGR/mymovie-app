import { ReactElement } from 'react';

const MovieDetail = (): ReactElement => (
  <div className="relative shadow-lg shadow-slate-600 rounded-2xl">
    <img
      className="object-cover h-72 w-full rounded-2xl"
      src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
      alt=""
    />
    <div className=" text-white w-full">
      <h5 className="absolute font-bold text-3xl text-center top-4 left-3">Peaky Blinders (2013)</h5>
      <p className="hidden mt-4 text-justify">
        A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor
        blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in
        the world..
      </p>
      <div className="absolute flex justify-center items-center rounded-full w-16 h-16 right-1 bottom-1 border-b-4">
        <p className="rounded-full flex justify-center items-center  bg-white w-12 h-12 text-black font-extrabold">
          <span>8.5</span>
        </p>
      </div>
    </div>
  </div>
);

export default MovieDetail;
