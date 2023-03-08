import { Icon, IconBox } from "@/styles/ComponentStyles";

interface Props {
  name: string;
  src: string;
  boxSize?: number;
  size: number;
}

export const IconImage = ({ name, src, boxSize, size }: Props) => {
  return (
    <IconBox size={boxSize}>
      <Icon size={size} src={src} alt={name} />
    </IconBox>
  );
};
