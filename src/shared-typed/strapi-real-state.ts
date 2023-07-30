import { StrapiImages } from './strapi-images';

export type StrapiRealState = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    streetName: string;
    neighborhood: string;
    city: string;
    size: string;
    createdAt: string;
    bedrooms: number;
    bathrooms: number;
    parkingSpaces: number;
    streetNumber: string;
    addressType: string;
    notes: string;
    cover: StrapiImages;
  };
};
