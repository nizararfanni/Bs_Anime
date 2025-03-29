import React, { useEffect, useState } from "react";

export const UseGetPopularAnime = () => {
  const [popularAnimes, setPopularAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPopularAnime = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://laravel-api-manga-scraper.vercel.app/api/api/popular`
        );
        const data = await response.json();
        setPopularAnimes(data.data || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching popular anime:", error);
        setIsLoading(false);
      }
    };

    fetchPopularAnime();
  }, []);

  return { popularAnimes, isLoading };
};

export const UseGetLatestAnime = (page = 1) => {
  const [latestAnimes, setLatestAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLatestAnime = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://laravel-api-manga-scraper.vercel.app/api/api/terbaru/${page}`
        );
        const data = await response.json();
        // console.log("data", data.data?.data.title);
        setLatestAnimes(data.data?.data || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching latest anime:", error);
        setIsLoading(false);
      }
    };

    fetchLatestAnime();
  }, [page]);

  return { latestAnimes, isLoading };
};

export const UseGetDetailAnime = (id = 1) => {
  const [detailAnimes, setDetailAnimes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetailAnime = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://laravel-api-manga-scraper.vercel.app/api/api/detail/${id}`
        );
        const data = await response.json();
        console.log("data", data?.data);
        setDetailAnimes(data?.data || null);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetailAnime();
  }, [id]);

  return { detailAnimes, isLoading };
};
