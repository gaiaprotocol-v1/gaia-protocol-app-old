import { BrowserInfo, msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import Wallet from "./klaytn/Wallet";
import Home from "./view/Home";
import Genesis from "./view/Genesis";
import Layout from "./view/Layout";
import StableDAO from "./view/StableDAO";
import Supernova from "./view/Supernova";
import BuyStableDAO from "./view/BuyStableDAO";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout);
    SkyRouter.route("", Home);
    SkyRouter.route("genesis", Genesis);
    SkyRouter.route("supernova", Supernova);
    SkyRouter.route("stabledao", StableDAO);
    SkyRouter.route("stabledao/buy", BuyStableDAO);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();