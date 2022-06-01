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
