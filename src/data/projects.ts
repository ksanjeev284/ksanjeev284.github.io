export interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "YouTube to Spotify Converter",
    description: "Convert YouTube playlists to Spotify playlists easily",
    url: "https://youtubetospotifyplaylistconverter.netlify.app/",
    image: "/project-images/youtube-spotify.png",
    tags: ["React", "API Integration", "Music"]
  },
  {
    title: "3D 2048 Game",
    description: "A 3D version of the classic 2048 puzzle game",
    url: "https://3d2048game.netlify.app/",
    image: "/project-images/2048-3d.png",
    tags: ["Three.js", "Game Development", "3D"]
  },
  {
    title: "YouTube Thumbnail Downloader",
    description: "Download YouTube video thumbnails in different resolutions",
    url: "https://youtubedthumbnaildownloader.netlify.app/",
    image: "/project-images/youtube-thumbnail.png",
    tags: ["React", "YouTube API"]
  },
  {
    title: "CTC Calculator",
    description: "Calculate Cost to Company with detailed breakdown",
    url: "https://ctccalculator.netlify.app/",
    image: "/project-images/ctc-calculator.png",
    tags: ["Finance", "Calculator"]
  },
  {
    title: "Mathematical Toolkit",
    description: "Collection of mathematical tools and calculators",
    url: "https://mathematicaltoolkit.netlify.app/",
    image: "/project-images/math-toolkit.png",
    tags: ["Mathematics", "Tools"]
  },
  {
    title: "Rubik's Cube Solver",
    description: "Interactive Rubik's cube solver with step-by-step guide",
    url: "https://rubikscubesolver3d.netlify.app/",
    image: "/project-images/rubiks-cube.png",
    tags: ["Three.js", "Puzzle", "Algorithm"]
  }
];