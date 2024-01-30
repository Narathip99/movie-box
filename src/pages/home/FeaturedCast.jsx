import React from "react";
import { MovieCard } from "../../components/MovieCard";
import cast from "../../assets/images/casts.png";

export const FeaturedCasts = () => {
  return (
    <section className="featured-movie">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mx-auto py-8">
          <h1 className="text-[42px] font-semibold">Featured Casts</h1>
          <a href="#" className="text-red-600 text-xl font-medium">
            See more
          </a>
        </div>
        <div className="grid grid-cols-4 gap-24">
          <section className="card">
            {/* img */}
            <img src={cast} alt="" className="w-full" />
            <p className="text-xl font-semibold mt-2">
              Keanu Reeves
            </p>
          </section>
          <section className="card">
            {/* img */}
            <img src={cast} alt="" className="w-full" />
            <p className="text-xl font-semibold mt-2">
              Keanu Reeves
            </p>
          </section>
          <section className="card">
            {/* img */}
            <img src={cast} alt="" className="w-full" />
            <p className="text-xl font-semibold mt-2">
              Keanu Reeves
            </p>
          </section>
          <section className="card">
            {/* img */}
            <img src={cast} alt="" className="w-full" />
            <p className="text-xl font-semibold mt-2">
              Keanu Reeves
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};
