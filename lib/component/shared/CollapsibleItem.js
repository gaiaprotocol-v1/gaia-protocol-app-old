"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class CollapsibleItem extends skydapp_browser_1.DomNode {
    constructor(title, desc) {
        super(".collapsible-item");
        this.append((0, skydapp_browser_1.el)("section", { "data-aos": "fade-up" }, this.title = (0, skydapp_browser_1.el)("button.collapsible", title, {
            click: () => {
                if (this.content.domElement.style.display === "block") {
                    this.content.style({
                        display: "none",
                    });
                    this.title.style({
                        backgroundColor: "none",
                    });
                }
                else {
                    this.content.style({
                        display: "block",
                    });
                    this.title.style({
                        backgroundColor: "#00445A",
                    });
                }
            }
        }), this.content = (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("p", desc))));
    }
}
exports.default = CollapsibleItem;
//# sourceMappingURL=CollapsibleItem.js.map