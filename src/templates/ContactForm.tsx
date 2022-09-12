import {
  useShortAnswerInput,
  useLongAnswerInput,
  useGoogleForm,
  GoogleFormProvider,
} from 'react-google-forms-hooks';

import { Button } from '../components/Button';
import { TextAreaInput } from '../components/TextAreaInput';
import { TextInput } from '../components/TextInput';
import { Section } from '../layout/Section';
import form from '../utils/GoogleForm.json';

type IFormInputs = {
  id: string;
  type: 'text' | 'email' | 'tel';
};
function ShortAnswerInput({ id, type }: IFormInputs) {
  const { register, label } = useShortAnswerInput(id);

  return <TextInput type={type} label={label} {...register()} />;
}

function LongAnswerInput({ id, type }: IFormInputs) {
  const { register, label } = useLongAnswerInput(id);

  return <TextAreaInput type={type} label={label} {...register()} />;
}

const Contactform = () => {
  // @ts-ignore
  const methods = useGoogleForm({ form });

  const onSubmit = async (data: any) => {
    await methods.submitToGoogleForms(data).then(() => {
      // eslint-disable-next-line no-alert
      alert('Form submitted with success!');
    });
  };
  return (
    <Section>
      <GoogleFormProvider {...methods}>
        <form id="ContactForm" onSubmit={methods.handleSubmit(onSubmit)}>
          <ShortAnswerInput id="1371273434" type="email" />
          <ShortAnswerInput id="1352520723" type="text" />
          <LongAnswerInput id="1419437291" type="text" />

          <Button className="mt-2">Submit</Button>
        </form>
      </GoogleFormProvider>
    </Section>
  );
};

export { Contactform };
