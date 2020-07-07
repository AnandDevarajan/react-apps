import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
  const [repos, setRep] = useState([]);
  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRep(data);
  };
  useEffect(() => {
    fetchRepos();
  }, [repos_url]);
  return (
    <ListGroup>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div className="text-success">{repo.name}</div>
          <div className="text-secondary">{repo.language}</div>
          <div className="text-success">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
export default Repos;
