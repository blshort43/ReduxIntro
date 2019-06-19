import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Wat Song", duration: "8:00" },
    { title: "Song of Yeet", duration: "10:00" },
    { title: "Bruh", duration: "60:00" },
    { title: "Chicken Strips on Repeat", duration: "30:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
