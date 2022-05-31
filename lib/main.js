"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const superagent_1 = __importDefault(require("superagent"));
const Wallet_1 = __importDefault(require("./klaytn/Wallet"));
const Home_1 = __importDefault(require("./view/Home"));
const Genesis_1 = __importDefault(require("./view/app/Genesis"));
const Layout_1 = __importDefault(require("./view/Layout"));
const StableDAO_1 = __importDefault(require("./view/app/StableDAO"));
const Supernova_1 = __importDefault(require("./view/app/Supernova"));
const BuyStableDAO_1 = __importDefault(require("./view/app/BuyStableDAO"));
const CheckHolder_1 = __importDefault(require("./view/CheckHolder"));
const GenesisLanding_1 = __importDefault(require("./view/landing/GenesisLanding"));
const SupernovaLanding_1 = __importDefault(require("./view/landing/SupernovaLanding"));
const StableLanding_1 = __importDefault(require("./view/landing/StableLanding"));
const Partners_1 = __importDefault(require("./view/landing/Partners"));
const Team_1 = __importDefault(require("./view/landing/Team"));
const DividendLanding_1 = __importDefault(require("./view/landing/DividendLanding"));
const SupernovaEvent_1 = __importDefault(require("./view/app/SupernovaEvent"));
(async () => {
    skydapp_browser_1.msg.language = skydapp_browser_1.BrowserInfo.language;
    skydapp_browser_1.msg.parseCSV((await superagent_1.default.get("/msg.csv")).text);
    skydapp_common_1.SkyRouter.route("**", Layout_1.default);
    skydapp_common_1.SkyRouter.route("", Home_1.default);
    skydapp_common_1.SkyRouter.route("checkholder", CheckHolder_1.default);
    skydapp_common_1.SkyRouter.route("team", Team_1.default);
    skydapp_common_1.SkyRouter.route("partners", Partners_1.default);
    skydapp_common_1.SkyRouter.route("genesis", Genesis_1.default);
    skydapp_common_1.SkyRouter.route("landing/genesis", GenesisLanding_1.default);
    skydapp_common_1.SkyRouter.route("supernova", Supernova_1.default);
    skydapp_common_1.SkyRouter.route("supernova/event", SupernovaEvent_1.default);
    skydapp_common_1.SkyRouter.route("landing/supernova", SupernovaLanding_1.default);
    skydapp_common_1.SkyRouter.route("stabledao", StableDAO_1.default);
    skydapp_common_1.SkyRouter.route("landing/stabledao", StableLanding_1.default);
    skydapp_common_1.SkyRouter.route("stabledao/buy", BuyStableDAO_1.default);
    skydapp_common_1.SkyRouter.route("landing/dividend", DividendLanding_1.default);
    if (sessionStorage.__spa_path) {
        skydapp_common_1.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
    if (await Wallet_1.default.connected() !== true) {
        await Wallet_1.default.connect();
    }
})();
//# sourceMappingURL=main.js.map