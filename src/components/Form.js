import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState
} from "react";

export default function Form({ children }) {
  const childrenArray = Children.toArray(children);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const email2Ref = useRef(null);
  const genderRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const password2Ref = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      nameRef,
      emailRef,
      email2Ref,
      genderRef,
      phoneRef,
      passwordRef,
      password2Ref
    };
    console.log(data);
  };

  useEffect(() => {
    const email = emailRef.current;
    if (email) {
      emailRef.current.focus();
    }
  }, []);

  return (
    childrenArray &&
    childrenArray.map((child) => {
      if (child.props.id === "email" && isValidElement(child)) {
        return cloneElement(child, {
          ref: emailRef
        });
      }
      if (child.props.id === "email2" && isValidElement(child)) {
        return cloneElement(child, {
          ref: email2Ref
        });
      }
      if (child.props.id === "name" && isValidElement(child)) {
        return cloneElement(child, {
          ref: nameRef
        });
      }
      if (child.props.id === "gender" && isValidElement(child)) {
        return cloneElement(child, {
          ref: genderRef
        });
      }
      if (child.props.id === "phone" && isValidElement(child)) {
        return cloneElement(child, {
          ref: phoneRef
        });
      }
      if (child.props.id === "password" && isValidElement(child)) {
        return cloneElement(child, {
          ref: passwordRef
        });
      }
      if (child.props.id === "password2" && isValidElement(child)) {
        return cloneElement(child, {
          ref: password2Ref
        });
      }

      return cloneElement(child, {
        onSubmit
      });
    })
  );
}
