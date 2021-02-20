/* eslint-disable no-unused-vars */
const { SPANISH_TO_ENGLISH, TRACK_LIST } = require('./constants.js')

const newSingle = (songName) => {
  return `New single ${songName} is dropping soon!`
};

const eresBadBunny = (str) => {
  return str.toLowerCase() == "bad bunny";
};

const areYouLil = (name) => {
  return name.slice(0, 4) == 'Lil ';
};

const mostViewsThreeVideos = (v1, v2, v3) => {
  const views = [v1, v2, v3];
  
  let mViews = v1;
  for (let i = 0; i < views.length - 1; i++) {
     mViews = Math.max(views[i], views[i + 1]);
  }
  
  return mViews;
};

const mostViews = (videoViews) => {
  // insert code
};

const validateEmail = (email) => {
  // insert code
};

const validateEmailWithMessage = (email) => {
  // insert code
};

const getInitials = (name) => {
  // insert code
};

const getInitialsOneName = (name) => {
  // insert code
};

const getInitialsLongName = (name) => {
  // insert code
};

const howRepetitiveAreYou = (lyrics, word) => {
  // insert code
};

const translateThis = (titles) => {
  const spanishToEnglish = SPANISH_TO_ENGLISH;
  // insert code
};

const getSingles = (trackList = TRACK_LIST) => {
  // insert code
};

const getUniqueArtists = (trackList = TRACK_LIST) => {
  // insert code
};

const getMostStreamedTrack = (trackList = TRACK_LIST) => {
  // insert code
};

module.exports = {
  newSingle,
  eresBadBunny,
  areYouLil,
  mostViewsThreeVideos,
  mostViews,
  validateEmail,
  validateEmailWithMessage,
  getInitials,
  getInitialsOneName,
  getInitialsLongName,
  howRepetitiveAreYou,
  translateThis,
  getSingles,
  getUniqueArtists,
  getMostStreamedTrack
};
