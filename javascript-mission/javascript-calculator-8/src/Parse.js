class Parse {
  static tokenization(input) {
    const delimiter = this.getCustomDelimiter(input);
    return this.deleteDelimiter(input, delimiter);
  }

  static deleteDelimiter(input, delimiter) {
    let deleteDelimiterStr = input;

    if (delimiter) {
      deleteDelimiterStr = deleteDelimiterStr.slice(input.indexOf("n") + 1);
      deleteDelimiterStr = deleteDelimiterStr.replaceAll(delimiter, ",");
    }

    deleteDelimiterStr = deleteDelimiterStr.replaceAll(":", ",");
    console.log(deleteDelimiterStr.split(","));
    return deleteDelimiterStr.split(",");
  }

  static getCustomDelimiter(input) {
    if (input.startsWith("//")) {
      const idx = input.indexOf("\\");
      const delimiter = input.slice(2, idx);
      return delimiter;
    }
    return null;
  }
}

export default Parse;
