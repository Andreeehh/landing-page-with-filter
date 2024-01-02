import { LogoLink } from 'components/LogoLink';
import * as Styled from './styles';
import { Heading } from 'components/Heading';

export type HeaderProps = {
  name: string;
  logo: string;
  showText: boolean;
};

export const Header = ({ name, logo, showText }: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink text={`${name} `} srcImg={logo} link="/" newTab={false} />

      {showText && (
        <Styled.Content>
          <Heading size="small" as="h2" colorDark={true}>
            {name}
          </Heading>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
