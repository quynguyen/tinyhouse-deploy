"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const Bookings_1 = require("./Bookings");
const Listing_1 = require("./Listing");
const User_1 = require("./User");
const Viewer_1 = require("./Viewer");
exports.resolvers = lodash_merge_1.default(Viewer_1.viewResolvers, User_1.userResolvers, Listing_1.listingResolvers, Bookings_1.bookingResolvers);
