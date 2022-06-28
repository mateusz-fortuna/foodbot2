import { useEffect, useRef, useState } from 'react';
import './index.sass';

type Props = {
  numerator: number;
  denominator: number;
  transitionDelay: number;
};

const Progress = ({
  numerator,
  denominator,
  transitionDelay,
}: Props): JSX.Element => {
  const [percentageValue, setPercentageValue] = useState(0);
  const transitionRef = useRef<NodeJS.Timeout | null>(null);
  const quotient = 100 / denominator;

  useEffect(() => {
    if (numerator > 0) {
      let i = 0;
      const handleInterval = () => {
        setPercentageValue((value) => value + 1);
        i++;
        if (i === quotient && transitionRef.current) {
          clearInterval(transitionRef.current);
        }
      };
      transitionRef.current = setInterval(handleInterval, transitionDelay);
    }
    return () => {
      if (transitionRef.current) clearInterval(transitionRef.current);
    };
  }, [numerator]);

  return (
    <div className="progress">
      <h1>{percentageValue}%</h1>
      <p>Loading...</p>
    </div>
  );
};

export default Progress;
