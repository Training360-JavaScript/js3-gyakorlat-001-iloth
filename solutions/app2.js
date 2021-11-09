const HU = {
  date(date) {
    return new Intl.DateTimeFormat('hu-HU').format(date);
  },
  curreny(amount = 0.0) {
    return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(amount);
  },
  list(strArr = []) {
    return strArr.join(', ').replace(/(\b, \b)(?!.*\1)/, ' és ');
  },
};

export default HU;
