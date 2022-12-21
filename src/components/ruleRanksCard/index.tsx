import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import LinkComponent from "../linkComponent";

export default function RuleRanksCard() {
  return (
    <LinkComponent
      url="/strategy"
      component={
        <Card w={300}>
          <CardBody>
            <Heading as="h3" size="lg" noOfLines={1} mb={3} textAlign="center">
              Rule Ranks
            </Heading>

            <Text textAlign="center" mt={5}>
              Click here to view
            </Text>
          </CardBody>
        </Card>
      }
    />
  );
}
