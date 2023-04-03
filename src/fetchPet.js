const fetchPet = async ({queryKey}) => {
    const id = queryKey[1];

    const aipRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

    if(!aipRes.ok) {
        throw new Error(`deatils/${id} failed to fetch`);
    }

    return aipRes.json();
}

export default fetchPet;