export default class DateTime {
  getCurrentDateTime() {
    const currentdate = new Date();
    const currentdatetime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    return currentdatetime;
  }
}
