import { Select } from "@/components/atoms/Inputs/Select";
import { useController } from "react-hook-form";

const ControlledSelect = (props) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);
  return <Select {...{ ...props, ...field, error }} />;
};

export default ControlledSelect;
