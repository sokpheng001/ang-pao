export const data = [
  {
    name: "Kim Chansokpheng",
    isDeleted: false,
  },
  { name: "Takk SoPi", isDeleted: false },
];

const gifts = {
  A: "Artisanal chocolates",
  B: "Books on Chinese culture",
  C: "Chinese calligraphy set",
  D: "Decorative Chinese knot",
  E: "Engraved chopsticks",
  F: "Feng shui compass",
  G: "Green tea assortment",
  H: "Hand-painted silk scarf",
  I: "Intricate puzzle box",
  J: "Jade pendant",
  K: "Kung fu training DVD",
  L: "Lucky bamboo plant",
  M: "Mooncake assortment",
  N: "Nesting dolls with Chinese motifs",
  O: "Ornate teapot set",
  P: "Paper lantern set",
  Q: "Qi energy healing stones",
  R: "Red envelope with lucky money",
  S: "Scented incense gift set",
  T: "Traditional Chinese tea set",
  U: "Umbrella with cherry blossom design",
  V: "Vintage Chinese coin collection",
  W: "Wooden puzzle game",
  X: "Xylophone with traditional Chinese songs",
  Y: "Yin-Yang symbol wall hanging",
  Z: "Zen garden kit",
};

function isSuitableName(name) {
  var alphaRegex = /^[A-Za-z]+$/;
  return alphaRegex.test(name);
}

function isValidName(name) {
  if (!name.trim()) {
    return false;
  }

  // Check the length of the name
  if (name.length < 2 || name.length > 50) {
    return false;
  }

  // Check if the name contains only letters, spaces, hyphens, or apostrophes
  if (!/^[a-zA-Z\s'-]+$/.test(name)) {
    return false;
  }

  // Additional checks based on context can be added here

  return true;
}

export function giveGiftBasedOnName(firstName) {
  if (isValidName(firstName)) {
    var firstChar = firstName.charAt(0).toUpperCase();
    if (gifts[firstChar]) {
      return gifts[firstChar];
    } else {
      return "Sorry, I don't have a specific gift for the name " + firstName;
    }
  } else {
    return "Sorry, '" + firstName + "' is not a suitable name.";
  }
}

// Example usage:
var name = "Alice";
//console.log(giveGiftBasedOnName(name)); // Output: "For Alice, the gift is: Artisanal chocolates"

var invalidName = "123";
//console.log(giveGiftBasedOnName(invalidName)); // Output: "Sorry, '123' is not a suitable name."
