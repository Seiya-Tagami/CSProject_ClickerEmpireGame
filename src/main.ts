import { hamburgerController } from "./controller/hamburger";
import { optionsController } from "./controller/options";
import { user } from "./model/user";
import { StatusData, createStatusView } from "./view/status";
import { statusController } from "./controller/status";
import { purchase } from "./model/purchase";

const InitInjectingData: StatusData = {
  username: user.username,
  old: purchase.old,
  days: purchase.days,
  yen: purchase.yen
}

const initView = () => {
  createStatusView(InitInjectingData)
}

const initController = () => {
  statusController()
  optionsController()
  hamburgerController()
}

initView()
initController()