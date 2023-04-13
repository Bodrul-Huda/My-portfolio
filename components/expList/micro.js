import { BsArrowRightCircleFill } from "react-icons/bs";

const Micro = () => {
  return (
    <>
      <div>
        <h3 className="flex gap-1 font-medium text-xl">
          Engineer{" "}
          <span className="text-orange-500 tracking-wide">@MicroSoft</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-slate-700">
          Jan 2022 - Present
        </p>
        <ul>
          <li className="text-base flex gap my-1">
            <span>
              <BsArrowRightCircleFill className="m-1 text-orange-500" />
            </span>
            Experience refers to conscious events in general, more specifically
            to perceptions, or to the practical knowledge and familiarity that
            is produced by these processes. Understood as a conscious event in
            the widest sense, experience involves a subject to which various
            items are presented.
          </li>
          <li className="text-base flex gap my-1">
            <span>
              <BsArrowRightCircleFill className="m-1 text-orange-500" />
            </span>
            In this sense, seeing a yellow bird on a branch presents the subject
            with the objects "bird" and "branch", the relation between them and
            the property "yellow".
          </li>
          <li className="text-base flex gap my-1">
            <span>
              <BsArrowRightCircleFill className="m-1 text-orange-500" />
            </span>
            Unreal items may be included as well, which happens when
            experiencing hallucinations or dreams. When understood in a more
            restricted sense, only sensory consciousness counts as experience.
          </li>
          <li className="text-base flex gap my-1 ">
            <span>
              <BsArrowRightCircleFill className="m-1 text-orange-500" />
            </span>
            In this sense, experience is usually identified with perception and
            contrasted with other types of conscious events, like thinking or
            imagining.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Micro;
