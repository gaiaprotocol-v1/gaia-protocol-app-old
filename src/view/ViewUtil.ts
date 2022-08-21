import { SkyRouter } from "skydapp-common";

class ViewUtil {

    public go(uri: string) {
        SkyRouter.go(uri);
        window.scrollTo(0, 0);
    }

    public waitTransactionAndRefresh(time = 2000) {
        setTimeout(() => SkyRouter.refresh(), time);
    }
}

export default new ViewUtil();