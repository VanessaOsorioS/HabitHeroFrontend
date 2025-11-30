export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps = {
  options: DropdownOption[];
  value: string | null;
  onChange: (value: string) => void;       
  placeholder?: string;
};