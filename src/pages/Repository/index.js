import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaSpinner, FaArrowLeft } from 'react-icons/fa';

import api from '../../services/api';

import ContainerComponent from '../../components/Container';
import { Loading, Owner, IsssueList } from './styles';

function Repository({ match }) {
  const [repo, setRepo] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function handleRepository() {
      const repoName = decodeURIComponent(match.params.repository);
      const [repositotry, issuesRepo] = await Promise.all([
        api.get(`/${repoName}`),
        api.get(`/${repoName}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          },
        }),
      ]);
      console.log(issuesRepo.data);
      setRepo(repositotry.data);
      setIssues(issuesRepo.data);
      setLoading(false);
    }

    handleRepository();
  }, []);

  if (loading) {
    return (
      <Loading loading={loading}>
        <FaSpinner />
      </Loading>
    );
  }

  return (
    <ContainerComponent>
      <Link to="/">
        <FaArrowLeft size={25} color="#7159c1" />
      </Link>
      <Owner>
        <img src={repo.owner.avatar_url} alt={repo.name} />
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
      </Owner>

      <IsssueList>
        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IsssueList>
    </ContainerComponent>
  );
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};

export default Repository;
