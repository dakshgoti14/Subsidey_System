// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SubsidyDistribution {
    struct Beneficiary {
        address payable beneficiaryAddress;
        uint amount;
        bool paid;
        bool eligible;
    }

    mapping(address => Beneficiary) public beneficiaries;
    address public government;
    uint public totalFunds;

    modifier onlyGovernment() {
        require(msg.sender == government, "Not authorized");
        _;
    }

    constructor() {
        government = msg.sender;
    }

    function addBeneficiary(address payable _address, uint _amount) public onlyGovernment {
        beneficiaries[_address] = Beneficiary(_address, _amount, false, false);
    }

    function verifyEligibility(address _address, bool _eligibility) public onlyGovernment {
        beneficiaries[_address].eligible = _eligibility;
    }

    function releaseFunds(address payable _address) public onlyGovernment {
        Beneficiary storage beneficiary = beneficiaries[_address];
        require(beneficiary.eligible, "Not eligible");
        require(!beneficiary.paid, "Already paid");
        require(address(this).balance >= beneficiary.amount, "Insufficient funds");

        beneficiary.paid = true;
        beneficiary.beneficiaryAddress.transfer(beneficiary.amount);
    }

    receive() external payable {
        totalFunds += msg.value;
    }
}
