import * as ollamaMCPFunction from "./ollamaMCPFunction.js";

//todo: make prompt consistent (might need more powerful model)


const multipleSampleCompleteText = [
    `There are times when the night sky glows with bands of color. The bands may
    begin as cloud shapes and then spread into a great arc across the entire sky. They
    may fall in folds like a curtain drawn across the heavens. The lights usually grow
    brighter, then suddenly dim. During this time the sky glows with pale yellow, pink,
    green, violet, blue, and red. These lights are called the Aurora Borealis. Some
    people call them the Northern Lights. Scientists have been watching them for
    hundreds of years. They are not quite sure what causes them. In ancient times
    people were afraid of the Lights. They imagined that they saw fiery dragons in the
    sky. Some even concluded that the heavens were on fire.`,

    `The genus Equus, which includes all extant equines, is believed to have evolved from Dinohippus, via the intermediate form Plesippus. One of the oldest species is Equus simplicidens, described as zebra-like with a donkey-shaped head. The oldest fossil to date is approximately 3.5 million years old, and was located in the US state of Idaho. The genus appears to have spread quickly into the Old World, with the similarly aged Equus livenzovensis documented from western Europe and Russia.`
];

const multipleSampleUserComments = [
    [`Summarize this text.`, `Leave the first sentence the same.`],
    [`Summarize this text in two sentences.`, `I would like to have a short paragraph about dolphins at the end.`]
];

const multipleSampleUserCommentsContext = [
    [`There are times when the night sky glows with bands of color. The bands may begin as cloud shapes and then spread into a great arc across the entire sky.`, ``],
    [`The genus Equus, which includes all extant equines, is believed to have evolved from Dinohippus, via the intermediate form Plesippus. One of the oldest species is Equus simplicidens, described as zebra-like with a donkey-shaped head. The oldest fossil to date is approximately 3.5 million years old, and was located in the US state of Idaho. The genus appears to have spread quickly into the Old World, with the similarly aged Equus livenzovensis documented from western Europe and Russia.`, ``]
];




test(`Test 1`, async () => {
    const response = await ollamaMCPFunction.requestResponseForMCP(multipleSampleCompleteText[0], multipleSampleUserComments[0][0], multipleSampleUserCommentsContext[0][0]);
    console.log(`Response 1: 
    
    ${response}`);
    expect(typeof response).toBe("string");
    });


test(`Test 2`, async () => {
    const response = await ollamaMCPFunction.requestResponseForMCP(multipleSampleCompleteText[1], multipleSampleUserComments[1], multipleSampleUserCommentsContext[1]);
    console.log(`Response 2: 
    
    ${response}`);
    expect(typeof response).toBe("string");
    });






