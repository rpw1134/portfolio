import { AIBackground } from "../svgs/AIBackground";
import { WebDevBackground } from "../svgs/WebDevBackground";
import { DataBackground } from "../svgs/DataBackground";
import { CloudBackground } from "../svgs/CloudBackground";
import { DefaultBackground } from "../svgs/DefaultBackground";

export const projectBackgrounds: Record<string, React.ComponentType> = {
  ai: AIBackground,
  web: WebDevBackground,
  data: DataBackground,
  infrastructure: CloudBackground,
  default: DefaultBackground,
};
