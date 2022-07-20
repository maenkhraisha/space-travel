const URL = 'https://api.spacexdata.com/v3/rockets';

const fectchServer = async () => fetch(URL).then(async (res) => {
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return null;
});

export default fectchServer;
