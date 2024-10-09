const SubsidyDistribution = artifacts.require('SubsidyDistribution');

contract('SubsidyDistribution', (accounts) => {
    let subsidy;

    before(async () => {
        subsidy = await SubsidyDistribution.deployed();
    });

    it('Should deploy successfully', async () => {
        assert(subsidy.address !== '');
    });

    it('Should add a beneficiary', async () => {
        await subsidy.addBeneficiary(accounts[1], 500, { from: accounts[0] });
        const beneficiary = await subsidy.beneficiaries(accounts[1]);
        assert(beneficiary.amount.toNumber() === 500);
    });

    it('Should verify eligibility', async () => {
        await subsidy.verifyEligibility(accounts[1], true, { from: accounts[0] });
        const beneficiary = await subsidy.beneficiaries(accounts[1]);
        assert(beneficiary.eligible === true);
    });

    it('Should release funds to an eligible beneficiary', async () => {
        await subsidy.releaseFunds(accounts[1], { from: accounts[0] });
        const beneficiary = await subsidy.beneficiaries(accounts[1]);
        assert(beneficiary.paid === true);
    });
});
