/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  PairingEngine,
  PairingEngineInterface,
} from "../../contracts/PairingEngine";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "subscriptionId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "coordinator",
        type: "address",
      },
    ],
    name: "OnlyOwnerOrCoordinator",
    type: "error",
  },
  {
    inputs: [],
    name: "RandomAlreadyGeneratedForRound",
    type: "error",
  },
  {
    inputs: [],
    name: "TournamentNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "vrfCoordinator",
        type: "address",
      },
    ],
    name: "CoordinatorSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tournamentAddress",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "round",
        type: "uint16",
      },
    ],
    name: "requestRandomForRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "s_vrfCoordinator",
    outputs: [
      {
        internalType: "contract IVRFCoordinatorV2Plus",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vrfCoordinator",
        type: "address",
      },
    ],
    name: "setCoordinator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803460cb57601f61083838819003918201601f19168301916001600160401b0383118484101760cf5780849260209460405283398101031260cb575133156086575f80546001600160a01b0319908116331790915560028054909116739ddfaca8183c41ad55329bdeed9f6a8d53168b1b17905560035560405161075490816100e48239f35b60405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f00000000000000006044820152606490fd5b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe60806040526004361015610011575f80fd5b5f5f3560e01c80631fe543e31461057657806379ba5097146104cb5780638da5cb5b146104a45780638ea98117146103d45780639eccacf6146103ab578063c4506fc01461015e5763f2fde38b14610067575f80fd5b3461015b57602036600319011261015b576100806106d2565b81546001600160a01b0316903382900361011d576001600160a01b0316903382146100de57600180546001600160a01b031916831790557fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12788380a380f35b60405162461bcd60e51b815260206004820152601760248201527621b0b73737ba103a3930b739b332b9103a379039b2b63360491b6044820152606490fd5b60405162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b6044820152606490fd5b80fd5b503461015b57604036600319011261015b576101786106d2565b6024359061ffff82168092036103a7576001600160a01b03168083526005602052604083205461ffff1682111561039857600254600354604051916001600160a01b0316906020830167ffffffffffffffff81118482101761038457604052600183526040519263125fa26760e31b60208501525115156024840152602483526102036044846106e8565b60405160c0810181811067ffffffffffffffff8211176103705791876101046020959361ffff97956040527f787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae81528681019384528660408201966003885263ffffffff60608401620493e081528160808601916001835260a087019485526040519d8e9c8d9b8c99634d8e1c2f60e11b8b528960048c01525160248b01525160448a01525116606488015251166084860152511660a48401525160c060c484015280519182918260e4860152018484015e8181018301849052601f01601f191681010301925af190811561036557849161032f575b50835260046020908152604080852080546001600160a01b03191684179055918452600590528220805461ffff1916909117905580f35b90506020813d60201161035d575b8161034a602093836106e8565b8101031261035957515f6102f8565b8380fd5b3d915061033d565b6040513d86823e3d90fd5b634e487b7160e01b88526041600452602488fd5b634e487b7160e01b87526041600452602487fd5b63a169da1360e01b8352600483fd5b8280fd5b503461015b578060031936011261015b576002546040516001600160a01b039091168152602090f35b503461015b57602036600319011261015b576103ee6106d2565b81546001600160a01b0316338114158061048f575b61046757506001600160a01b0316801561045857600280546001600160a01b031916821790556040519081527fd1a6a14209a385a964d036e404cb5cfb71f4000cdb03c9366292430787261be690602090a180f35b63d92e233d60e01b8252600482fd5b60025463061db9c160e01b8452336004526024919091526001600160a01b0316604452606482fd5b506002546001600160a01b0316331415610403565b503461015b578060031936011261015b57546040516001600160a01b039091168152602090f35b503461015b578060031936011261015b576001546001600160a01b03811633036105385781546001600160a01b031980821633908117855592166001556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b60405162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b6044820152606490fd5b50346106955760403660031901126106955760243560043567ffffffffffffffff821161069557366023830112156106955781600401359067ffffffffffffffff8211610695573660248360051b85010111610695576002546001600160a01b0316338190036106bc57505f818152600460205260409020546001600160a01b0316156106ad575f818152600460205260409020546001600160a01b03169115610699575f52600460205260018060a01b0360405f2054165f52600560205261ffff60405f20541691813b156106955760446024915f80946040519687958694630177fc9560e51b86520135600485015260248401525af1801561068a5761067c575080f35b61068891505f906106e8565b005b6040513d5f823e3d90fd5b5f80fd5b634e487b7160e01b5f52603260045260245ffd5b6303361a2560e01b5f5260045ffd5b63073e64fd60e21b5f523360045260245260445ffd5b600435906001600160a01b038216820361069557565b90601f8019910116810190811067ffffffffffffffff82111761070a57604052565b634e487b7160e01b5f52604160045260245ffdfea264697066735822122020098fdcad8b35d9dbc931e5e3413020d51085a00f97fec04eb8fabeedd7ce8064736f6c634300081c0033";

type PairingEngineConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PairingEngineConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PairingEngine__factory extends ContractFactory {
  constructor(...args: PairingEngineConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    subscriptionId: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(subscriptionId, overrides || {});
  }
  override deploy(
    subscriptionId: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(subscriptionId, overrides || {}) as Promise<
      PairingEngine & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PairingEngine__factory {
    return super.connect(runner) as PairingEngine__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PairingEngineInterface {
    return new Interface(_abi) as PairingEngineInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PairingEngine {
    return new Contract(address, _abi, runner) as unknown as PairingEngine;
  }
}
