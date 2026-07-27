import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from "eslint-config-prettier";


export default defineConfig([
  globalIgnores(['dist', "build", "node_modules","docs"]),
  {
    files: ['**/*.{ts,tsx}'], 
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
  "no-console": "warn",
  "no-debugger": "error", 
  "eqeqeq": "error", 
  "prefer-const": "error", 
  "no-var": "error",
  "no-duplicate-imports": "error",  
  "curly": "error",
  "object-shorthand": "error",
  "no-alert": "warn",
  "no-useless-return": "error",
  "no-self-assign": "error",
  "no-unreachable": "error",
  "no-unreachable-loop": "warn",
  "no-constant-condition": "warn",
  "no-empty": "error",
  
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/no-unused-vars": "error",
  "@typescript-eslint/consistent-type-imports": "error",
  "@typescript-eslint/no-empty-object-type": "warn"
     }
  },
  eslintConfigPrettier
])




  // "no-console" :Agar project me console.log() use karoge, to ESLint sirf warning dega, code run hona ya build hona band nahi karega. ✅

  // "no-debugger": "error", /**Agar code me debugger; statement mila, to ESLint usse error maanega aur lint fail ho jayega. ❌ */

  // "eqeqeq": "error", /** for check equality alwasy use === ,  never use == */

  // "prefer-const": "error", /** Agar variable kabhi change nahi hota → const ; Agar variable baad me reassign hota hai → let */

  // "no-var": "error", /** never ever use var keyword in your code */

  // "no-duplicate-imports": "error",  /** Same file ko baar-baar import mat karo. import React from "react"; import { useState } from "react"; import React, { useState } from "react"; */

  // "curly": "error", /** use curley braces for define block of code like ex. if-else, for-loop  etc. */ 
  /**
   * 
   * if (isLogin) {
   login();
    } ✅

    if (isLogin)
    login();❌
   */

  // "object-shorthand": "error", /** write modern javascript , like same key-value pr only key ; const obj = {name} */

  // "no-alert": "warn",/** Use proper UI toast/dialog instead.  avoid alert("Hello") ,  */

  // "no-trailing-spaces": "error", /** Har line ke end me extra spaces allow nahi hain. trailling spaces are not allowed ex. console.log("sourav"); .... you give 4 spaces after console */

  // "eol-last": "error", /** Every file should end with a newline. ; ke baad Enter press kiya gaya hai, yani file ek blank line/newline ke saath end hoti hai. */

  //"no-useless-return": "error", 
  /** function test() {
  return;
  } */


  //  "no-self-assign": "error", /** count = count; */

   
  // "no-unreachable": "error", 
  /**
   * return;

console.log("Hello");
   */
   

  // "@typescript-eslint/no-explicit-any": "warn", /** Agar tum explicitly any type use karoge, to ESLint warning dega. */

  // "@typescript-eslint/no-unused-vars": "error", /** detect unused variables */

  // "@typescript-eslint/consistent-type-imports": "error", /** Instead of import User from "./types"; import type User from "./types"; more cleaner */


  // "@typescript-eslint/no-empty-interface": "warn" /** Empty interface generally useless. */
 