import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";
import { templateProfile } from "../profile";
import { resetStrategyReviewState } from "../strategy";

export default function seedUp(): void {
  let profile = getValueByKey("profile");
  if (profile === null) {
    setValueByKey("profile", templateProfile);
  }
  profile = profile || templateProfile;

  const currentDate = new Date().toLocaleDateString();
  if (currentDate !== profile.dateLastStrategyReview) {
    resetStrategyReviewState();
  }
}
