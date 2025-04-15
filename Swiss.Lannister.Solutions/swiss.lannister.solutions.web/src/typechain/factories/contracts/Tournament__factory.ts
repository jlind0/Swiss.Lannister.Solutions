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
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  Tournament,
  TournamentInterface,
} from "../../contracts/Tournament";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint16",
        name: "_totalRounds",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_pairingEngineAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AuthorizationError",
    type: "error",
  },
  {
    inputs: [],
    name: "AwaitingFulfillment",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotModifyPlayers",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidResult",
    type: "error",
  },
  {
    inputs: [],
    name: "NotFulfilled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "PlayerAlreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "PlayerNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "TournamentAlreadyStarted",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_elo",
        type: "uint16",
      },
    ],
    name: "addPlayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "beginNextRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTournament",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint16",
            name: "totalRounds",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "currentRound",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "id",
            type: "address",
          },
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint16",
                name: "elo",
                type: "uint16",
              },
              {
                internalType: "uint32",
                name: "score",
                type: "uint32",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "white",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "black",
                    type: "uint256",
                  },
                  {
                    internalType: "uint16",
                    name: "round",
                    type: "uint16",
                  },
                  {
                    internalType: "enum Util.MatchResult",
                    name: "result",
                    type: "uint8",
                  },
                ],
                internalType: "struct Util.Match[]",
                name: "matches",
                type: "tuple[]",
              },
            ],
            internalType: "struct Util.Player[]",
            name: "players",
            type: "tuple[]",
          },
          {
            internalType: "enum Util.TournamentStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct Util.TournamentResponse",
        name: "response",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "pairForCurrentRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "playerIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "removePlayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roundIds",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "white",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "black",
        type: "uint256",
      },
      {
        internalType: "enum Util.MatchResult",
        name: "result",
        type: "uint8",
      },
    ],
    name: "scoreMatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_random",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_round",
        type: "uint16",
      },
    ],
    name: "setRandomNumberForRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "start",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "status",
    outputs: [
      {
        internalType: "enum Util.TournamentStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalRounds",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
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
  "0x6080604052346102b157612ad180380380610019816102b5565b9283398101906060818303126102b15780516001600160401b0381116102b157810182601f820112156102b1578051906001600160401b03821161028a5761006a601f8301601f19166020016102b5565b93828552602083830101116102b157815f9260208093018387015e8401015260208101519061ffff82168092036102b15760400151906001600160a01b03821682036102b157331561029e575f8054336001600160a01b0319821681178355916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a382516001600160401b03811161028a57600154600181811c91168015610280575b602082101461026c57601f8111610209575b506020601f82116001146101a657819293945f9261019b575b50508160011b915f199060031b1c1916176001555b6002805461ffff191691909117905560088054610100600160a81b03191691811b610100600160a81b03169190911790556040516127f690816102db8239f35b015190505f80610146565b601f1982169060015f52805f20915f5b8181106101f1575095836001959697106101d9575b505050811b0160015561015b565b01515f1960f88460031b161c191690555f80806101cb565b9192602060018192868b0151815501940192016101b6565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f830160051c81019160208410610262575b601f0160051c01905b818110610257575061012d565b5f815560010161024a565b9091508190610241565b634e487b7160e01b5f52602260045260245ffd5b90607f169061011b565b634e487b7160e01b5f52604160045260245ffd5b631e4fbdf760e01b5f525f60045260245ffd5b5f80fd5b6040519190601f01601f191682016001600160401b0381118382101761028a5760405256fe60806040526004361015610011575f80fd5b5f3560e01c806306fdde031461202a578063200d2ed2146120035780632eff92a014611da3578063715018a614611d4c5780638a56829914611d2b5780638da5cb5b14611d045780638ed6811b14610c1b57806390a4cb9b14610bdf578063bc97551214610a52578063be9a655514610a03578063c012b112146109cb578063c5af35c11461071e578063cafef4d7146106f4578063d1e81281146104ad578063e76c293e146101565763f2fde38b146100c9575f80fd5b34610152576020366003190112610152576004356001600160a01b03811690819003610152576100f76124c7565b801561013f575f80546001600160a01b03198116831782556001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a3005b631e4fbdf760e01b5f525f60045260245ffd5b5f80fd5b34610152575f3660031901126101525760405160c081018181106001600160401b03821117610499576040526060815260208101905f825260408101915f8352606082015f815260808301906060825260a08401945f86526101b66120e8565b855261ffff60025416845261ffff6003541681526006546101d6816122db565b906101e460405192836120c7565b808252601f196101f3826122db565b015f5b8181106104625750505f5b818110610387575050835260ff600854169060038210156103735761ffff9187528161024060405197602089525160c060208a015260e089019061223d565b955116604087015251166060850152516001600160a01b0316608084015251828203601f190160a084015280518083526020600582901b8401810193928101925f92918101905b8284106102a4578680876102a08b5160c0840190612261565b0390f35b9091929394601f19828203018352855160806102c9825160a0855260a085019061223d565b916020810151602085015261ffff604082015116604085015263ffffffff60608201511660608501520151916080818303910152602080835192838152019201905f905b80821061032c5750505060208060019297019301940192919390610287565b90919260608451805183526020810151602084015261ffff60408201511660408401520151906005821015610373576080816001936060602094015201940192019061030d565b634e487b7160e01b5f52602160045260245ffd5b610390816122ae565b90549060031b1c5f52600760205260405f206003604051916103b183612091565b6103ba8161219f565b83526001810154602084015263ffffffff600282015461ffff8116604086015260101c166060840152018054906103f0826122db565b916103fe60405193846120c7565b80835260208301915f5260205f205f925b8284106104445750505050608082015261043f919061042e8286612349565b526104398185612349565b5061235d565b610201565b6003602060019261045485612308565b81520192019301929061040f565b60209060405161047181612091565b606081525f838201525f60408201525f606082015260606080820152828287010152016101f6565b634e487b7160e01b5f52604160045260245ffd5b34610152576060366003190112610152576004356001600160401b03811161015257366023820112156101525780600401356001600160401b0381116104995760405191610505601f8301601f1916602001846120c7565b818352366024838301011161015257815f92602460209301838601378301015260443560243561ffff821682036101525761053e6124c7565b60ff600854166003811015610373576106e557805f526007602052600160405f2001546106d657600654600160401b811015610499578161058a8260016105a2940160065560066122c6565b90919082549060031b91821b915f19901b1916179055565b805f52600760205260405f2083516001600160401b038111610499576105c88254612059565b601f811161069b575b50602094601f821160011461063a579481929394955f9261062f575b50508160011b915f199060031b1c19161790555b5f8181526007602052604090206001810191909155600201805461ffff191661ffff92909216919091179055005b0151905085806105ed565b601f19821695835f52805f20915f5b8881106106835750836001959697981061066b575b505050811b019055610601565b01515f1960f88460031b161c1916905585808061065e565b91926020600181928685015181550194019201610649565b6106c690835f5260205f20601f840160051c810191602085106106cc575b601f0160051c01906122f2565b856105d1565b90915081906106b9565b63b2ab567b60e01b5f5260045ffd5b63280439a160e01b5f5260045ffd5b34610152575f3660031901126101525761070c6124c7565b6107146124c7565b61071c612521565b005b34610152576060366003190112610152576044356024356004356005831015610152576107496124c7565b5f91831561094c576003545f1981019081116109b75761076b61ffff9161226e565b90549060031b1c1691805f526007602052600160405f2001541580156109a0575b610991575f90815260076020526040808220928252812093946003830194915b855481101561071c575f8561ffff60026107c6858b6123c8565b50015416146107e2575b61071c576107dd9061235d565b6107ac565b956107f48282999495969793996123c8565b509160038601915f5b8354811015610981578261ffff600261081684886123c8565b500154161461082e575b6108299061235d565b6107fd565b61083881856123c8565b50600186015460018201541480610976575b6108545750610820565b935050975095949392979160020160ff815460101c166005811015610373571580159061095a575b61094c578360028a9361089283610898956123e1565b016123e1565b61037357600182036108e2576108db600285016108be63ffffffff825460101c166124af565b65ffffffff000082549160101b169065ffffffff00001916179055565b60016107d0565b5f96506002820361090c57610907600284016108be63ffffffff825460101c166124af565b6108db565b5f965060021982016108db57610932600284016108be63ffffffff825460101c16612497565b610907600285016108be63ffffffff825460101c16612497565b62f8b33f60e71b5f5260045ffd5b5060ff600283015460101c16600581101561037357151561087c565b50805486541461084a565b50979150959493929791506107d0565b632a645edb60e01b5f5260045ffd5b50815f526007602052600160405f2001541561078c565b634e487b7160e01b5f52601160045260245ffd5b3461015257602036600319011261015257600435600654811015610152576109f46020916122ae565b90549060031b1c604051908152f35b34610152575f36600319011261015257610a1b6124c7565b60ff60085416600381101561037357610a4357600160ff1960085416176008556107146124c7565b63e610054d60e01b5f5260045ffd5b3461015257602036600319011261015257600435610a6e6124c7565b60ff600854166003811015610373576106e557805f526007602052600160405f20015415610991575f5b600654908181101561071c5782610aae826122ae565b90549060031b1c14610ac957610ac4915061235d565b610a98565b5f1982019182116109b75761058a610ae3610af0936122ae565b90549060031b1c916122ae565b6006548015610bcb575f1901610b05816122ae565b8154905f199060031b1b191690556006555f526007602052600360405f20610b2d8154612059565b80610b87575b505f60018201555f6002820155018054905f815581610b4e57005b816003029160038304036109b7575f5260205f20908101905b8181101561071c57805f600392555f60018201555f600282015501610b67565b601f8111600114610b9d57505f81555b82610b33565b610bba90825f526001601f60205f20920160051c820191016122f2565b805f525f6020812081835555610b97565b634e487b7160e01b5f52603160045260245ffd5b34610152576020366003190112610152576004356003548110156101525761ffff610c0b60209261226e565b90549060031b1c16604051908152f35b34610152575f36600319011261015257610c336124c7565b6003545f1981018181116109b75761ffff165f52600460205260405f2060405191828360208454928381520180945f5260205f20925f905b80601f830110611b5c57610d81945491818110611b48575b818110611b31575b818110611b1a575b818110611b03575b818110611aed575b818110611ad6575b818110611abf575b818110611aa8575b818110611a91575b818110611a7a575b818110611a63575b818110611a4c575b818110611a35575b818110611a1e575b818110611a07575b8181106119f0575b8181106119d9575b8181106119c2575b8181106119ab575b818110611994575b81811061197d575b818110611966575b81811061194f575b818110611938575b818110611921575b81811061190a575b8181106118f3575b8181106118dc575b8181106118c5575b8181106118ae575b818110611897575b10611889575b5003846120c7565b60ff60085460a81c16908115611880575b508015611877575b6118685760065490610dab826122db565b610db860405191826120c7565b828152610dc4836122db565b6020820190601f1901368237610dd9846122db565b91610de760405193846120c7565b848352610df3856122db565b602084019190601f19013683375f955f5b81811061177b575050604051630f5c08b960e41b815260206004820152905160248201819052909283916044830191905f5b81811061175e5750505090805f92038173__$f781bb3d3060cc7c00f7d655d3b188f1f9$__5af491821561104d575f926116c0575b50604051634fb2b60160e01b815260206004820152925160248401819052839160448301915f5b8181106116a15750505090805f92038173__$f781bb3d3060cc7c00f7d655d3b188f1f9$__5af491821561104d575f92611601575b50610ed360065461236b565b5f908180805b60065496878610156115595761ffff610ef28789612349565b51169763ffffffff610f048884612349565b5116985f5f5b8381106114455750610f1b9061236b565b995f915f5b84811061132d5750505050505f905f9760018a51115f146112fd579b9a999897969594939291905f9c60015b15611073575b8951604051634a563a3360e11b8152606060048201528e51606482018190529e9f509c9d5f9160848f01918e9084905b808210611058575050509d9e92939495969798999a9b9c9d8f60409281926024830152856044830152038173__$f781bb3d3060cc7c00f7d655d3b188f1f9$__5af4801561104d578f9e5f905f92611012575b5090610fe1919361239d565b9d515f1981019081116109b7578e101561100a575b9d9c9b9a999897969594939291909d610f4c565b5f9d50610ff6565b9f50505060408e813d8111611046575b61102c81836120c7565b8101031261015257610fe18f9e6020815191015191610fd5565b503d611022565b6040513d5f823e3d90fd5b90919360208060019260ff8851168152019501920190610f82565b8d8a5111610f5257919295999093969a9c611095909c9995989c8651906123aa565b935f5b86518110156112e9578b6110cc896110bb6110b3858b61239d565b8b51906123aa565b926110c6848c612349565b516124ed565b156110da5750600101611098565b93999550509996989c9b509994936110f29250612349565b519160015b156112dd57808361110b6111119388612349565b5261235d565b95611125575090600180915b019394610ed9565b9190825f52600760205260405f20815f52600760205260405f20905f5f9060035f93019182548015155f146112d2575f1981019081116109b75761116c61117291856123c8565b50612308565b6003860180545f198101919082116109b75761119361116c8a938d936123c8565b9281815114806112c5575b15611292575050925050509286925b61123b575b6003545f1981019081116109b7576112099460039361ffff6111d66112039461226e565b905490871b1c166040519687936111ec856120ac565b8452602084015260408301525f6060830152612402565b01612402565b825f52600560205261121e8160405f20612474565b5f5260056020526112328260405f20612474565b60015f9161111d565b9b6001919350809250018082116109b7576112586001918e612349565b511661128657849161126a849261235d565b9b8d515f1981019081116109b7578d106111b2575f9c506111b2565b829161126a869261235d565b602001511491826112ba575b5050156112b0575050859284926111ad565b92509260016111ad565b51149050865f61129e565b508260208501511461119e565b5092509260016111ad565b9591509160019061111d565b509996989c9b9197935099949193506110f7565b96949293975097905080511561131957602001519160016110f7565b634e487b7160e01b5f52603260045260245ffd5b611336816122ae565b90549060031b1c805f5260076020528d60405f2060405161135681612091565b61135f8261219f565b81526001820154602082015286866002840154936003604085019161ffff8716835263ffffffff606087019760101c168752019384549061139f826122db565b916113ad60405193846120c7565b80835260208301965f5260205f205f905b82821061141857505050608001525161ffff16149290915082611407575b50506113ed575b5050600101610f20565b946113ff9161110b8260019598612349565b93908d6113e3565b5163ffffffff16149050855f6113dc565b92955092955092956003602060019261143085612308565b81520192019201928b949196938d96936113be565b611458819b9a999897969594939b6122ae565b90549060031b1c5f52600760205260405f208c6040519161147883612091565b6114818161219f565b8352600181015460208401526002810154926003604082019261ffff8616845263ffffffff606084019660101c168652019081546114be816122db565b926114cc60405194856120c7565b81845260208401905f5260205f205f915b83831061153b5750505050918f9798999a9b9c9d9e9f9291608061ffff930152511614918261152a575b5050611516575b600101610f0a565b9061152260019161235d565b91905061150e565b5163ffffffff161490508c5f611507565b6003602060019261154b85612308565b8152019201920191906114dd565b505061156157005b805f526007602052600260405f2001600163ffffffff825460101c160163ffffffff81116109b757815465ffffffff0000191660109190911b65ffffffff000016179055805f526007602052600360405f200190600354915f1983019283116109b75761ffff6115d361071c9461226e565b90549060031b1c16604051926115e8846120ac565b8084526020840152604083015260046060830152612402565b9091503d805f833e61161381836120c7565b810190602081830312610152578051906001600160401b03821161015257019080601f830112156101525781519061164a826122db565b9261165860405194856120c7565b82845260208085019360051b82010191821161015257602001915b818310611684575050509085610ec7565b825163ffffffff8116810361015257815260209283019201611673565b825163ffffffff16845286945060209384019390920191600101610e92565b9091503d805f833e6116d281836120c7565b810190602081830312610152578051906001600160401b03821161015257019080601f8301121561015257815190611709826122db565b9261171760405194856120c7565b82845260208085019360051b82010191821161015257602001915b818310611743575050509086610e6b565b825161ffff8116810361015257815260209283019201611732565b825161ffff16845286945060209384019390920191600101610e36565b611787819593956122ae565b90549060031b1c5f52600760205260405f20604051906117a682612091565b6117af8161219f565b8252600181015460208301526002810154916003604082019261ffff8516845263ffffffff606084019560101c16855201908154916117ed836122db565b926117fb60405194856120c7565b80845260208401915f5260205f205f925b82841061184a57505050506080015251611842929163ffffffff9161ffff16611835848a612349565b52511661110b8289612349565b939193610e04565b6003602060019261185a85612308565b81520192019301929061180c565b6303de361f60e11b5f5260045ffd5b50815115610d9a565b90501583610d92565b60f81c815260200186610d79565b92602060019160ff8560f01c168152019301610d73565b92602060019160ff8560e81c168152019301610d6b565b92602060019160ff8560e01c168152019301610d63565b92602060019160ff8560d81c168152019301610d5b565b92602060019160ff8560d01c168152019301610d53565b92602060019160ff8560c81c168152019301610d4b565b92602060019160ff8560c01c168152019301610d43565b92602060019160ff8560b81c168152019301610d3b565b92602060019160ff8560b01c168152019301610d33565b92602060019160ff8560a81c168152019301610d2b565b92602060019160ff8560a01c168152019301610d23565b92602060019160ff8560981c168152019301610d1b565b92602060019160ff8560901c168152019301610d13565b92602060019160ff8560881c168152019301610d0b565b92602060019160ff8560801c168152019301610d03565b92602060019160ff8560781c168152019301610cfb565b92602060019160ff8560701c168152019301610cf3565b92602060019160ff8560681c168152019301610ceb565b92602060019160ff8560601c168152019301610ce3565b92602060019160ff8560581c168152019301610cdb565b92602060019160ff8560501c168152019301610cd3565b92602060019160ff8560481c168152019301610ccb565b92602060019160ff8560401c168152019301610cc3565b92602060019160ff8560381c168152019301610cbb565b92602060019160ff8560301c168152019301610cb3565b92602060019160ff8560281c168152019301610cab565b92602060019160ff85831c168152019301610ca3565b92602060019160ff8560181c168152019301610c9b565b92602060019160ff8560101c168152019301610c93565b92602060019160ff8560081c168152019301610c8b565b92602060019160ff85168152019301610c83565b916020919350610400600191865460ff8116825260ff8160081c168583015260ff8160101c16604083015260ff8160181c16606083015260ff81861c16608083015260ff8160281c1660a083015260ff8160301c1660c083015260ff8160381c1660e083015260ff8160401c1661010083015260ff8160481c1661012083015260ff8160501c1661014083015260ff8160581c1661016083015260ff8160601c1661018083015260ff8160681c166101a083015260ff8160701c166101c083015260ff8160781c166101e083015260ff8160801c1661020083015260ff8160881c1661022083015260ff8160901c1661024083015260ff8160981c1661026083015260ff8160a01c1661028083015260ff8160a81c166102a083015260ff8160b01c166102c083015260ff8160b81c166102e083015260ff8160c01c1661030083015260ff8160c81c1661032083015260ff8160d01c1661034083015260ff8160d81c1661036083015260ff8160e01c1661038083015260ff8160e81c166103a083015260ff8160f01c166103c083015260f81c6103e0820152019401920186929391610c6b565b34610152575f366003190112610152575f546040516001600160a01b039091168152602090f35b34610152575f36600319011261015257602061ffff60025416604051908152f35b34610152575f36600319011261015257611d646124c7565b5f80546001600160a01b0319811682556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b346101525760403660031901126101525760243561ffff81168091036101525760088054901c6001600160a01b03163303611ff5576040516369ec095160e01b81526004803590820152905f8260248173__$f781bb3d3060cc7c00f7d655d3b188f1f9$__5af491821561104d575f92611f58575b505f52600460205260405f20908051906001600160401b03821161049957600160401b8211610499576020908354838555808410611f0e575b5001915f5260205f208160051c915f5b838110611ecf5750601f198116900380611e85575b6008805460ff60a81b19169055005b925f935f5b818110611e9f57505050015580808080611e76565b9091946020611ec56001928460ff8a5116919060ff809160031b9316831b921b19161790565b9601929101611e8a565b5f5f5b60208110611ee7575083820155600101611e61565b865190969160019160209160ff60038b901b81811b199092169216901b1792019601611ed2565b611f3890855f52835f20601f80870160051c82019281881680611f3e575b500160051c01906122f2565b84611e51565b5f198501908154905f19908a0360031b1c16905589611f2c565b9091503d805f833e611f6a81836120c7565b810190602081830312610152578051906001600160401b03821161015257019080601f8301121561015257815190611fa1826122db565b92611faf60405194856120c7565b82845260208085019360051b82010191821161015257602001915b818310611fdb575050509082611e18565b825160ff8116810361015257815260209283019201611fca565b621607ef60ea1b5f5260045ffd5b34610152575f36600319011261015257602060ff600854166120286040518092612261565bf35b34610152575f366003190112610152576102a06120456120e8565b60405191829160208352602083019061223d565b90600182811c92168015612087575b602083101461207357565b634e487b7160e01b5f52602260045260245ffd5b91607f1691612068565b60a081019081106001600160401b0382111761049957604052565b608081019081106001600160401b0382111761049957604052565b90601f801991011681019081106001600160401b0382111761049957604052565b604051905f82600154916120fb83612059565b80835292600181169081156121805750600114612121575b61211f925003836120c7565b565b5060015f90815290917fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b81831061216457505090602061211f92820101612113565b602091935080600191548385890101520191019091849261214c565b6020925061211f94915060ff191682840152151560051b820101612113565b9060405191825f8254926121b284612059565b808452936001811690811561221b57506001146121d7575b5061211f925003836120c7565b90505f9291925260205f20905f915b8183106121ff57505090602061211f928201015f6121ca565b60209193508060019154838589010152019101909184926121e6565b90506020925061211f94915060ff191682840152151560051b8201015f6121ca565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9060038210156103735752565b906003548210156113195760035f52600482901c7fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b019160011b601e1690565b6006548110156113195760065f5260205f2001905f90565b8054821015611319575f5260205f2001905f90565b6001600160401b0381116104995760051b60200190565b8181106122fd575050565b5f81556001016122f2565b90604051612315816120ac565b60ff600282948054845260018101546020850152015461ffff8116604084015260101c169060058210156103735760600152565b80518210156113195760209160051b010190565b5f1981146109b75760010190565b90612375826122db565b61238260405191826120c7565b8281528092612393601f19916122db565b0190602036910137565b919082018092116109b757565b81156123b4570690565b634e487b7160e01b5f52601260045260245ffd5b8054821015611319575f52600360205f20910201905f90565b9060058110156103735762ff000082549160101b169062ff00001916179055565b8054600160401b8110156104995761241f916001820181556123c8565b6124615760026060918351815560208401516001820155019161ffff806040830151161661ffff19845416178355015160058110156103735761211f916123e1565b634e487b7160e01b5f525f60045260245ffd5b80549190600160401b831015610499578261058a91600161211f950181556122c6565b63ffffffff60039116019063ffffffff82116109b757565b63ffffffff60069116019063ffffffff82116109b757565b5f546001600160a01b031633036124da57565b63118cdaa760e01b5f523360045260245ffd5b905f5b8381106124ff57505050505f90565b8261250a8284612349565b5114612518576001016124f0565b50505050600190565b60085460ff5f9160a81c166126405760035461ffff60025416811180612632575b15612558575050600260ff196008541617600855565b905061256261264f565b6125695750565b60018101908181116109b757600160401b8110156104995761258e908260035561226e565b61ffff80839493549260031b9316831b921b191617905560018060a01b0360085460081c166003545f1981019081116109b7576125cd61ffff9161226e565b90549060031b1c16813b15610152575f9160448392604051948593849263031141bf60e61b845230600485015260248401525af1801561104d57612622575b506008805460ff60a81b1916600160a81b179055565b5f61262c916120c7565b5f61260c565b5061263b61264f565b612542565b63a4f04f7360e01b5f5260045ffd5b6003548061265e575b50600190565b5f905f1981019081116109b75761267761ffff9161226e565b90549060031b1c16600654915b828110612692575050612658565b5f9261269d826122ae565b90549060031b1c5f52600760205260405f20936003604051956126bf87612091565b6126c88161219f565b87526001810154602088015263ffffffff600282015461ffff811660408a015260101c166060880152019485546126fe816122db565b9661270c60405198896120c7565b81885260208801905f5260205f20905f905b83821061279c57505050506080019485525b8451805182101561278a578161274591612349565b518461ffff604083015116149081612774575b5061276b576127669061235d565b612730565b50505050505f90565b606091500151600581101561037357155f612758565b505092506127979061235d565b612684565b600360206001926127af869a999a612308565b81520193019101909195949561271e56fea26469706673582212202d198526c8cf1960b4e61ca45021d11896386718cb92f21677c5bac29a418f2f64736f6c634300081c0033";

type TournamentConstructorParams =
  | [linkLibraryAddresses: TournamentLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TournamentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Tournament__factory extends ContractFactory {
  constructor(...args: TournamentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        Tournament__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: TournamentLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$f781bb3d3060cc7c00f7d655d3b188f1f9\\$__", "g"),
      linkLibraryAddresses["contracts/Util.sol:Util"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    _name: string,
    _totalRounds: BigNumberish,
    _pairingEngineAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _name,
      _totalRounds,
      _pairingEngineAddress,
      overrides || {}
    );
  }
  override deploy(
    _name: string,
    _totalRounds: BigNumberish,
    _pairingEngineAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _name,
      _totalRounds,
      _pairingEngineAddress,
      overrides || {}
    ) as Promise<
      Tournament & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Tournament__factory {
    return super.connect(runner) as Tournament__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TournamentInterface {
    return new Interface(_abi) as TournamentInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Tournament {
    return new Contract(address, _abi, runner) as unknown as Tournament;
  }
}

export interface TournamentLibraryAddresses {
  ["contracts/Util.sol:Util"]: string;
}
