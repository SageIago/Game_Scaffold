//DECLARATION OF THE PACKAGES
import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
import { FetchGameResponse, Game } from "../Types";

const useGames = () => {
  // THIS IS FOR THE GAMES ARRAY
  const [games, setGames] = useState<Game[]>([]);

  // THIS IS FOR THE ERROR ARRAY
  const [error, setError] = useState();

  // THIS IS FOR THE SKELETON LOADER
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // CREATING A CONTROLLER FOR CONTROLLING THE OBJECTS
    const CONTROLLER = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGameResponse>("/games", { signal: CONTROLLER.signal })
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // THIS SEMI-COLON IS VERY IMPORTANT.....
        setError(err.message);
        setLoading(false);
      });

    // TO DO THE CLEANUP EFFECT
    return () => CONTROLLER.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
