import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import StrategyCard from "../../components/strategyCard";
import Greeting from "../../components/greeting";
import LessonCard from "../../components/lessonCard";
import ReviewStrategyCard from "../../components/reviewStrategyCard";
import LinkComponent from "../../components/linkComponent";
import RuleRanksCard from "../../components/ruleRanksCard";

export default function Home() {
  const isAfterFivePm = () => {
    const date = new Date().toLocaleTimeString();
    const amPm = date.split(" ").pop();
    const hour = date.split(":").shift();
    return amPm === "PM" && parseInt(hour) > 4;
  };

  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <Greeting />
      <StrategyCard />
      <LessonCard />
      {isAfterFivePm() ? (
        <LinkComponent url="/review" component={<ReviewStrategyCard />} />
      ) : null}
      <RuleRanksCard />
    </Flex>
  );
}
