import React, { useState } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  const [repo, setRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setloading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setloading(true);
    const response = await api.get(`/${repo}`);

    const { full_name: name } = response.data;

    setRepositories([...repositories, name]);
    setloading(false);
    setRepo('');
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="adicionar repositórios"
          value={repo}
          onChange={(event) => setRepo(event.target.value)}
        />

        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner size={15} color="#fff" />
          ) : (
            <FaPlus color="#fff" size={15} />
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}
