export const fetchBacklog = async () => {
  const res = await fetch("http://localhost:8080/backlog");
  return res.json();
};
