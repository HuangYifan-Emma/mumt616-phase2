const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

const wordArray = [
  'Breathy',
  'Bright',
  'Clear/Pure',
  'Creaky',
  'Dark',
  'Distorted',
  'Erratic',
  'Full',
  'Harsh/Strident',
  'Nasal',
  'Noisy',
  'Percussive',
  'Quiet/Hushed',
  'Round',
  'Sharp/Crisp',
  'Shrill',
  'Sustained/Resonant',
  'Thin',
  'Woody'];

const getOneExcerptWordKeyArray = (wordArray, excerptID) => {
  return wordArray.map((word) => `Excerpt${excerptID}_${word}`);
}

const getAllExcerptsWordObjectRandomly = (
  wordArray, firstExcerptID, lastExcerptID) => {
  const getExcerptWordObject = (wordArray, excerptID) => wordArray.reduce(
    (item, value) => ({
      ...item,
      [`Excerpt${excerptID}_${value}`]: getRandomInt(1, 6),
    }), {});
  const wordObjectArray = Array.from(
    {length: lastExcerptID - firstExcerptID + 1}, (_, i) => i + 1)
      .map((i) => getExcerptWordObject(wordArray, i));
  return Object.assign({}, ...wordObjectArray);
};

const testFormFields = {
  'FamiliarityRatingExcerpt1': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt2': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt3': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt4': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt5': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt6': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt7': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt8': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt9': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt10': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt11': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt12': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt13': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt14': getRandomInt(1, 6),
  'FamiliarityRatingExcerpt15': getRandomInt(1, 6),
  'Name': 'Test Name',
  'Age': getRandomInt(20, 30),
  'Years': getRandomInt(1, 10),
  'MusicIdentity': 'Test Identity',
  'ListenHabit': 'Test Habit',
  'StringQuartetFamiliarity': getRandomInt(1, 6),
  'ViolinFamiliarity': getRandomInt(1, 6),
  'ViolaFamiliarity': getRandomInt(1, 6),
  'CelloFamiliarity': getRandomInt(1, 6),
  'ContemporaryFamiliarity': getRandomInt(1, 6),
  'ExtendedTechFamiliarity': getRandomInt(1, 6),
  'LachenmannFamiliarity': getRandomInt(1, 6),
  'Feedback': 'Test Feedback Text'
};

const testWordRatingFields = getAllExcerptsWordObjectRandomly(wordArray, 1, 15);

export {testFormFields, testWordRatingFields}