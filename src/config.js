import env from "./env";

//endpoint of the Spotify Accounts service
export const authEndpoint = "https://accounts.spotify.com/authorize";

// // our app's client id
export const clientId = env.SPOTIFY_CLIENT_ID;

// the address to which the Spotify Accounts service redirects
export const redirectUri = "http://localhost:3000/";
// export const redirectUri = "https://lis-tenapp.herokuapp.com/";

// user must authorize access to the data defined in the scopes
// do not remove playlist-modify-*
export const scopes = [
  "user-read-private",
  "user-read-email",
  "user-read-recently-played",
  "playlist-modify-public",
  "playlist-modify-private",
];
