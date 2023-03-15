import { Input } from "@/components/atoms/Inputs/Input";
import { useController } from "react-hook-form";

const ControlledInput = (props) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);
  return <Input {...{ ...props, ...field, error }} />;
};

export default ControlledInput;
