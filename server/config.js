module.exports = {
  port: process.env.PORT || 9080,
<<<<<<< HEAD
GITHUB_CLIENT_ID: '0961cec3d3c69f2bc8ef',
  GITHUB_CLIENT_SECRET: '5e5d0d3273cd699dcdf49ff533d1d7fa097f3ec1',
=======

GITHUB_CLIENT_ID: 'df12170672229199cd99',
  GITHUB_CLIENT_SECRET: 'af6e9535473361bc4dd0edc9bfdcb41522782f9c',

>>>>>>> 435017fd7aa1fd12db87d7ea304a34357bd6dbb4
  GITHUB_ORGANISATION: 'CI',
  MONGO_URL: 'mongodb://localhost:27017/Database_CI',
  JWT_SECRET: process.env.JWT_SECRET || '824hdaueranteuhn',
  USER_AGENT: process.env.USER_AGENT || 'ReactBoilerplate',
  SCOPE: "repo%20read:public_key%20write:public_key%20admin:public_key%20read:repo_hook%20write:repo_hook%20admin:repo_hook"
}
