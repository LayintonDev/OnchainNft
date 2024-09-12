import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const MyNftModule = buildModule("MyNftModule", (m) => {

  const nftModule = m.contract("MyNft");

  return { nftModule };
});

export default MyNftModule;
