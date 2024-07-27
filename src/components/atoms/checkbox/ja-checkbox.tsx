import { Checkbox as OriginalCheckbox } from '@/components/ui/checkbox';
import './ja-checkbox.style.css';
import { CheckboxProps } from '@radix-ui/react-checkbox';

const JaCheckBox = ({ className, ...props }: CheckboxProps) => {
  const modifiedClassName = `${className} additional-styles_checkbox`;
  return (
    <OriginalCheckbox
      className={modifiedClassName}
      {...props}
    />
  );
};

export default JaCheckBox;
