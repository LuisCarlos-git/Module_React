/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import ContainerComponent from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

export default function Main() {
  const [repo, setRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    function loadList() {
      const list = localStorage.getItem('data');
      if (list) {
        setRepositories(JSON.parse(list));
      }
    }
    loadList();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setloading(true);
    try {
      if (repo === '') throw 'Informe um repositório válido';

      const response = await api.get(`/${repo}`);

      const repoExists = repositories.find(
        (repository) => repository.name === repo
      );

      if (repoExists) throw 'Repositório já está na lista!';

      const { full_name: name } = response.data;
      const data = {
        name,
      };
      localStorage.setItem('data', JSON.stringify([...repositories, data]));

      setRepositories([...repositories, data]);
      setloading(false);
      setRepo('');
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          setError(true);
          toast.error('Repositório não encontrado');
        }
      }
      setError(true);
      toast.error(err);
      setloading(false);
      setRepo('');
    }
  }

  return (
    <ContainerComponent>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form
        onSubmit={handleSubmit}
        error={error}
        onClick={() => setError(false)}
      >
        <input
          type="text"
          placeholder="adicionar repositórios"
          value={repo}
          onChange={(event) => setRepo(event.target.value)}
        />

        <SubmitButton loading={loading} error={error}>
          {loading ? (
            <FaSpinner size={15} color="#fff" />
          ) : (
            <FaPlus color="#fff" size={15} />
          )}
        </SubmitButton>
      </Form>
      <List>
        {repositories.map((repository) => (
          <li key={repository.name}>
            <span>{repository.name}</span>
            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
              Detalhes
            </Link>
          </li>
        ))}
      </List>
    </ContainerComponent>
  );
}
