import { AIBackground } from "../svgs/AIBackground";
import { WebDevBackground } from "../svgs/WebDevBackground";
import { DataBackground } from "../svgs/DataBackground";
import { MobileBackground } from "../svgs/MobileBackground";
import { GameDevBackground } from "../svgs/GameDevBackground";
import { CloudBackground } from "../svgs/CloudBackground";
import { DefaultBackground } from "../svgs/DefaultBackground";

export const projectBackgrounds: Record<string, React.ComponentType> = {
  ai: AIBackground,
  "machine-learning": AIBackground,
  ml: AIBackground,
  webdev: WebDevBackground,
  web: WebDevBackground,
  frontend: WebDevBackground,
  backend: WebDevBackground,
  fullstack: WebDevBackground,
  data: DataBackground,
  analytics: DataBackground,
  mobile: MobileBackground,
  ios: MobileBackground,
  android: MobileBackground,
  gamedev: GameDevBackground,
  game: GameDevBackground,
  cloud: CloudBackground,
  devops: CloudBackground,
  infrastructure: CloudBackground,
  default: DefaultBackground,
};
