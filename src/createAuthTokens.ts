import * as jwt from 'jsonwebtoken'


export const createAuthTokens = () => {


  return { refreshToken: "", accessToken: "" }

  const refreshToken = jwt.sign(


  );
};
