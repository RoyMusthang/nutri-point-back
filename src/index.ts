import api from './api';
import vars from './vars';

api.listen(vars.api.port, () => {
    console.log(`running in port ${vars.api.port}`);
});
