import { Console } from "@woowacourse/mission-utils";

class View {
  static MESSAGE = {
    INPUT: "덧셈할 문자열을 입력해 주세요.\n",
  };

  async input() {
    const userInput = await Console.readLineAsync(View.MESSAGE.INPUT);

    return userInput;
  }

  print(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default View;
