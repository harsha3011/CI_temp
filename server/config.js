module.exports = {
  port: process.env.PORT || 9080,

GITHUB_CLIENT_ID: '92cbd587a34e18f56a69',
  GITHUB_CLIENT_SECRET: '70358257786a6e1899f984c625198e6fcc011c2d',

  GITHUB_ORGANISATION: 'CI',
  MONGO_URL: 'mongodb://localhost:27017/Database_CI',
  JWT_SECRET: process.env.JWT_SECRET || '824hdaueranteuhn',
  USER_AGENT: process.env.USER_AGENT || 'ReactBoilerplate',
  SCOPE: "repo%20read:public_key%20write:public_key%20admin:public_key%20read:repo_hook%20write:repo_hook%20admin:repo_hook",
  WORKSPACE_DIRECTORY:'/tmp',
}
