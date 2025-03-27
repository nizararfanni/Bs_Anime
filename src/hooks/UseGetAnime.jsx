import React, { useEffect, useState } from "react";

export const UseGetAnime = (endpoint = "") => {
  const [animes, setAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDataAnime = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://laravel-api-manga-scraper.vercel.app/api/api/${endpoint}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        console.log("daata from api", data);
        setAnimes(data.data);

        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false);
      }
    };

    getDataAnime();
  }, []);
  return { animes, isLoading };
};
