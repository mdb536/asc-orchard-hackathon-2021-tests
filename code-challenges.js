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
  for (let i = 0; i < views.length; i++) {
     mViews = Math.max(views[i], mViews);
  }
  
  return mViews;
};

const mostViews = (views) => {
  
  let mViews = 0;
  for (let i = 0; i < views.length; i++) {
     mViews = Math.max(views[i], mViews);
  }
  
  return mViews;
};


const emailEndsCorrectly = (email) => {
  const end = ['.com', '.edu', '.net', '.org'];
  for (const e of end) {
    if (email.endsWith(e)) {
      return true;
    }
  }
  return false;
};

const validateEmail = (email) => {
  let splitted = email.split('@');
  if (splitted.length == 1) {
    // console.log("Missing @ symbol >>> 'Invalid email: missing @ symbol'")
    return 'Invalid email';
  } 
  if (!emailEndsCorrectly(email)) {
    return 'Invalid email';
  }
  if (splitted[0] == '') {
    return 'Invalid email';
  }
  return 'Valid email';
};

const validateEmailWithMessage = (email) => {
  let splitted = email.split('@');
  if (splitted.length == 1) {
    // console.log("Missing @ symbol >>> 'Invalid email: missing @ symbol'")
    return 'Invalid email: missing @ symbol';
  } 
  if (!emailEndsCorrectly(email)) {
    return 'Invalid email: email address should end with .com, .edu, .net, or .org';
  }
  if (splitted[0] == '') {
    return 'Invalid email: missing recipient name';
  }
  return 'Valid email';
};

const getInitials = (name) => {
  let splitName = name.split(' ');
  let firstName = splitName[0];
  let lastName = splitName[1];
  
  let firstInitial = firstName.slice(0, 1).toUpperCase();
  let lastInitial = lastName.slice(0, 1).toUpperCase();
  
  return `${firstInitial}${lastInitial}`;
};

const getInitialsOneName = (name) => {
  let splitName = name.split(' ');
  let firstName = splitName[0];
  let lastName = splitName[1];
  
  if (!lastName) {
    let firstInitial = firstName.slice(0, 2).toUpperCase();
    return `${firstInitial}`;
  }
  
  let firstInitial = firstName.slice(0, 1).toUpperCase();
  let lastInitial = lastName.slice(0, 1).toUpperCase();
  
  return `${firstInitial}${lastInitial}`;
}

const getInitialsLongName = (name) => {
  let splitName = name.split(' ');
  let firstName = splitName[0];
  let lastName = splitName[1];
  
  if (!lastName) {
    let firstInitial = firstName.slice(0, 2).toUpperCase();
    return `${firstInitial}`;
  }
  if (splitName.length > 1) {
    let combinedInitials = '';
    for (const name of splitName) {
      let initial = name.slice(0, 1).toUpperCase();
      combinedInitials += initial;
    }
    return combinedInitials;
  }
//   let firstInitial = firstName.slice(0, 1).toUpperCase();
//   let lastInitial = lastName.slice(0, 1).toUpperCase();
  
//   return `${firstInitial}${lastInitial}`;
};

const howRepetitiveAreYou = (lyrics, word) => {
  const lyricsArr = lyrics.split(" ");
  let count = 0;
  
  lyricsArr.forEach((w) => {  
    if (w.includes(word)) {
      count++;
    }
  });
  
  return count;
};

const translateThis = (arr) => {
  const spanishToEnglish = SPANISH_TO_ENGLISH;
  let total = [];
  arr.forEach(w => {
    let words = w.split(' ');
    let translated = words.map(word => {
       return spanishToEnglish[word];
    });
    
    total.push(translated.join(' '));
  });
  return total;
};

const getSingles = (trackList = TRACK_LIST) => {
  let singles = [];
  for (track of trackList) {
    if (track.type === 'single') {
    singles.push(track.title);
    }
  
  }
  return singles.join(', ');
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
