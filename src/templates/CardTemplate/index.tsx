import { RealEstate } from 'components/RealEstate';
import { StrapiRealState } from 'shared-typed/strapi-real-state';
import { StrapiSettingResponse } from 'shared-typed/strapi-setting-response';
import { Base } from 'templates/Base';

export type CardTemplateProps = {
  setting: StrapiSettingResponse;
  realEstate: StrapiRealState;
};

export const CardTemplate = ({ setting, realEstate }: CardTemplateProps) => {
  return (
    <Base setting={setting.data}>
      <RealEstate realState={realEstate}></RealEstate>
    </Base>
  );
};
