function convertToBase(system, changeingSystem, number) {
  const NumberMode = parseInt(number, system);
  if (NumberMode !== NumberMode) {
    return false;
  }
  const changedValue = NumberMode.toString(changeingSystem);
  if (changeingSystem > 9) {
    return changedValue;
  }
  return +changedValue;
}
