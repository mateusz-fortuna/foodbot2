export type Props = {
  children: string;
};

const Text = ({ children }: Props): JSX.Element => (
  <p className="text">{children}</p>
);

export default Text;
