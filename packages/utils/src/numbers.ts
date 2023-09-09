const LOCALE = {
  vi: { code: 'vi-VN', currency: 'VND' },
  ko: { code: 'ko-KR', currency: 'KRW' }
} as const;

/**
 * 숫자관련 유틸
 */
export const numbers = {
  /**
   * 돈표시 국가에 맞는 통화 표시로 전환 ex) 123,232
   * @param val 대상값
   */
  convertMoneyText: (
    val?: string | number | null,
    defaultValue: string | number = 0,
    locale: keyof typeof LOCALE = 'ko'
  ) => {
    if (!isNumeric(val) && defaultValue === '') {
      return defaultValue;
    }

    const resVal = isNumeric(val) ? val : defaultValue;

    return new Intl.NumberFormat(LOCALE[locale].code).format(Number(resVal));
  }
};

/**
 * number 체크
 * @param val 체크할 값
 * case)
 * null > return false
 * undefined > return false
 * '123+123' > return false
 * '123' > return true
 * 123 > return true
 * .123 > return true
 * '.123' > return true
 */
export const isNumeric = (val: any): boolean =>
  !isNaN(val) && !isNaN(parseFloat(val));
