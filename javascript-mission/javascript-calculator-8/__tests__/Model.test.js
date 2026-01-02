import Model from "../src/Model.js";

describe("Model 클래스 테스트", () => {
  const model = new Model();

  test("문자열에서 숫자만 합하여 계산한다.", () => {
    expect(model.calculate("//;\\n1;2;3")).toBe(6);
    expect(model.calculate("1,2:3")).toBe(6);
    expect(model.calculate("//;;;\\n1;;;2;;;3")).toBe(6);
    expect(model.calculate("//!\\n1!2!3")).toBe(6);
  });

  test("숫자가 아니거나 음수가 들어오면 에러를 던진다.", () => {
    expect(() => model.calculate("-1,2:3")).toThrow("[ERROR]");
    expect(() => model.calculate("a,b:c")).toThrow("[ERROR]");
  });
});
