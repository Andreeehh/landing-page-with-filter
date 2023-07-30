import { StrapiRealState } from 'shared-typed/strapi-real-state';

export default {
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
} as StrapiRealState;
