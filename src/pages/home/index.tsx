import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import StrategyCard from "../../components/strategyCard";
import Greeting from "../../components/greeting";
import LessonCard from "../../components/lessonCard";

export default function Home() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <Greeting />
      <StrategyCard />
      <LessonCard />
    </Flex>
  );
}
