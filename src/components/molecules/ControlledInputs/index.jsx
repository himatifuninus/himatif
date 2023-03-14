import { Input } from "@/components/atoms/Inputs";
import { useController } from "react-hook-form";

const ControlledInput = (props) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);
  return <Input {...{ ...props, ...field, error }} />;
};

export default ControlledInput;
