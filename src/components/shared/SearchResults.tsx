import { Models } from 'appwrite';
import { Loader } from 'lucide-react';
import React from 'react'
import GridPostList from './GridPostList';
import { searchPosts } from '@/lib/appwrite/api';

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts }:
  SearchResultsProps) => {
    if(isSearchFetching) return <Loader />

    if(searchPosts && searchedPosts.documents.length > 0){
      return (
        <GridPostList posts={searchPosts.documents} />
      )
    }

  return (
    <p className='text-light-4 mt-10 text-center w-full'>No results found</p>
  )
}

export default SearchResults