// DEFINE THE PLATFORM
export interface Platform {
  id: number;
  name: string;
  slug: string
}

// TO DEFINE THE SHAPE OF THE GAME OBJECT
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platform: { platform: Platform }[];
  metacritic: number
}

// USING RAWG
export interface FetchGameResponse {
  count: number;
  results: Game[];
}
