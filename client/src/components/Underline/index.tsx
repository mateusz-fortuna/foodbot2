import './index.sass';

type Props = {
  isCurrentPage: boolean;
};

const Underline = ({ isCurrentPage }: Props): JSX.Element => {
  const thinUnderlineStyle = {
    transform: 'translate3d(0,-1px,0)',
    opacity: 0.5,
  };

  return (
    <div className="navbar__item_underline navbar__item_underline--wrapper">
      <div
        style={isCurrentPage ? thinUnderlineStyle : undefined}
        className="navbar__item_underline navbar__item_underline--item"
      />
    </div>
  );
};
export default Underline;
