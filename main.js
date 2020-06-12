// Each hexagon has a corresponding ID attached to it. All of them are listed below
// A1,A2,B1,B2,B3,C1,C2,C3,D1,D2,D3,D4,E1,E2,E3,F1,F2,F3,F4,G1,G2,G3,H1,H2,H3,H4,I1,I2,I3,K2,J2,J3

console.log("hello world");

// Create An array holding all of the resource tiles
resourceTilesSixPlayer = [
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "wheat",
  "wheat",
  "wheat",
  "wheat",
  "ore",
  "ore",
  "ore",
  "wood",
  "wood",
  "wood",
  "wood",
  "brick",
  "brick",
  "brick",
  "desert",
  "sheep",
  "sheep",
  "wheat",
  "wheat",
  "ore",
  "ore",
  "wood",
  "wood",
  "brick",
  "brick",
  "desert"
];

resourceTilesFourPlayer = [
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "wheat",
  "wheat",
  "wheat",
  "wheat",
  "ore",
  "ore",
  "ore",
  "wood",
  "wood",
  "wood",
  "wood",
  "brick",
  "brick",
  "brick",
  "desert"
];

// Create an array of objects holding all of the hexagons
hexagonsSixPlayer = [
  {
    id: "A2",
    resource: null
  },
  {
    id: "B2",
    resource: null
  },
  {
    id: "B3",
    resource: null
  },
  {
    id: "C1",
    resource: null
  },
  {
    id: "C2",
    resource: null
  },
  {
    id: "C3",
    resource: null
  },
  {
    id: "D1",
    resource: null
  },
  {
    id: "D2",
    resource: null
  },
  {
    id: "D3",
    resource: null
  },
  {
    id: "D4",
    resource: null
  },
  {
    id: "E1",
    resource: null
  },
  {
    id: "E2",
    resource: null
  },
  {
    id: "E3",
    resource: null
  },
  {
    id: "F1",
    resource: null
  },
  {
    id: "F2",
    resource: null
  },
  {
    id: "F3",
    resource: null
  },
  {
    id: "F4",
    resource: null
  },
  {
    id: "G1",
    resource: null
  },
  {
    id: "G2",
    resource: null
  },
  {
    id: "G3",
    resource: null
  },
  {
    id: "H1",
    resource: null
  },
  {
    id: "H2",
    resource: null
  },
  {
    id: "H3",
    resource: null
  },
  {
    id: "H4",
    resource: null
  },
  {
    id: "I1",
    resource: null
  },
  {
    id: "I2",
    resource: null
  },
  {
    id: "I3",
    resource: null
  },
  {
    id: "J2",
    resource: null
  },
  {
    id: "J3",
    resource: null
  },
  {
    id: "K2",
    resource: null
  }
];

hexagonsFourPlayer = [
  {
    id: "A2",
    resource: null
  },
  {
    id: "B2",
    resource: null
  },
  {
    id: "B3",
    resource: null
  },
  {
    id: "C1",
    resource: null
  },
  {
    id: "C2",
    resource: null
  },
  {
    id: "C3",
    resource: null
  },
  {
    id: "D2",
    resource: null
  },
  {
    id: "D3",
    resource: null
  },
  {
    id: "E1",
    resource: null
  },
  {
    id: "E2",
    resource: null
  },
  {
    id: "E3",
    resource: null
  },
  {
    id: "F2",
    resource: null
  },
  {
    id: "F3",
    resource: null
  },
  {
    id: "G1",
    resource: null
  },
  {
    id: "G2",
    resource: null
  },
  {
    id: "G3",
    resource: null
  },
  {
    id: "H2",
    resource: null
  },
  {
    id: "H3",
    resource: null
  },
  {
    id: "I2",
    resource: null
  }
];

hexagonsSixPlayer.forEach(hex => {
  resourceIndex = getRandomIntInclusive(0, resourceTilesSixPlayer.length - 1);
  hex.resource = resourceTilesSixPlayer[resourceIndex];
  // Remove used index from the resourceTiles array since it was used
  resourceTilesSixPlayer = resourceTilesSixPlayer.filter(function(
    eachElem,
    index
  ) {
    return index != resourceIndex;
  });
});

hexagonsFourPlayer.forEach(hex => {
  resourceIndex = getRandomIntInclusive(0, resourceTilesFourPlayer.length - 1);
  hex.resource = resourceTilesFourPlayer[resourceIndex];
  // Remove used index from the resourceTiles array since it was used
  resourceTilesFourPlayer = resourceTilesFourPlayer.filter(function(
    eachElem,
    index
  ) {
    return index != resourceIndex;
  });
  // Console log the remaining resourceTiles
  console.log(resourceTilesFourPlayer);
});

// Declare function to get a random integer
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
