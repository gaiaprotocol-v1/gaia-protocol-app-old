"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMerkleProof = exports.getMerkleRoot = void 0;
const ethers_1 = require("ethers");
const merkletreejs_1 = require("merkletreejs");
const keccak256_1 = __importDefault(require("keccak256"));
const getLeaf = (entry) => {
    if (typeof entry == "string") {
        if (entry.startsWith("0x"))
            return ethers_1.utils.keccak256(entry);
        return ethers_1.utils.keccak256(ethers_1.utils.toUtf8Bytes(entry));
    }
    return ethers_1.utils.solidityKeccak256(["address", "uint256"], [entry[0], entry[1]]);
};
const getMerkleRoot = (entries) => {
    const leaves = entries.map(getLeaf);
    const tree = new merkletreejs_1.MerkleTree(leaves, keccak256_1.default, { sort: true });
    return tree.getHexRoot();
};
exports.getMerkleRoot = getMerkleRoot;
const getMerkleProof = (entries, target) => {
    const leaves = entries.map(getLeaf);
    const tree = new merkletreejs_1.MerkleTree(leaves, keccak256_1.default, { sort: true });
    return tree.getHexProof(getLeaf(target));
};
exports.getMerkleProof = getMerkleProof;
//# sourceMappingURL=merkle-tree.js.map