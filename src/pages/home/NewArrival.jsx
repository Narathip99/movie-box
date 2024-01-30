import React from "react";
import { MovieCard } from "../../components/MovieCard";

export const NewArrival = () => {
  return (
    <section className="featured-movie">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mx-auto py-8">
          <h1 className="text-[42px] font-semibold">New Arrival</h1>
          <a href="#" className="text-red-600 text-xl font-medium">
            See more
          </a>
        </div>
        <div className="grid grid-cols-4 gap-24">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </section>
  );
};
