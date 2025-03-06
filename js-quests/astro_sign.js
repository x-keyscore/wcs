// Here are our Astro signs provided as a string.

const aries = `♈`,
  taurus = `♉`,
  gemini = `♊`,
  cancer = `♋`,
  leo = `♌`,
  virgo = `♍`,
  libra = `♎`,
  scorpio = `♏`,
  sagittarius = `♐`,
  capricorn = `♑`,
  aquarius = `♒`,
  pisces = `♓︎`;

const fireSigns = [aries, leo, sagittarius];
const earthSigns = [taurus, virgo, capricorn];
const airSigns = [gemini, libra, aquarius];
const waterSigns = [cancer, scorpio, pisces];

console.log(
  fireSigns[fireSigns.length - 1] === "♐"
    ? "Good Answer ✅"
    : "Wrong Answer ❌"
);

console.log(earthSigns[earthSigns.length - 1] !== "♐" ? "Good Answer ✅" : "Wrong Answer ❌");

console.log(airSigns[0] !== "♓︎" ? "Good Answer ✅" : "Wrong Answer ❌");

console.log(waterSigns[0] === "♋" ? "Good Answer ✅" : "Wrong Answer ❌");