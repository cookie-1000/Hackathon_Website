export type Profile = {
  id?: string;
  user_id: string;
  name: string;
  school: string;
  role: string;
  experience: string;
  skills: string[];
  interests: string[];
  bio: string;
  looking_for_team: boolean;
};

export const emptyProfile = (userId: string): Profile => ({
  user_id: userId,
  name: "",
  school: "",
  role: "",
  experience: "Beginner",
  skills: [],
  interests: [],
  bio: "",
  looking_for_team: true,
});

export function commaTextToList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function listToCommaText(value: string[]) {
  return value.join(", ");
}
