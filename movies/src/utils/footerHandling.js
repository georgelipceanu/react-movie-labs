export const canNavigate = (page, totalPages) => {
    return page > 0 && page <= totalPages;
  };