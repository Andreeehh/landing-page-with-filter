export const fetchCities = async () => {
  try {
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/municipios`,
    );
    const data = await response.json();
    // Create a HashMap to store the mapping of city names to IDs
    const cityMap: { [name: string]: string } = {};

    data.forEach((city) => {
      cityMap[city.nome] = city.id.toString(); // Convert the ID to string if needed
    });

    return cityMap;
  } catch (error) {
    console.error('Error fetching districts:', error);
  }
  return null;
};
