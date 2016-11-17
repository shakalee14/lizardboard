const jwt = require( 'jsonwebtoken' )
const crypto = require( 'crypto' )
const User = require( '../../models/users' )
const { generateToken, userInfo, tokenInfo } = require( './authmethods' )

exports.login = ( request, response ) => {
  response.json( tokenInfo( request.user ))
}