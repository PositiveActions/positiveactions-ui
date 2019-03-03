import Amplify from 'aws-amplify';
import constant from '../aws-exports';

const amplify = {
 init: () => {
   const authConfig = {
     Auth: {
         region: constant.cognito.region,
         userPoolId: constant.cognito.UserPoolId,
         userPoolWebClientId: constant.cognito.ClientId,
         clientId: constant.cognito.ClientId,
       }
   }

   Amplify.configure(authConfig);
 }
}

export default amplify;