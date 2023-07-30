import { StrapiImages } from 'shared-typed/strapi-images';
import * as Styled from './styles';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export type CoverCarouselProps = {
  images: StrapiImages;
};

export const CoverCarousel = ({ images }: CoverCarouselProps) => {
  return (
    <Styled.Wrapper>
      <Carousel>
        {images.data.map((image) => (
          <Carousel.Item key={image.id}>
            <img
              src={image.attributes.url}
              alt={image.attributes.alternativeText}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Styled.Wrapper>
  );
};
