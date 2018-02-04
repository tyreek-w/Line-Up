"use strict";

const basic = 0;
const advanced = 0;
const regular = 0;

const creditOptions = [10, 20, 30];
const plans = [basic, advanced, regular];

const memberPlans = {
  terms: {
    daily: plans,
    weekly: plans,
    monthly: plans,
    trimonthly: plans,
    annual: plans
  },
};


export default {memberPlans, creditOptions};
