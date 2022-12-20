import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";
import { templateProfile } from "../profile";

export default function seedUp(): void {
  const profile = getValueByKey("profile");
  if (profile === null) {
    setValueByKey("profile", templateProfile);
  }
}
