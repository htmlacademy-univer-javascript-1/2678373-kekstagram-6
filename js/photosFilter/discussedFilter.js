function sortByComments(photosData) {
  const sortedPhotos = Array.from(photosData);
  return sortedPhotos.sort((a, b) => b.comments.length - a.comments.length);
}

export { sortByComments };
