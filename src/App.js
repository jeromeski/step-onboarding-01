import Form from "./components/Form";
import PasswordInput from "./components/PasswordInput";
import TextInput from "./components/TextInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Form>
        <TextInput type="email" id="email" placeholder="" label="* Email ID" />
        <TextInput
          type="email"
          id="confirmEmail"
          placeholder=""
          label="* Confirm Email ID"
        />
        <TextInput
          type="text"
          id="firstName"
          placeholder="First Name (Required)"
          label="* Owner/Representative:"
        />
        <TextInput
          type="text"
          id="middleName"
          placeholder="Middle Name (Required)"
        />
        <TextInput
          type="text"
          id="lastName"
          placeholder="Last Name (Required)"
        />
        <TextInput
          type="text"
          id="gender"
          placeholder="Male"
          label="* Gender"
        />
        <TextInput
          type="tel"
          id="phone"
          placeholder="09xxxxxxxxx"
          label="* Contact Number"
        />
        <PasswordInput id="password" label="* Password" />
        <PasswordInput id="password2" label="* Confirm Password" />
        <button type="submit">submit</button>
      </Form>
    </div>
  );
}
