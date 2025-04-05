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
        // console.log("data", data.data);
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

// anime baru
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
        // console.log("data", data.data);
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

// detailanime
export const UseGetDetailAnime = (id = "naruto") => {
  const [detailAnimes, setDetailAnimes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetailAnime = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://laravel-api-manga-scraper.vercel.app/api/api/detail/${id}`
        );
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.json();
        // console.log("details", data.data);
        setDetailAnimes(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log("eerror", error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetailAnime();
  }, [id]);

  return { detailAnimes, isLoading };
};

const cleanUrl = (rawUrl) => {
  if (!rawUrl) return;
  return rawUrl.replace("https://komikindo3.com/", "");
};

// baca anime
export const UseGetbacaAnime = (url ) => {
  const [bacaAnime, setBacaAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getDetailAnime = async () => {
      try {
        setIsLoading(true);

        // hapus https jir berubah terus ni api
        const cleanedUrl = cleanUrl(url);
        const encodedUrl = encodeURIComponent(cleanedUrl); // Encode URL
        const response = await fetch(
          `https://laravel-api-manga-scraper.vercel.app/api/api/baca/${encodedUrl}`
        );
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        console.log("baca", data.data);
        setBacaAnime(data?.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    getDetailAnime();
  }, [url]);
  return { bacaAnime, isLoading };
};

//handlebuat cari search
export const UseSearchAnime = (title) => {
  const [searchAnimeId, setSearchAnimeId] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Jangan fetch kalau title kosong
    if (!title.trim()) {
      setSearchAnimeId([]);
      setIsLoading(false);
      return;
    }

    // nunggu  dulu sebelum fetch
    const debounce = setTimeout(async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          `https://laravel-api-manga-scraper.vercel.app/api/api/search/${encodeURIComponent(
            title
          )}`
        );
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.json();
        console.log("Hasil pencarian:", data.data);
        setSearchAnimeId(data.data || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError(error.message || "Failed to fetch search results");
        setSearchAnimeId([]);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    // Cleanup: Batalkan timeout kalau title berubah sebelum 500ms
    return () => clearTimeout(debounce);
  }, [title]);

  return { searchAnimeId, isLoading, error };
};

// fetch api according type anime
export const UseGetAnimeByType = () => {
  const [TypeAnimes, setTypeAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAnimeByType = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://laravel-api-manga-scraper.vercel.app/api/api/jenis/`
        );
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const result = await response.json();
        // console.log("data", result);
        setTypeAnimes(result.data || []);
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    getAnimeByType();
  }, []);
  return { TypeAnimes, isLoading };
};

export const useFetchAnimeByTypeDetails = (jenis, page) => {
  const [animeTypeDetails, setAnimeTypeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://laravel-api-manga-scraper.vercel.app/api/api/jenis/${jenis}/${page}`
        );
        const result = await response.json();
        // console.log("data", result.data);
        setAnimeTypeDetails(result.data || []);
      } catch (error) {
        console.error("Error fetching anime by jenis:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnime();
  }, [jenis, page]);

  return { animeTypeDetails, isLoading };
};
