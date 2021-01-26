import React from "react";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/Nav/SideNav";
import Rewards from "../../Components/PageContent/Rewards/Reward";

function RewardsPage() {
  return (
    <>
      <SideNav />
      <Header />
      <h1>My Rewards</h1>
      <Rewards />
    </>
  );
}

export default RewardsPage;
