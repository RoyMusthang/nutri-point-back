import api from './api';

const PORT = process.env.PORT || 3001;

api.listen(PORT, () => {
  console.log(`running in port ${PORT}`);
});
