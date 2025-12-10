import "../index.css";
export default function Scroller() {
  let classList = [
    {
      code: "CS101",
      name: "Computer Science 101",
      description: "Introduction to Computer Science",
    },
    {
      code: "MATH101",
      name: "Mathematics 101",
      description: "Introduction to Mathematics",
    },
    {
      code: "ENG101",
      name: "English 101",
      description: "Introduction to English Literature",
    },
    {
      code: "BIO101",
      name: "Biology 101",
      description: "Introduction to Biology",
    },
    {
      code: "CHEM101",
      name: "Chemistry 101",
      description: "Introduction to Chemistry",
    },
    {
      code: "PHYS101",
      name: "Physics 101",
      description: "Introduction to Physics",
    },
  ];
  classList = classList.concat(classList);
  return (
    <div className="flex h-[20rem] w-[100rem] items-center overflow-hidden">
      <div className="scroll flex w-fit flex-row gap-[6rem]">
        {classList.map((item, i) => (
          <div>{item.code + i}</div>
        ))}
      </div>
    </div>
  );
}
