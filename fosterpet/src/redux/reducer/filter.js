// export const filter = (array, filterType) => {
//   return array?.filter(
//     (element) =>
//       element[filterType.split(" ")[0]] ===
//       filterType.split(" ")[1].toLowerCase()
//   );
// };

export const filter = (array, filterType) => {
  if (filterType.length === 0) return array;
  let filteredArray = array;
  filterType?.forEach(
    (eachFilter) =>
      (filteredArray = filteredArray?.filter(
        (element) =>
          element[eachFilter.split(" ")[0]] ===
          eachFilter.split(" ")[1].toLowerCase()
      ))
  );
  return filteredArray;
};

export const getAnimalsByLocation = (animals, userLocation) => {
  if (!userLocation) return animals;
  let animalsByLocation = animals.filter(
    (animal) =>
      (((animal.location.split(" ")[0] - userLocation.split(" ")[0]) * 40000) /
        360) **
        2 +
        (((animal.location.split(" ")[1] - userLocation.split(" ")[1]) *
          40000) /
          360) **
          2 <=
      25 ** 2
  );
  return animalsByLocation;
};
