let raceNumber = Math.floor(Math.random() * 1000);
let earlyRaceRegistration = false;
let racerAge = 19;

if(earlyRaceRegistration === true && racerAge >= 18) {
  raceNumber += 1000};

if(earlyRaceRegistration === true && racerAge >= 18) {
  console.log(`You will be racing at 9:30AM, your race number is ${raceNumber}`);
} else if(earlyRaceRegistration === false && racerAge >= 18) {
  console.log(`You will be racing at 11:00AM, your race number is ${raceNumber}`);
} else {
  console.log(`You will be in the youth race at 12:30PM, your race number is ${raceNumber}`);
};
