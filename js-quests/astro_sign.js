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

const fireSigns = [aries, leo];
const earthSigns = [taurus, virgo, capricorn, sagittarius];
const airSigns = [pisces, gemini, libra, aquarius];
const waterSigns = [scorpio, pisces];

const sagittariusItem = earthSigns.pop();
fireSigns.push(sagittariusItem);

const piscesItem = airSigns.shift();
waterSigns.push(piscesItem);

waterSigns.unshift(cancer);

console.log(
  fireSigns[fireSigns.length - 1] === "♐"
    ? "Good Answer ✅"
    : "Wrong Answer ❌"
);

console.log(earthSigns[earthSigns.length - 1] !== "♐" ? "Good Answer ✅" : "Wrong Answer ❌");

console.log(airSigns[0] !== "♓︎" ? "Good Answer ✅" : "Wrong Answer ❌");

console.log(waterSigns[0] === "♋" ? "Good Answer ✅" : "Wrong Answer ❌");
