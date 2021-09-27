import Transition from '../HOC/Transition';
import { TransitionProps } from '../HOC/Transition';
import './styles.sass';

export const TransitionIn = (props: TransitionProps): JSX.Element => (
  <Transition {...props} transitionClassName="transition--in" />
);

export const TransitionOut = (props: TransitionProps): JSX.Element => (
  <Transition {...props} transitionClassName="transition--out" />
);
