import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";
import TextInput from "./TextInput";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import TextArea from "./TextArea";

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input": {
      return <TextInput {...rest} />;
    }
    case "textarea": {
      return <TextArea {...rest} />;
    }
    case "select": {
      return <Select {...rest} />;
    }
    case "radio": {
      return <RadioButtons {...rest} />;
    }
    case "checkbox": {
      return <CheckboxGroup {...rest} />;
    }
    case "date": {
      return <DatePicker {...rest} />;
    }

    default:
      return null;
  }
}

export default FormikControl;
