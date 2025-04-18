/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwner__factory>;
    getContractFactory(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IVRFCoordinatorV2Plus",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVRFCoordinatorV2Plus__factory>;
    getContractFactory(
      name: "IVRFMigratableConsumerV2Plus",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVRFMigratableConsumerV2Plus__factory>;
    getContractFactory(
      name: "IVRFSubscriptionV2Plus",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVRFSubscriptionV2Plus__factory>;
    getContractFactory(
      name: "VRFV2PlusClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFV2PlusClient__factory>;
    getContractFactory(
      name: "VRFConsumerBaseV2Plus",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFConsumerBaseV2Plus__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "PairingEngine",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PairingEngine__factory>;
    getContractFactory(
      name: "Tournament",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Tournament__factory>;
    getContractFactory(
      name: "Util",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Util__factory>;

    getContractAt(
      name: "ConfirmedOwner",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwner>;
    getContractAt(
      name: "ConfirmedOwnerWithProposal",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    getContractAt(
      name: "IOwnable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IVRFCoordinatorV2Plus",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IVRFCoordinatorV2Plus>;
    getContractAt(
      name: "IVRFMigratableConsumerV2Plus",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IVRFMigratableConsumerV2Plus>;
    getContractAt(
      name: "IVRFSubscriptionV2Plus",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IVRFSubscriptionV2Plus>;
    getContractAt(
      name: "VRFV2PlusClient",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFV2PlusClient>;
    getContractAt(
      name: "VRFConsumerBaseV2Plus",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFConsumerBaseV2Plus>;
    getContractAt(
      name: "Ownable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "PairingEngine",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.PairingEngine>;
    getContractAt(
      name: "Tournament",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Tournament>;
    getContractAt(
      name: "Util",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Util>;

    deployContract(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwner>;
    deployContract(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    deployContract(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IOwnable>;
    deployContract(
      name: "IVRFCoordinatorV2Plus",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVRFCoordinatorV2Plus>;
    deployContract(
      name: "IVRFMigratableConsumerV2Plus",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVRFMigratableConsumerV2Plus>;
    deployContract(
      name: "IVRFSubscriptionV2Plus",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVRFSubscriptionV2Plus>;
    deployContract(
      name: "VRFV2PlusClient",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFV2PlusClient>;
    deployContract(
      name: "VRFConsumerBaseV2Plus",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFConsumerBaseV2Plus>;
    deployContract(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "PairingEngine",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PairingEngine>;
    deployContract(
      name: "Tournament",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Tournament>;
    deployContract(
      name: "Util",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Util>;

    deployContract(
      name: "ConfirmedOwner",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwner>;
    deployContract(
      name: "ConfirmedOwnerWithProposal",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    deployContract(
      name: "IOwnable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IOwnable>;
    deployContract(
      name: "IVRFCoordinatorV2Plus",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVRFCoordinatorV2Plus>;
    deployContract(
      name: "IVRFMigratableConsumerV2Plus",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVRFMigratableConsumerV2Plus>;
    deployContract(
      name: "IVRFSubscriptionV2Plus",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVRFSubscriptionV2Plus>;
    deployContract(
      name: "VRFV2PlusClient",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFV2PlusClient>;
    deployContract(
      name: "VRFConsumerBaseV2Plus",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFConsumerBaseV2Plus>;
    deployContract(
      name: "Ownable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "PairingEngine",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PairingEngine>;
    deployContract(
      name: "Tournament",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Tournament>;
    deployContract(
      name: "Util",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Util>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
