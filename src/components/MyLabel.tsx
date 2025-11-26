import './MyLabel.css';

export interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Uppercase the label text
   */
  allCaps?: boolean;
  /**
   * Label color
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Custom font color
   */
  fontColor?: string;
}

export const MyLabel = ({ label, size = 'normal', allCaps = false, color, fontColor }: Props) => {
  return (
    <span className={`${size} text-${color} label`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
