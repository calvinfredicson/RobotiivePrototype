import { faker } from "@faker-js/faker";

interface Info {
  index: number;
  name: string;
  initials: string;
  jobTitle: string;
  description: string;
  longText: string;
}

const generated: Info[] = [];

export function generateUsers(length: number, startIndex = 0) {
  return Array.from({ length }).map((_, i) => getUser(i + startIndex));
}

function user(index = 0): Info {
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();

  return {
    index: index + 1,
    name: `${firstName} ${lastName}`,
    initials: `${firstName.substr(0, 1)}${lastName.substr(0, 1)}`,
    jobTitle: faker.name.jobTitle(),
    description: faker.lorem.sentence(10),
    longText: faker.lorem.paragraphs(1),
  };
}

function getUser(index: number) {
  if (!generated[index]) {
    generated[index] = user(index);
  }
  return generated[index];
}
