// Function to fetch neighborhoods of a selected city from the API
export const fetchNeighborhoods = async (city: string) => {
  try {
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3304557|${city}/subdistritos`,
    );
    const data = await response.json();
    const neighborhoods = data.map((neighborhood) => neighborhood.nome);

    return neighborhoods;
  } catch (error) {
    console.error('Error fetching neighborhoods:', error);
    return [];
  }
};
