import { Button, Flex, Textarea, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Profile } from "../../types";
import { submitNote } from "../../utilities/notes";
import { getProfile } from "../../utilities/profile";

export default function NoteForm() {
  const [note, setNote] = useState("");
  const [profile, setProfile] = useState<Profile>({ notes: [] });
  const [noteSubmitted, setNoteSubmitted] = useState(false);

  useEffect(() => {
    const storedProfile = getProfile();
    setProfile(storedProfile);
  }, [noteSubmitted]);

  return (
    <Flex w={300} direction="column" gap={5}>
      <Textarea
        placeholder="Add a note"
        value={note}
        onChange={function captureCurrentNote(e) {
          setNote(e.target.value);
        }}
        h={150}
      />
      <Button
        size="sm"
        onClick={function addNoteToProfile() {
          if (!note.split(" ").join("").length) {
            setNote("");
            return;
          }
          submitNote(note);
          setNote("");
          setNoteSubmitted(!noteSubmitted);
        }}
      >
        Add Note
      </Button>
      {profile.notes.map((note, index) => {
        return (
          <Text key={index} p={2} pl={4} pr={4} border="1px" borderRadius={15}>
            {note}
          </Text>
        );
      })}
    </Flex>
  );
}
