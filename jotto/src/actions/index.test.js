import moxios from "moxios";
import { getSecretWord } from "./";

describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("secret word returned", async () => {
    /**
     * 1. define response for moxios, and wait for async getSecretWord() done then complete the test
     * 2. moxios.wait() --> set config for axios will call through moxios instead http
     **/
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });

    const secretWord = await getSecretWord();
    expect(secretWord).toBe("party");
  });
});
