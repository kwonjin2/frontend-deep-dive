import Parse from "./Parse.js";

class Model {
  static MESSAGE = {
    NEGATIVE_ERROR: "[ERROR] 음수는 입력할 수 없습니다.",
    STRING_ERROR:
      "[ERROR] 숫자값만 입력할 수 있습니다. 숫자 이외의 문자를 입력하시려면 커스텀 구분자를 사용하세요.",
  };

  calculate(input) {
    if (!input) return 0;

    const deleteDelimiterStr = Parse.tokenization(input);
    const numbers = this.strToNum(deleteDelimiterStr);
    return this.sumValue(numbers);
  }

  strToNum(arr) {
    return arr.map((str) => {
      const num = +str;
      if (num < 0) throw new Error(Model.MESSAGE.NEGATIVE_ERROR);
      if (isNaN(num)) throw new Error(Model.MESSAGE.STRING_ERROR);
      return num;
    });
  }

  sumValue(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }
}

export default Model;
