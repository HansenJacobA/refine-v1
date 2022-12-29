import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import StrategyCard from "../../components/strategyCard";
import LessonCard from "../../components/lessonCard";
import ReviewStrategyCard from "../../components/reviewStrategyCard";
import LinkComponent from "../../components/linkComponent";
import RuleRanksCard from "../../components/ruleRanksCard";

export default function Home() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap={5}
      mb={10}
      w={300}
    >
      <Template />
      <StrategyCard />
      <LessonCard />
      <LinkComponent url="/review" component={<ReviewStrategyCard />} />
      <RuleRanksCard />
    </Flex>
  );
}
