import { StrapiImageResponse } from './strapi-image-response';

export type StrapiSetting = {
  id: string;
  attributes: {
    logo: StrapiImageResponse;
    name: string;
    footer: string;
  };
};
