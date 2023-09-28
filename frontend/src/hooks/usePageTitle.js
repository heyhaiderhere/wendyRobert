const usePageTitle = (title) => {
  const path = location.pathname;
  document.title = `${path.trim()}`;
};

export default usePageTitle;
