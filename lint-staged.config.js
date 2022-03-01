const preCommitRule = async () => [`eslint --max-warnings=0 --cache --fix`];

module.exports = {
  "**/*": preCommitRule,
};
