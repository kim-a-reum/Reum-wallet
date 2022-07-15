import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "../scroll";

export default function CheckboxPage() {
  const { data } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const onClickcheck = (event) => {
    // console.log(`${event.target}+${event.target.value}+${event.target.id}`);
    console.log(event.target.checked);
  };
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <input id={el._id} type="checkbox" onClick={onClickcheck} />
          <span>{el._id}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
        </div>
      ))}
    </>
  );
}
