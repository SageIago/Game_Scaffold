//DECLARATION OF THE PACKAGES
import { useState, useEffect } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";

// TO DEFINE THE SHAPE OF THE GAME OBJECT
export interface Game {
  id: number;
  title: string;
  thumbnail: string;
}

const useGames = () => {
  // THIS IS FOR THE GAMES ARRAY
  const [games, setGames] = useState<Game[]>([]);

  // THIS IS FOR THE ERROR ARRAY
  const [error, setError] = useState();

  useEffect(() => {
    // CREATING A CONTROLLER FOR CONTROLLING THE OBJECTS
    const CONTROLLER = new AbortController();

    apiClient
      .get<Game[]>("/games", { signal: CONTROLLER.signal })
      .then((response) => setGames(response.data))
      .catch((err) => {
        if (err instanceof CanceledError) return; // THIS SEMI-COLON IS VERY IMPORTANT.....
        setError(err.message);
      });

    // TO DO THE CLEANUP EFFECT
    return () => CONTROLLER.abort();
  }, []);

  return { games, error };
};

export default useGames;
