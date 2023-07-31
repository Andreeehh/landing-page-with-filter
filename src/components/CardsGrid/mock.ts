import { StrapiRealStates } from 'shared-typed/strapi-real-satates';

export default {
  data: [
    {
      id: 3,
      attributes: {
        name: 'casa x',
        slug: 'casa-x',
        streetName: 'Rua Padre João',
        neighborhood: 'Vila Universitária',
        city: 'Bauru',
        size: '60m²',
        createdAt: '2023-07-29T22:24:13.356Z',
        bedrooms: 2,
        bathrooms: 3,
        parkingSpaces: 2,
        streetNumber: '18-50',
        addressType: 'Apartamento',
        notes: 'ap 83',
        rentalValue: null,
        purchaseValue: 2575000,
        cover: {
          data: [
            {
              id: 6,
              attributes: {
                alternativeText: null,
                url: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1690672286/photo_1564013799919_ab600027ffc6_2cd8e17a9b.jpg',
              },
            },
            {
              id: 5,
              attributes: {
                alternativeText: null,
                url: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1690672286/photo_1600585154340_be6161a56a0c_1f37960c68.jpg',
              },
            },
            {
              id: 4,
              attributes: {
                alternativeText: null,
                url: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1690672286/photo_1600596542815_ffad4c1539a9_5239697a22.jpg',
              },
            },
          ],
        },
      },
    },
    {
      id: 1,
      attributes: {
        name: 'Primeira casa',
        slug: 'primeira-casa',
        streetName: 'Avenida Rui Barbosa',
        neighborhood: 'Centro',
        city: 'Iacanga',
        size: '250m²',
        createdAt: '2023-07-29T22:15:19.152Z',
        bedrooms: 3,
        bathrooms: 4,
        parkingSpaces: 4,
        streetNumber: '456',
        addressType: 'Casa',
        notes: null,
        rentalValue: 1450.85,
        purchaseValue: 1250000,
        cover: {
          data: [
            {
              id: 6,
              attributes: {
                alternativeText: null,
                url: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1690672286/photo_1564013799919_ab600027ffc6_2cd8e17a9b.jpg',
              },
            },
          ],
        },
      },
    },
    {
      id: 2,
      attributes: {
        name: 'segunda casa',
        slug: 'segunda-casa',
        streetName: 'Rua 9 de julho',
        neighborhood: 'Jardim Panorama',
        city: 'Iacanga',
        size: '240m²',
        createdAt: '2023-07-29T22:18:03.166Z',
        bedrooms: 3,
        bathrooms: 3,
        parkingSpaces: 2,
        streetNumber: '992',
        addressType: 'Casa',
        notes: null,
        rentalValue: 2100.5,
        purchaseValue: null,
        cover: {
          data: [
            {
              id: 6,
              attributes: {
                alternativeText: null,
                url: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1690672286/photo_1564013799919_ab600027ffc6_2cd8e17a9b.jpg',
              },
            },
            {
              id: 4,
              attributes: {
                alternativeText: null,
                url: 'https://res.cloudinary.com/dxcyn87v8/image/upload/v1690672286/photo_1600596542815_ffad4c1539a9_5239697a22.jpg',
              },
            },
          ],
        },
      },
    },
  ],
} as StrapiRealStates;
