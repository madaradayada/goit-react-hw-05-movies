import { useState } from 'react';

import {
  Wrapper,
  Input,
  Form,
  Button,
   Icon,
} from 'services/components/SearchBox/SearchBoxStyled';

export default function SearchBox({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = evt => {
    setSearchQuery(evt.currentTarget.value.toLowerCase());
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Please specify your query!');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  }
  
  return (
    <Wrapper>      
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <span><Icon /></span>
        </Button>
        <Input
          onChange={handleChange}
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={searchQuery}
        />        
      </Form>
    </Wrapper>
  )
}