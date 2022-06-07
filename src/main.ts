import { BrowserInfo, msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import Wallet from "./klaytn/Wallet";
import Home from "./view/Home";
import Genesis from "./view/app/Genesis";
import Layout from "./view/Layout";
import StableDAO from "./view/app/StableDAO";
import Supernova from "./view/app/Supernova";
import BuyStableDAO from "./view/app/BuyStableDAO";
import CheckHolder from "./view/CheckHolder";
import GenesisLanding from "./view/landing/GenesisLanding";
import SupernovaLanding from "./view/landing/SupernovaLanding";
import StableDaoLanding from "./view/landing/StableLanding";
import Partners from "./view/landing/Partners";
import Team from "./view/landing/Team";
import DividendLanding from "./view/landing/DividendLanding";
import SupernovaEvent from "./view/app/SupernovaEvent";
import Governance from "./view/app/Governance";
import GovernanceDetail from "./view/app/GovernanceDetail";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout);
    SkyRouter.route("", Home);
    SkyRouter.route("checkholder", CheckHolder);
    SkyRouter.route("team", Team);
    SkyRouter.route("partners", Partners);

    // Genesis
    SkyRouter.route("genesis/app", Genesis);
    SkyRouter.route("genesis", GenesisLanding);

    // Supernova
    SkyRouter.route("supernova/app", Supernova);
    SkyRouter.route("supernova/event", SupernovaEvent);
    SkyRouter.route("supernova", SupernovaLanding);

    // StableDAO
    SkyRouter.route("stabledao/app", StableDAO);
    SkyRouter.route("stabledao", StableDaoLanding);
    SkyRouter.route("stabledao/buy", BuyStableDAO);

    // Dividend
    SkyRouter.route("dividend", DividendLanding);

    // Governance
    SkyRouter.route("governances", Governance);
    SkyRouter.route("governance/{id}", GovernanceDetail);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();