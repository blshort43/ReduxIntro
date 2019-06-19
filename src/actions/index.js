// Action creator
export const selectSong = song => {
  // Return an action3
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
