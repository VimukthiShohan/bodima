import {APIURL_Dev, APIURL_Prodn} from '@env';

const devEnviromentVariables = {
  APIURL_Dev,
};

const prodEnviromentVariables = {
  APIURL_Prodn,
};

export default __DEV__ ? APIURL_Dev : APIURL_Prodn;
