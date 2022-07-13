type Props = {
  email: string;
  color: string;
};

const MailTo = ({ email, color }: Props): JSX.Element => {
  return (
    <>
      <a
        href={`mailto:${email}`}
        style={{ color: color, textDecoration: 'underline dotted' }}
      >
        {email}
      </a>
    </>
  );
};

export default MailTo;
