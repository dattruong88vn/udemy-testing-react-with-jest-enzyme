import { getMatchingCountLetter } from "./";

describe("getMatchingCountLetter", () => {
  const secretLetter = "party";

  test("return correct count if there are no matching letter", () => {
    const countMatching = getMatchingCountLetter("house", secretLetter);
    expect(countMatching).toBe(0);
  });

  test("return correct count if there are 3 matching letters", () => {
    const countMatching = getMatchingCountLetter("parww", secretLetter);
    expect(countMatching).toBe(3);
  });
  test("return correct count if there are duplicate matching letter", () => {
    const countMatching = getMatchingCountLetter("parna", secretLetter);
    expect(countMatching).toBe(3);
  });
});
