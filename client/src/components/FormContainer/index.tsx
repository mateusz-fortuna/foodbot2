import { useState } from 'react';
import Form from 'components/Form';
import Feedback from 'components/Form/Feedback';

export type Status = 'none' | 'inProgress' | 'success' | 'error';

const FormContainer = (): JSX.Element => {
  const [submittingStatus, setSubmittingStatus] = useState<Status>('none');
  const isFormSend =
    submittingStatus === 'success' || submittingStatus === 'error';

  return (
    <section className="contact__form_container">
      {isFormSend ? (
        <Feedback status={submittingStatus} />
      ) : (
        <Form
          submittingStatus={submittingStatus}
          setSubmittingStatus={setSubmittingStatus}
        />
      )}
    </section>
  );
};

export default FormContainer;
