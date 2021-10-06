import { Props } from '.';

const MultilineText = ({ children }: Props) => {
  const textLine = children.split('\n');

  return (
    <div className="p">
      {textLine.map((line) => (
        <span className="text">{line}</span>
      ))}
    </div>
  );
};

export default MultilineText;
