import React from 'react'
import axios from 'axios'

function Compare() {
    let url="https://api.github.com/users/Gearon/repos"
    return axios.get(url).then(function(response) {
        return response.data;
    })
}

export default Compare