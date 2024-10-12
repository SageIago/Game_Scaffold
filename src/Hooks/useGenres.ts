//DECLARATION OF THE PACKAGES
import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

// TO DEFINE THE SHAPE OF THE GAME OBJECT
export interface Genre {
  id: number;
  title: string;
}

const useGenres = () => {
  // THIS IS FOR THE GENRES ARRAY
  const [genres, setGenres] = useState<Genre[]>([]);

  // THIS IS FOR THE ERROR ARRAY
  const [error, setError] = useState();

  // THIS IS FOR THE SKELETON LOADER
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // CREATING A CONTROLLER FOR CONTROLLING THE OBJECTS
    const CONTROLLER = new AbortController();

    setLoading(true);
    apiClient
      .get<Genre[]>("/genres", { signal: CONTROLLER.signal })
      .then((response) => {
        setGenres(response.data);
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // THIS SEMI-COLON IS VERY IMPORTANT.....
        setError(err.message);
        setLoading(false);
      });

    // TO DO THE CLEANUP EFFECT
    return () => CONTROLLER.abort();
  }, []);

  return { genres, error, isLoading};
};

export default useGenres