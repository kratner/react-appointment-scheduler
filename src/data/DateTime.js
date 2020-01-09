import MathUtils from "../utils/MathUtils";

export default class DateTime {
  getCurrentDateTime() {
    const mu = new MathUtils();
    const currentdate = new Date();
    const currentdatetime =
      mu.pad(currentdate.getMonth() + 1, 2) +
      "/" +
      mu.pad(currentdate.getDate(), 2) +
      "/" +
      currentdate.getFullYear() +
      " " +
      mu.pad(currentdate.getHours(), 2) +
      ":" +
      mu.pad(currentdate.getMinutes(), 2) +
      ":" +
      mu.pad(currentdate.getSeconds(), 2);
    return currentdatetime;
  }
}
