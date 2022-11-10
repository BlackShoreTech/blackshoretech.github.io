import {
  useShortAnswerInput,
  useLongAnswerInput,
  useGoogleForm,
  GoogleFormProvider,
} from 'react-google-forms-hooks';

import form from '../utils/GoogleForm.json';
import { Button } from './Button';
import { Section } from './Section';
import { TextAreaInput } from './TextAreaInput';
import { TextInput } from './TextInput';

type IFormInputs = {
  id: string;
  type: 'text' | 'email' | 'tel';
};

const ShortAnswerInput = ({ id, type }: IFormInputs) => {
  const { register, label } = useShortAnswerInput(id);

  return <TextInput type={type} label={label} {...register()} />;
};

const LongAnswerInput = ({ id, type }: IFormInputs) => {
  const { register, label } = useLongAnswerInput(id);

  return <TextAreaInput type={type} label={label} {...register()} />;
};

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

          <Button type="submit" className="mt-2">
            Submit
          </Button>
        </form>
      </GoogleFormProvider>
    </Section>
  );
};

export { Contactform };
