export class Validators {
  static stringValidation(data) {
    if (data !== undefined && typeof data == 'string' && data !== null) {
      return true;
    }
    return false;
  }

  static numberValidation(number) {
    if (isFinite(number) && typeof number == 'number' && !isNaN(number)) {
      return true;
    }
    return false;
  }

  static objectValidation(data) {
    if (
      data !== undefined &&
      typeof data == 'object' &&
      !Array.isArray(data) &&
      data !== null
    ) {
      return true;
    }
    return false;
  }
}
