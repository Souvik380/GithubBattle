import React from 'react'
import axios from 'axios'

function utils(language) {
    
  var encodedURI = window.encodeURI(
    'https://api.github.com/search/repositories?q=stars:>1+language:' +
      language +
      '&sort=stars&order=desc&type=Repositories'
  );

  return axios.get(encodedURI).then(function(response) {
      return response.data.items;
  })
}

export default utils