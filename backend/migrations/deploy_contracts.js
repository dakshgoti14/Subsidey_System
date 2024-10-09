const SubsidyDistribution = artifacts.require("SubsidyDistribution");

module.exports = function (deployer) {
  deployer.deploy(SubsidyDistribution);
};
