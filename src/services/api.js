export const fetchImagesWithQuery = (searchQuery, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=34102609-f84f9031f7cc384142e1c0663&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response =>
      response.ok ? response.json() : Promise.reject(response)
    )
    .then(data => data.hits);
};
