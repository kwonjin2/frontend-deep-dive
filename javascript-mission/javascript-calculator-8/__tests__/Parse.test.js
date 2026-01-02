import Parse from "../src/Parse.js";

describe("Parse 클래스 테스트", () => {
  test("tokenization 메서드 테스트", () => {
    expect(Parse.tokenization("//;\\n1;2;3")).toEqual(["1", "2", "3"]);
    expect(Parse.tokenization("//'\\n3'6'9")).toEqual(["3", "6", "9"]);
    expect(Parse.tokenization("//*\\n2*4*8")).toEqual(["2", "4", "8"]);
    expect(Parse.tokenization("1,2,3")).toEqual(["1", "2", "3"]);
    expect(Parse.tokenization("1,2:3")).toEqual(["1", "2", "3"]);
  });
});
