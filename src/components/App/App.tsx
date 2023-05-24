import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/hooks";
import { fetchProject, fetchProjectById } from "state/project/actionCreator";
import Input from "components/Common/Input/Input";
import Button from "components/Common/Button/Button";
import Text from "components/Common/Text/Text";
import Header from "components/Header/Header";
import Span from "components/Common/Span/Span";
import BlockWrapper from "components/BlockWrapper/BlockWrapper";
import ProjectBlock from "components/ProjectBlock/ProjectBlock";

const App: React.FC = () => {
  const { project, projectById } = useSelector((state: any) => state.project);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    project?.id && dispatch(fetchProjectById(project.id));
  }, [dispatch, project]);

  const clickHandler = () => {
    inputValue
      ? dispatch(fetchProjectById(inputValue))
      : dispatch(fetchProject());
    setInputValue("");
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Header>
        <Text>Project ID:</Text>
        <Input
          placeholder="For random leave empty"
          onChange={changeHandler}
          value={inputValue}
          type="search"
        />
        <Button onClick={clickHandler}>Fetch</Button>
      </Header>
      <BlockWrapper>
        {projectById ? (
          <>
            <Text>
              ID: <Span>{projectById?.id}</Span>
            </Text>
            <Text>
              Name: <Span>{projectById?.project?.name}</Span>
            </Text>
          </>
        ) : (
          <Text>Empty project...</Text>
        )}
      </BlockWrapper>
      {projectById && <ProjectBlock projectData={projectById} />}
    </>
  );
};

export default App;
