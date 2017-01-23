module.exports = {
  port: process.env.PORT || 9080,
GITHUB_CLIENT_ID: 'bd2b0a5de9af8a6f04d9',
  GITHUB_CLIENT_SECRET: 'eb4d9391a6d8a379329f7c54c32402be1fcd4cce',
  GITHUB_ORGANISATION: 'CI',
  MONGO_URL: 'mongodb://localhost:27017/Database_CI',
  JWT_SECRET: process.env.JWT_SECRET || '824hdaueranteuhn',
  USER_AGENT: process.env.USER_AGENT || 'ReactBoilerplate',
  SCOPE: "repo read:public_key write:public_key admin:public_key read:repo_hook write:repo_hook admin:repo_hook"
}
