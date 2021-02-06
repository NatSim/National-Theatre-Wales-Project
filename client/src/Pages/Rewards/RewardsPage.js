import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/Nav/SideNav";
import Rewards from "../../components/PageContent/Rewards/Reward";
import * as CgIcons from "react-icons/cg";

function RewardsPage() {
  //Header Profile icon/path
  const profileLink3 = "/profile";
  const profileIcon3 = [<CgIcons.CgProfile className="profile-svg" />];

  return (
    <>
      <SideNav />
      <Header Link={profileLink3} Icon={profileIcon3} />
      <h1>My Rewards</h1>
      <Rewards />
    </>
  );
}

export default RewardsPage;
