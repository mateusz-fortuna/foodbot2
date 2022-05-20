import AnimatedText from 'components/AnimatedText';
import Button from 'components/Button';
import { useNavigate } from 'react-router';

type Props = {
  pageName: string;
  page: string;
  mount: boolean;
};

const MenuItem = ({ pageName, page, mount }: Props): JSX.Element => {
  const buttonRef = document.querySelector<HTMLButtonElement>(
    '.menu__button > button',
  );
  const navigate = useNavigate();

  const handleClick = () => {
    if (buttonRef) {
      navigate('/' + page);
      buttonRef.click();
    }
  };

  return (
    <li className="navbar__item">
      <Button
        onClick={handleClick}
        fontColor="#fff"
        backgroundColor="transparent"
      >
        <h1>
          <AnimatedText mount={mount}>{pageName}</AnimatedText>
        </h1>
      </Button>
    </li>
  );
};

export default MenuItem;
