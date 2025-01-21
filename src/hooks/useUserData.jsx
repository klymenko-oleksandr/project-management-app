import {useEffect, useState} from 'react';

const LS_KEY = 'project-management-app';
const initialState = {
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
};

export const useUserData = () => {
  const [projectsState, setProjectsState] = useState(() => {
    const savedProjects = JSON.parse(localStorage.getItem(LS_KEY));

    return savedProjects || initialState;
  });

  useEffect(() => localStorage.setItem(LS_KEY, JSON.stringify(projectsState)), [projectsState]);

  return [projectsState, setProjectsState];
};
