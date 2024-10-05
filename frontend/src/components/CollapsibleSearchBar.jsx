import React, { useState } from 'react';
import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const CollapsibleSearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SearchBarContainer>
      <SearchIcon onClick={toggleSearchBar}>
        {isOpen ? <AiOutlineClose /> : <CiSearch />}
      </SearchIcon>
      <SearchInputWrapper isOpen={isOpen}>
        <SearchInput
          type="text"
          placeholder="Search..."
          isOpen={isOpen}
        />
      </SearchInputWrapper>
    </SearchBarContainer>
  );
};

export default CollapsibleSearchBar;

// Styled Components
const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const SearchIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  color: black;
  transition: color 0.3s ease-in-out;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  width: ${({ isOpen }) => (isOpen ? '200px' : '0')};  /* Adjust width as per your preference */
  transition: width 0.3s ease-in-out;
  position: absolute; /* Keep input aligned to the right */
  right: 30px; /* Adjust right or left for positioning */
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 20px; /* This makes the input more rounded */
  outline: none;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')}; /* Hide text when collapsed */
  transition: opacity 0.3s ease-in-out, padding 0.3s ease-in-out;
  padding-left: ${({ isOpen }) => (isOpen ? '8px' : '0')}; /* Adjust padding when expanded or collapsed */
`;