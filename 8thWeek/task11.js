function multiplyNumeric(obj, n) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        return obj[key] *= n;
      }
    }
  }
