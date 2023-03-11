// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.16;
//pragma solidity ^0.8.14;
contract voting_system{
  struct contestant{
     uint contestant_id;
     uint age;
     string party;
     string name;
     uint total_votes;
  }
  uint[] global_check_voter_id;
  struct voter{
    bool is_voted;
    bool is_registered;
    uint voter_id;
    uint voter_to_contestant_id;

  }
    address admin;
  enum stages{
    reg,
    cast,
    result
  }stages public stage;
  constructor(){
      admin=msg.sender;
      stage=stages.reg;
  }
  uint public contestantsCount;
  uint length;
  mapping(uint=>contestant) public contestants;
  mapping(address=>voter) private voters;
  modifier only_admin{
    require(msg.sender==admin);
    _;
  }
modifier own_registration(address own_registration_k){
    require(msg.sender==own_registration_k);
    _;
}
  modifier validate_stage(stages x){
      require(stage==x);
      _;
  }
  // function check_admin(address adm_login_address)public returns(bool){
  //      return true;
  //    else
  //    {
  //      return false;
  //    }
  // }
  function changeState(stages x) only_admin public{
		require(x > stage);
        stage = x;
    }
function addContestant(string memory _name , string memory _party , uint _age) public only_admin validate_stage(stages.reg){
		contestantsCount++;
		contestants[contestantsCount]=contestant(contestantsCount,_age,_party,_name,0);
	}

function validate_voter_id(uint voter_id_validate) public view returns(bool){
  //  if(voter[msg.sender].voter_id==voter_id_validate)
    int count=0;
    for(uint i=0;i<length;i++){
      if(global_check_voter_id[i]==voter_id_validate)
           count=count+1; 
          }
    if(count==1)
    {
        return true;
    }
    else{
    return false;
    }
}
 function register_voter(address user,uint voter_id_re) public validate_stage(stages.reg){
    require(msg.sender==user);
    voters[user].is_registered = true;
    voters[user].voter_id=voter_id_re;
    global_check_voter_id.push(voter_id_re);
    length=length+1;
  }
  function cast_vote(uint voter_id_cast_check,uint contestant_id_cas) public validate_stage(stages.cast){
      require(voters[msg.sender].is_registered);
      require(!voters[msg.sender].is_voted);
      require(validate_voter_id(voter_id_cast_check));
      {   contestants[contestant_id_cas].total_votes++;
          voters[msg.sender].is_voted=true;
          voters[msg.sender].voter_to_contestant_id=contestant_id_cas;

      }
  }

}