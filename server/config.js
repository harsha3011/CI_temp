module.exports = {
  port: process.env.PORT || 9080,
GITHUB_CLIENT_ID: '0961cec3d3c69f2bc8ef',
  GITHUB_CLIENT_SECRET: '5e5d0d3273cd699dcdf49ff533d1d7fa097f3ec1',
  GITHUB_ORGANISATION: 'CI',
  MONGO_URL: 'mongodb://localhost:27017/Database_CI',
  JWT_SECRET: process.env.JWT_SECRET || '824hdaueranteuhn',
  USER_AGENT: process.env.USER_AGENT || 'ReactBoilerplate',
  SCOPE: "repo%20read:public_key%20write:public_key%20admin:public_key%20read:repo_hook%20write:repo_hook%20admin:repo_hook"
}
