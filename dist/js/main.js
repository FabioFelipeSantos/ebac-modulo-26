"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greeting_1 = __importDefault(require("./greeting"));
const multiply_1 = __importDefault(require("./multiply"));
const myGreeting = (0, greeting_1.default)("Fábio");
const myMultiplication = (0, multiply_1.default)(15, 27);
console.log("Greeting: ", myGreeting);
console.log("Multiplication: ", myMultiplication);
