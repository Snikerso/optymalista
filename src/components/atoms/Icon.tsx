import { GlobeIcon } from "./icons/Globe.icon";
import { MediumIcon } from "./icons/Medium.icon";
import { OpenTabIcon } from "./icons/OpenTab.icon";
import { QuizIcon } from "./icons/Quiz.icon";

const icons = {
  globe: GlobeIcon,
  quiz: QuizIcon,
  medium: MediumIcon,
  openTab: OpenTabIcon,
};

interface Props {
  iconName: keyof typeof icons;
  size?: number;
}
export type IconProps = {
  size: number;
};

export const Icon = ({ iconName, size = 24 }: Props) => {
  const IconComponent = icons[iconName];
  return <IconComponent size={size} />;
};
