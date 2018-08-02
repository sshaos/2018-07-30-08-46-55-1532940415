const main = require('../main/main');

describe('main()', () => {

    it('should calculate the sum', () => {
      expect(main("123")).toBe(6);
      expect(main("102")).toBe(3);
      expect(main("-102")).toBe(1);
      expect(main("-2-11")).toBe(-2);
      expect(main("")).toBe(0);
      expect(main(" ")).toBe(0);
      //以下几种错误输入情况
      expect(main("-2-1-")).toBe(undefined);
      expect(main("@23")).toBe(undefined);
      expect(main("1-#3")).toBe(undefined);
    });

});
