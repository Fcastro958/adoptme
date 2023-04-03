const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) {
    return [];
  }

  const aipRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

  if (!aipRes.ok) {
    throw new Error(`breed/${animal} failed to fetch`);
  }

  return aipRes.json();
};

export default fetchBreedList;
