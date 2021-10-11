import { Props } from '.';

const MultilineText = ({ children }: Props) => {
  const textLine = children.split('\n');

  return (
    <div className="p" data-testid="multilineText">
      {textLine.map((line, index) => (
        <span className="text" key={`line${index}`}>
          {line}
        </span>
      ))}
    </div>
  );
};

export default MultilineText;
