import * as ollamaMUPFunction from "./ollamaMUPFunction.js";


let sampleHighlightedText = `There are times when the night sky glows with bands of color. The bands may
  begin as cloud shapes and then spread into a great arc across the entire sky. They
  may fall in folds like a curtain drawn across the heavens. The lights usually grow
  brighter, then suddenly dim. During this time the sky glows with pale yellow, pink,
  green, violet, blue, and red. These lights are called the Aurora Borealis. Some
  people call them the Northern Lights. Scientists have been watching them for
  hundreds of years. They are not quite sure what causes them. In ancient times
  people were afraid of the Lights. They imagined that they saw fiery dragons in the
  sky. Some even concluded that the heavens were on fire.`;

let sampleUserFeedback = `This should be summarized.`;

test("T1", async () => {
  const response = await ollamaMUPFunction.requestResponseForMUP(sampleHighlightedText, sampleUserFeedback);
  console.log(`The response to the first request: 

    ${response}`);
  expect(typeof response).toBe("string");
});



let sampleHighlightedText2 = `The genus Equus, which includes all extant equines, is believed to have evolved from Dinohippus, via the intermediate form Plesippus. One of the oldest species is Equus simplicidens, described as zebra-like with a donkey-shaped head. The oldest fossil to date is approximately 3.5 million years old, and was located in the US state of Idaho. The genus appears to have spread quickly into the Old World, with the similarly aged Equus livenzovensis documented from western Europe and Russia.`;

let sampleUserFeedback2 = `Make this paragraph double in size by adding more depth.`;

test("T2", async () => {
  const response = await ollamaMUPFunction.requestResponseForMUP(sampleHighlightedText2, sampleUserFeedback2);
  console.log(`The response to T2: 

    ${response}`);
  expect(typeof response).toBe("string");
});






