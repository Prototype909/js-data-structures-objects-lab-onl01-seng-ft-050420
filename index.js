// Write your solution in this file!
const driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => Object.assign({}, driver,{ [key]: value });

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver[key] = value;
  return driver;
}
