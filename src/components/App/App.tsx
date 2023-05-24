import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./App.module.css";
import { useAppDispatch } from "store/hooks";
import { fetchProject } from "state/project/actionCreator";

const App: React.FC = () => {
  const { project } = useSelector((state: any) => state.project);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  return (
    <div className={styles.appWrapper}>
      <div>id: {project.id}</div>
      <div>name: {project.name}</div>
      <div>modified: {project.modified}</div>
    </div>
  );
};

export default App;
